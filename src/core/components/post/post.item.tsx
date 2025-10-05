import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRightFromLineIcon, Clock3Icon, ClockArrowDownIcon, EllipsisVerticalIcon, EyeIcon, GraduationCapIcon } from "lucide-react"
import Image from "next/image"

function PostItem() {
    return (
        <Card className="max-w-xl h-auto flex flex-col p-4 border-r-0  shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-[300px] aspect-[4/3] overflow-hidden rounded-md bg-gray-500 flex-shrink-0">
                    <Image
                        src={"https://cdn.learn45.com/thumbnails/posts/740ad60c-df9d-4375-b9f9-94786a5260dd/thumbnail.jpg"}
                        alt={"Post Thumbnail"}
                        loading="lazy"
                        fill
                        sizes="(max-width: 768px) 100vw, 160px"
                        className="object-cover"
                    />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-2 flex-1 min-w-0">

                    {/* Title */}
                    <h2 className="text-white text-base font-bold leading-snug line-clamp-3 min-w-0 break-words">
                        Python basics for beginer- 2025
                    </h2>



                    {/* meta data */}
                    <div className="flex flex-col mt-2 gap-3 flex-1 min-w-0">

                        {/* Description with clamp */}
                        <p className="text-muted-foreground text-xs text-justify font-medium leading-snug line-clamp-3 break-words min-w-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto voluptatem quo incidunt eum ea. Molestias provident id voluptatibus pariatur aperiam quidem iusto, reiciendis magnam dolores beatae eaque eveniet asperiores?
                        </p>

                        <div className="flex flex-wrap justify-between gap-3 min-w-0">
                            <div className="flex gap-1 min-w-0">
                                <EyeIcon className="w-4 h-4 text-[#08df65]" />
                                <span className="text-xs text-[#08df65] truncate">_ Views</span>
                            </div>

                            <div className="flex gap-1 min-w-0">
                                <GraduationCapIcon className="w-4 h-4 text-[#08df65]" />
                                <span className="text-xs text-[#08df65] whitespace-nowrap">10 Min Read</span>
                            </div>

                            <div className="flex gap-1 min-w-0">
                                <Clock3Icon className="w-4 h-4 text-[#08df65]" />
                                <span className="text-xs text-[#08df65] whitespace-nowrap">20-April-2025</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <Button
                                variant="default"
                                aria-label={`Read Post`}
                                className="flex items-center justify-center w-full"
                            >
                                <span className="text-sm font-bold text-center">10m Learn</span>
                                <ClockArrowDownIcon className="w-4 h-4 font-bold" />
                            </Button>
                        </div>

                    </div>
                </div>

            </div>
        </Card>
    )
}

export default PostItem
