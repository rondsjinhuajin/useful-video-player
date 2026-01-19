'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { mockCourses, type MockCourse } from '@/lib/mockData'

export default function CourseListPage() {
  const router = useRouter()
  const [courses, setCourses] = useState<MockCourse[]>([])

  useEffect(() => {
    setCourses(mockCourses)
  }, [])

  const handleLessonClick = (courseId: string, lessonId: string) => {
    router.push(`/player/${lessonId}?courseId=${courseId}`)
  }

  const calculateCourseProgress = (course: MockCourse) => {
    const total = course.lessons.length
    const learned = course.lessons.filter(l => l.status === 'completed').length
    const progress = total > 0 ? Math.round((learned / total) * 100) : 0
    return { total, learned, progress }
  }

  // 将秒数转换为时分秒格式
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    
    if (hours > 0) {
      return `${hours}小时${minutes}分${secs}秒`
    } else if (minutes > 0) {
      return `${minutes}分${secs}秒`
    } else {
      return `${secs}秒`
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">视频中心</h1>
        </div>
      </div>

      {/* 课程列表 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {courses.map((course) => {
          const { total, learned, progress } = calculateCourseProgress(course)
          
          return (
            <div key={course.courseId} className="mb-8">
              {/* 课程信息 */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{course.courseName}</h2>
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-500">
                      进度: <span className="font-bold text-blue-500">{progress}%</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {learned}/{total} 视频
                    </div>
                  </div>
                </div>

                {/* 进度条 */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* 课时列表 */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">视频列表</h3>
                  {course.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="p-4 border border-gray-200 rounded-lg cursor-pointer transition-all hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
                      onClick={() => handleLessonClick(course.courseId, lesson.lessonId)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <span className="font-medium text-gray-800">{lesson.lessonName}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          {lesson.videoProgress && lesson.videoProgress > 0 && (
                            <span className="text-xs text-gray-500">
                              已观看 {formatTime(lesson.videoProgress)}
                            </span>
                          )}
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              lesson.status === 'completed'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {lesson.status === 'completed' ? '已完成' : '未完成'}
                          </span>
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
