export default function PublishDate(props: { date?: string }) {

    if (!props.date) return;

    const date = new Date(props.date);

    return (
        <p>
            <span className="me-2">
                {date.getDate()}/
                {date.getMonth().toString().padStart(2, '0')}/
                {date.getFullYear()}
            </span>
            {date.getHours().toString().padStart(2, '0')}:{date.getMinutes()}

        </p>
    )

}