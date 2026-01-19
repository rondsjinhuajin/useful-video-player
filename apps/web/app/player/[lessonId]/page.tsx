import VideoPlayerPage from '@/components/VideoPlayerPage'
import { mockCourses } from '@/lib/mockData'

interface PageProps {
  params: {
    lessonId: string
  }
  searchParams: {
    courseId?: string
  }
}

// 生成静态参数，用于静态导出
export async function generateStaticParams() {
  // 从 mockData 中获取所有 lessonId
  const allLessons = mockCourses.flatMap(course => 
    course.lessons.map(lesson => ({
      lessonId: lesson.lessonId,
    }))
  )
  
  return allLessons
}

// 强制静态生成
export const dynamic = 'force-static'
export const dynamicParams = false

export default function PlayerPage({ params, searchParams }: PageProps) {
  const { lessonId } = params
  const { courseId } = searchParams

  return (
    <VideoPlayerPage
      lessonId={lessonId}
      courseId={courseId}
    />
  )
}
