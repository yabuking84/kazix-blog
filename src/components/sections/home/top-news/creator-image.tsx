import UserSVG from "@/assets/svg/account-circle.svg"
import Image from "next/image";

export default function CreatorImage(props: { src: string | undefined }) {
    return (
        <>
            {!props.src || props.src === 'no-image' ?
                <UserSVG />
                : <Image className="object-cover rounded-full h-8 w-8"
                    src={props.src} alt="Image" width={30} height={30} />
            }
        </>
    )
}