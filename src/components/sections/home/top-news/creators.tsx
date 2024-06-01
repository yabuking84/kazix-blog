

export default function Creators({ creators = [] }: { creators?: string[] }) {
    const creatorsText = creators.join(', ')
    return (
        <span className="opacity-70">
            {!creatorsText ? 'Anonymous' : <p>{creatorsText}</p>}
        </span>
    )
}