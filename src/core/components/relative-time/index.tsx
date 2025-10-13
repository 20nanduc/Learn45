"use client";

import { timeAgo } from "@/core/lib/time-format";


interface IRelativeTime {
    date: string
}

function RelativeTime(props: IRelativeTime) {

    const { date } = props;

    return <span>{timeAgo(date)}</span>
}

export default RelativeTime
