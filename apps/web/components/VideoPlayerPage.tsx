'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import VideoPlayer from '@video-player/component'
import type { QualityOption } from '@video-player/component'
import { mockCourses, mockUserInfo, convertToQualityList, type MockLesson } from '@/lib/mockData'

interface VideoPlayerPageProps {
  lessonId?: string
  courseId?: string
}

export default function VideoPlayerPage({ lessonId, courseId }: VideoPlayerPageProps) {
  const router = useRouter()
  const [currentLesson, setCurrentLesson] = useState<MockLesson | null>(null)
  const [qualityList, setQualityList] = useState<QualityOption[]>([])
  const [defaultQuality, setDefaultQuality] = useState<QualityOption | undefined>(undefined)
  const [totalLessons, setTotalLessons] = useState(0)
  const [learnedLessons, setLearnedLessons] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentCourse, setCurrentCourse] = useState(mockCourses[0] || null)

  // 初始化：根据传入的 lessonId 加载对应的课时
  useEffect(() => {
    // 如果传入了 courseId，优先使用该课程
    let course = currentCourse
    if (courseId) {
      const foundCourse = mockCourses.find(c => c.courseId === courseId)
      if (foundCourse) {
        course = foundCourse
        setCurrentCourse(foundCourse)
      }
    }

    if (!course) {
      course = mockCourses[0]
      setCurrentCourse(course)
    }

    if (course && course.lessons.length > 0) {
      let lesson: MockLesson | undefined

      // 如果传入了 lessonId，查找对应的课时
      if (lessonId) {
        lesson = course.lessons.find(l => l.lessonId === lessonId)
      }

      // 如果没有找到或没有传入 lessonId，使用第一个课时
      if (!lesson) {
        lesson = course.lessons[0]
      }

      if (lesson) {
        setCurrentLesson(lesson)
        
        // 转换画质列表
        const qualities = convertToQualityList(lesson.videoVariants)
        setQualityList(qualities)
        
        // 设置默认画质（优先720p）
        const defaultQ = qualities.find(q => q.value === '720p') || qualities[0]
        setDefaultQuality(defaultQ)

        // 计算进度
        const total = course.lessons.length
        const learned = course.lessons.filter(l => l.status === 'completed').length
        const progressValue = Math.round((learned / total) * 100)
        setTotalLessons(total)
        setLearnedLessons(learned)
        setProgress(progressValue)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessonId, courseId])

  // 保存播放进度
  const handleProgressSave = (currentTime: number) => {
    if (!currentLesson || !currentCourse) return

    // 保存到localStorage
    localStorage.setItem(
      `video_progress_${currentLesson.lessonId}`,
      JSON.stringify({
        lessonId: currentLesson.lessonId,
        currentTime,
        lastSavedTime: Date.now(),
      })
    )

    // 更新mock数据中的进度
    const lesson = currentCourse.lessons.find(l => l.lessonId === currentLesson.lessonId)
    if (lesson) {
      lesson.videoProgress = currentTime
    }
  }

  // 视频播放完成
  const handleVideoEnd = () => {
    if (!currentLesson || !currentCourse) return

    // 更新课程状态为已完成
    const lesson = currentCourse.lessons.find(l => l.lessonId === currentLesson.lessonId)
    if (lesson) {
      lesson.status = 'completed'
      lesson.videoProgress = 0

      // 重新计算进度
      const total = currentCourse.lessons.length
      const learned = currentCourse.lessons.filter(l => l.status === 'completed').length
      const progressValue = Math.round((learned / total) * 100)
      setTotalLessons(total)
      setLearnedLessons(learned)
      setProgress(progressValue)
      setCurrentLesson({ ...lesson })
    }

    // 清除保存的进度
    localStorage.removeItem(`video_progress_${currentLesson.lessonId}`)
  }

  // 返回课程列表
  const handleBackToList = () => {
    router.push('/')
  }

  if (!currentLesson) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-gray-500">加载中...</div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 返回按钮 */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>返回课程列表</span>
          </button>
        </div>
      </div>

      <VideoPlayer
        videoUrl={defaultQuality?.url || currentLesson.videoUrl}
        lessonId={currentLesson.lessonId}
        lessonName={currentLesson.lessonName}
        courseId={currentCourse?.courseId || ''}
        courseName={currentCourse?.courseName || ''}
        qualityList={qualityList}
        defaultQuality={defaultQuality}
        playbackRates={[1.0, 1.5, 2.0]}
        defaultPlaybackRate={1.0}
        userName={mockUserInfo.userName}
        companyName={mockUserInfo.companyName}
        onProgressSave={handleProgressSave}
        onVideoEnd={handleVideoEnd}
        showWatermark={true}
        autoPlay={true}
      />

      {/* 课程进度信息 */}
      {currentCourse && (
        <div className="bg-white p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-around items-center">
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500 mb-2">学习进度</span>
                <span className="text-2xl font-bold text-blue-500">{progress}%</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500 mb-2">总课时</span>
                <span className="text-2xl font-bold text-blue-500">{totalLessons}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm text-gray-500 mb-2">已学课时</span>
                <span className="text-2xl font-bold text-blue-500">{learnedLessons}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
