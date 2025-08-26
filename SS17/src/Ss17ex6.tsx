import { useState } from "react"

function CounText() {
    const [text, setText] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
    }

    const charCount = text.length
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length

    return (
        <>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={text}
                onChange={handleChange}
            />
            {text === "" ? (
                <p>Chưa có dữ liệu</p>
            ) : (
                <>
                    <p>Số ký tự: {charCount}</p>
                    <p>Số từ: {wordCount}</p>
                </>
            )}
        </>
    )
}

export default CounText
