import { getCourses, getUserProgress } from '@/data'

import { List } from './list'

const CoursePage = async () => {
  const coursesData = getCourses()
  const userProgressData = getUserProgress()

  const [courses, userProgress] = await Promise.all([
    coursesData,
    userProgressData,
  ])

  return (
    <div className="h-full w-full px-3">
      <h1 className="text-2xl font-bold text-neutral-700">Language Courses</h1>
      <List
        courses={courses || []}
        activeCourseId={userProgress?.activeCourseId || 0}
      />
    </div>
  )
}

export default CoursePage