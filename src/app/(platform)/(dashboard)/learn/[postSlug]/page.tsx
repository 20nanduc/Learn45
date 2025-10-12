import Root from "@/core/components/post/post-room/root"
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper"
import { Suspense } from "react"

export const dynamic = 'force-dynamic';
function PostRoom() {
    return (
        <Suspense fallback={<div className="h-screen m-auto">Loading...</div>}>
            <AuthWrapper>
                <div className="mx-auto">
                    <Root />
                </div>
            </AuthWrapper>
        </Suspense>
    )
}

export default PostRoom
