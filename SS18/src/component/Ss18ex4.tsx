import React, { useState, useCallback } from "react"

export default function ColorPicker() {
    const [color, setColor] = useState("")

    const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }, [])

    return (
        <div>
            <div>
                <label>Màu người dùng chọn:</label>
                <input type="color" value={color} onChange={handleChangeColor} />
            </div>
            <div>
                <label>Màu hiển thị:</label>
                <div style={{ width: "100px", height: "50px", backgroundColor: color, border: "1px solid #ccc" }} />
            </div>
        </div>
    )
}
