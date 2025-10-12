"use client";

import React from "react";
import { IPostLessonView } from "@/core/types/post.type";
import LessonItem from "./lesson.item";
import useSideLessonListController from "@/core/hooks/lesson/use.lesson.list.controller";

interface ILessonList {
    lessons: IPostLessonView[];
};

export default function LessonList(props: ILessonList) {

    const { lessons } = props;
    const { activeLessonId, activeRef } = useSideLessonListController();


    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide  bg-muted/30 rounded-md border">
            {lessons.map((item, index) => {
                const isActive = item.slug === activeLessonId;
                return (
                    <LessonItem
                        key={item.slug}
                        ref={isActive ? activeRef : null}
                        item={item}
                        index={index}
                        isActive={isActive}
                    />
                );
            })}
        </div>
    );
}
