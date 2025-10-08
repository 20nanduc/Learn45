import LessonRoot from "@/core/components/lesson/root"
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper"


function LessonPage() {
  return (
    <AuthWrapper>

      <div className="container mx-auto">
        <LessonRoot />
      </div>


    </AuthWrapper>
  )
}

export default LessonPage
