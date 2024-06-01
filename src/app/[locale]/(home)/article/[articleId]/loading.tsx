"use client"
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {


    return (
        <div className="container py-4 flex justify-center">
            <div className="flex flex-col space-y-3 w-full h-[calc(100svh-185px)]">
                <Skeleton className="h-[400px] lg:h-[600px] w-full rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </div>
            </div>
        </div>
    )
}