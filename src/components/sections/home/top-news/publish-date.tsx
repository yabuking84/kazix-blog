export default function PublishDate(props: { date: string }) {
    const date = new Date(props.date);

    return (<p>
        {date.getDate()}/
        {date.getMonth()}/
        {date.getFullYear()}

    </p>)
    
}