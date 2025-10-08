import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    ArrowLeftIcon,
    CircleChevronLeftIcon,
    CircleChevronRightIcon,
    MessageCircleIcon,
    ShareIcon,
} from "lucide-react";
import Image from "next/image";
import LessonList from "./lesson.list";

export default function PostSideCard() {
    return (
        <Card className="flex w-full h-full flex-col shadow-none py-0 gap-0">
            <CardHeader className="flex flex-row items-center justify-between py-2.5 -mr-1">
                <div className="flex items-center gap-3">
                    <Image
                        src=""
                        className="h-8 w-8 rounded-full bg-secondary object-contain"
                        alt=""
                        height={32}
                        width={32}
                    />
                    <div className="flex flex-col gap-0.5">
                        <h6 className="text-sm leading-none font-medium">shadcn</h6>
                        <span className="text-xs">@shadcn</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-0 flex-1">
                {/* replace with list */}
                <LessonList lessons={[]} activeLessonId="" />

            </CardContent>
            <CardFooter className="border-t flex px-2 pb-0 py-2!">
                <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
                    <CircleChevronLeftIcon />
                    <span className="hidden sm:inline">Previous</span>
                </Button>
                <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
                    <span className="hidden sm:inline">Next</span>
                    <CircleChevronRightIcon />
                </Button>
                <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
                    <ShareIcon /> <span className="hidden sm:inline">Share</span>
                </Button>
            </CardFooter>
        </Card>
    );
}
