import Image from "next/image";

import ImageSVG from "@/assets/svg/image.svg"
import { cn } from "@/lib/utils";

export default function ArticleImage(props: { src: string, className?: string }) {


    if (!props.src || props.src === 'no-image')
        return (
            <div className={props.className}>
                <ImageSVG className="w-full h-[500px] object-cover rounded-xl bg-secondary blur-lg " />
            </div>
        )

    return (
        <Image className={cn('w-full h-[500px] object-cover rounded-xl', props.className)}
            
            src={props.src} alt="Image"
            width={1000} height={600} />
    )
}