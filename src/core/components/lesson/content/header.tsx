"use client";

import { ILesson } from "@/core/types/lesson.type";


interface IHeader {
    lesson: ILesson
}


function Header(props: IHeader) {

    const { lesson } = props;

    return (
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold md:text-3xl tracking-tight">{lesson?.title}</h1>
        </div>
    )
}

export default Header
