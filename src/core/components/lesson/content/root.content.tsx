"use client";

import { ILesson } from "@/core/types/lesson.type";
import Header from "./header";
import Content from "./content";


interface IRootContent {
    lesson: ILesson
}

function RootContent(props: IRootContent) {
    const { lesson } = props;
    return (
        <div className="px-5 py-8 flex flex-col gap-5">
            <Header lesson={lesson} />
            <Content contentHtml={lesson?.content_html}/>
        </div>
    )
}

export default RootContent
