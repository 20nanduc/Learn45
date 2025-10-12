import LessonRoot from "@/core/components/lesson/root"
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper"
import { Suspense } from "react"

export const dynamic = 'force-dynamic';

function LessonPage() {
  return (
    <Suspense fallback={<div className="h-screen m-auto">Loading...</div>}>
      <AuthWrapper>
        <div className="container mx-auto">
          <LessonRoot />
        </div>
      </AuthWrapper>
    </Suspense>
  )
}

export default LessonPage
