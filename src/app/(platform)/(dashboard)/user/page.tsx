import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";

function UserHomeScreen() {
  return (
    <AuthWrapper>
      <div>
        <h5>Dashbord -Home</h5>
      </div>
    </AuthWrapper>
  );
}

export default UserHomeScreen;
