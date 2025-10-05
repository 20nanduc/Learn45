"use client";

import LearningProgressCircle from "./progress.timer";
import UserIntro from "./user.intro";

function ProgresssRoot() {

    return (
        <div className="mx-auto flex gap-2 justify-center items-center flex-wrap">
            <LearningProgressCircle timeRemaining={15} />
            <UserIntro />
        </div>
    )
}

export default ProgresssRoot;
