// fetch user and pass it to auth wrapper will be top level flow controller decides which to render inside

import AuthRoot from "@/core/components/auth_screens/auth.root";
import { AuthWrapper } from "@/core/lib/wrappers/auth-wrapper";
import { EAuthPageType } from "@/helpers/auth";

export default function HomePage() {
  return (
    <div>
      <AuthWrapper pageType={EAuthPageType.PUBLIC}>
        <AuthRoot />
      </AuthWrapper>
    </div>
  );
}
