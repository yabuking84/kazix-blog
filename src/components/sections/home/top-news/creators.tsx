

export default function Creators({ creators = [] }: { creators?: string[] }) {
    const creatorsText = creators.join(', ')
    return (
        <>
            {!creatorsText ? 'Anonymous' : <p>{creatorsText}</p>}
        </>
    )
}