import { cn } from "@/lib/utils";

import SPinnerSVG from "@/assets/svg/spinner.svg"

export default function Spinner(props:Props) {
    return (
        <div className={cn('flex items-center justify-center ',props.className)}>
            <div role="status"> 
                <SPinnerSVG className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" />
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}