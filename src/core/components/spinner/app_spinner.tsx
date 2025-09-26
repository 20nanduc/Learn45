import { Loader2 } from "lucide-react";
import { FC } from "react";

const AppSpinner: FC = () => {
  return <Loader2 className="h-6 w-6 animate-spin" />;
};

export default AppSpinner;
