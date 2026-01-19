import VideoPlayerPage from '@/components/VideoPlayerPage'

interface PageProps {
  params: Promise<{
    lessonId: string
  }>
  searchParams: Promise<{
    courseId?: string
  }>
}

export default async function PlayerPage({ params, searchParams }: PageProps) {
  const { lessonId } = await params
  const { courseId } = await searchParams

  return (
    <VideoPlayerPage
      lessonId={lessonId}
      courseId={courseId}
    />
  )
}
