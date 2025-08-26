import { useState } from "react"

function MyName() {
    const [name] = useState("Nguyễn Văn A")

    return (
        <>
            <h3>Họ và tên: {name}</h3>
        </>
    )
}

export default MyName
