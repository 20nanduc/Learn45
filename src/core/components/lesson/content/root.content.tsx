"use client";

import { ILesson } from "@/core/types/lesson.type";
import Header from "./header";
import Content from "./content";
import Footer from "../../footer/Footer";


interface IRootContent {
    lesson: ILesson
}

function RootContent(props: IRootContent) {
    const { lesson } = props;
    return (
        <div className="flex flex-col gap-5">
            <Header lesson={lesson} />
            <Content contentHtml={lesson?.content_html}/>
            <Footer/>
        </div>
    )
}

export default RootContent
