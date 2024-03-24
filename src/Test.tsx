interface TestProps {
    name: string,
    capital: string | undefined
}

function Test({ name, capital }: TestProps) {
    return (
        <div className="m-6 bg-red-500">
            <li >
                {name}
            </li>
            <li>
                {capital}
            </li>
        </div>
    )
}

export default Test
