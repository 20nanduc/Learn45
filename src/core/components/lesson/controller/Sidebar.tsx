"use client";

import AdBanner from "./ad.banner";
import PostSideCard from "./post.card.root";

function Sidebar() {


    return (
        <div className="h-[85vh] w-full flex flex-col gap-4 justify-center">
           <div className="flex-1">
             <PostSideCard />
           </div>
            <AdBanner />

        </div>
    )
}

export default Sidebar
