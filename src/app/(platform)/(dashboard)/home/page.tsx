import PostList from "@/core/components/post/list.root";
import ProgresssRoot from "@/core/components/user-journey/progress.root";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";


function UserHomeScreen() {
  return (
    <AuthWrapper>
      <div className="flex flex-col  gap-3">
        <ProgresssRoot />

        <PostList />

      </div>
    </AuthWrapper>
  );
}

export default UserHomeScreen;
