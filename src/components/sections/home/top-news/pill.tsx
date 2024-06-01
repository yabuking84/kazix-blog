export default function Pill(props: { text: string | undefined }) {
    return (
        <div className="flex mb-6">
            <div className="capitalize bg-[#A30000] text-white rounded-lg px-2 py-1">
                {props.text ? props.text : '---'}
            </div>
        </div>
    )
}