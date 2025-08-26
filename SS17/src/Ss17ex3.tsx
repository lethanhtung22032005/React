import { useState } from "react"

function ChangeColor() {
    const [color, setColor] = useState("black")

    function handleChangeColor() {
        setColor(color === "black" ? "red" : "black")
    }

    return (
        <>
            <h3 style={{ color: color }}>Tiêu đề văn bản</h3>
            <button onClick={handleChangeColor}>Thay đổi màu</button>
        </>
    )
}

export default ChangeColor
