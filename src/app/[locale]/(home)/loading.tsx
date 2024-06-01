"use client"
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

    const arr = (new Array(6)).fill(null)
    return (
        <div className="container py-4 flex flex-col justify-center">
            <div className="flex flex-col space-y-3 w-full mb-32">
                <Skeleton className="h-[300px] lg:h-[400px] w-full rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
                {arr.map((e,i) => (
                    <div key={i}>
                        <Skeleton className="h-[300px] lg:h-[400px] w-full rounded-xl mb-4" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}