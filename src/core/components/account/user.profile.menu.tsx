"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    LogOut,
    User,
    UserIcon,
} from "lucide-react";

import * as EndPoints from "@/core/constants/swr-key";
import useSWR from "swr";
import AppSpinner from "../spinner/app_spinner";
import { IUSer } from "@/core/types/user.type";
import { useState } from "react";
import LogoutConfirmModal from "../portels/modals/logout.confirmation";

export default function UserProfileMenu() {
    const { data: user, isLoading, error } = useSWR<IUSer>(EndPoints.getUser);
    const [showLogout, setShowLogout] = useState<boolean>(false);


    if (isLoading) return <AppSpinner />

    if (error) return <></>

    if (user) {
        return (
            <>
                <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center">
                        <Avatar>
                            <AvatarFallback className="bg-primary text-primary-foreground">
                                <UserIcon />
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="mt-2 w-72">
                        <DropdownMenuItem className="py-3">
                            <Avatar>
                                <AvatarFallback className="bg-primary text-primary-foreground">
                                    <UserIcon />
                                </AvatarFallback>
                            </Avatar>
                            <div className="ml-1 flex flex-col">
                                <p className="text-sm font-medium">{user?.name}</p>
                                <p className="text-xs text-muted-foreground">
                                    @{user?.slug}
                                </p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <User className="mr-1" /> Invite people
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => setShowLogout(true)}>
                            <LogOut className="mr-1" /> Sign out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <LogoutConfirmModal open={showLogout} onClose={() => setShowLogout(false)}
                />
            </>
        );
    }

    return <></>
}
