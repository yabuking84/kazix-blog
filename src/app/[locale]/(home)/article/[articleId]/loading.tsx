"use client"
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {


    return (
        <div className="container py-4 flex justify-center">
            <div className="flex flex-col mt-12 space-y-3 w-full h-[calc(100svh-185px)]">
                <div className="space-y-2 pb-5">
                    <Skeleton className="h-4 w-[50px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[250px]" />
                </div>
                <Skeleton className="h-[400px] lg:h-[400px] w-full rounded-xl" />
                <div className="space-y-2 pt-5">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>                
            </div>
        </div>
    )
}