import { ComponentProps } from "react"
import styles from "./circle.module.scss"
import { cn } from "@/lib/utils";

interface Props extends ComponentProps<'div'> { }
function Circle({className, ...props}: Props) {
    return (
        <div className={`${cn('h-[800px] w-[800px]',className)} ${styles.circle}`} {...props}></div>
    )
}

export default Circle