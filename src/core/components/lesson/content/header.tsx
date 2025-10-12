"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAppRouter } from "@/core/hooks/use.app.router";
import { ILesson } from "@/core/types/lesson.type";
import { ChevronLeftIcon } from "lucide-react";
import BrandDivider from "../../divider/brand.divider";


interface IHeader {
    lesson: ILesson
}


function Header(props: IHeader) {
    const router = useAppRouter()
    const { lesson } = props;

    return (
        <div className="p-8 flex flex-col">
            <Button
                variant={"link"}
                size={"default"}
                className="w-fit p-0 text-muted-foreground"
                type="button"
                onClick={() => router.back()}
            >
                <>
                    <ChevronLeftIcon className="ml-1 w-8 h-8" />
                    Back
                </>
            </Button>

            <h1 className="text-3xl font-bold sm:text-5xl tracking-wide">{lesson?.title}</h1>
            <BrandDivider />
        </div >
    )
}

export default Header
