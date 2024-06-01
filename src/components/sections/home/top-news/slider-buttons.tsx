"use client"

import { Button } from "@/components/ui/button";
import { CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ReactNode, useCallback, useEffect, useState } from "react";

export default function SliderButtons(props: { api: CarouselApi, className?: string }) {
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [buttons, setButtons] = useState<string[]>([])


    const selectSlide = (index: number) => {
        if (!props.api) return
        props.api.scrollTo(index)
    }

    useEffect(() => {
        if (!props.api) return
        const len = props.api.scrollSnapList().length
        setCount(len)
        setCurrent(props.api.selectedScrollSnap() + 1)

        setButtons(() => (new Array(len)).fill('button'))

        props.api.on("select", () => {
            if (!props.api) return
            setCurrent(props.api.selectedScrollSnap() + 1)
        })
    }, [props.api])




    return (
        <div className={cn('w-full flex space-x-4 justify-center ', props.className)}>
            {buttons.map((e, i) => (
                <Button className={`h-[25px] w-[25px] p-0 rounded-full border-[1px] border-foreground`}
                    variant={current === i + 1 ? 'default' : 'secondary'}
                    onClick={() => selectSlide(i)} key={i}></Button>
            ))}
        </div>

    )

}