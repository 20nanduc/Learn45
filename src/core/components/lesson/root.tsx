"use client";

import Sidebar from "@/core/components/lesson/controller/Sidebar";

function LessonRoot() {
    return (
        <div className="h-[calc(100vh-3rem)] flex overflow-hidden">
            <main className="flex-1 bg-amber-500 transform transition-transform duration-300 ease-in flex flex-col">
                <p>Main content area</p>
            </main>
            <aside className="hidden p-6 border-l-2 w-full max-w-3xs lg:max-w-xl transform transition-transform duration-300 ease-in sm:block ">
                <Sidebar />
            </aside>
        </div>
    )
}

export default LessonRoot
