import Footer from "@/core/components/footer/Footer";
import PostList from "@/core/components/post/list.root";
// import ProgresssRoot from "@/core/components/user-journey/progress.root";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';

function UserHomeScreen() {
  return (
    <Suspense fallback={<div className="h-screen m-auto">Loading...</div>}>
      <AuthWrapper>
        <div className="flex flex-col gap-3">
          {/* <ProgresssRoot /> */}
          <PostList />
          <Footer/>
        </div>
      </AuthWrapper>
    </Suspense>
  );
}

export default UserHomeScreen;
