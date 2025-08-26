import { useState } from "react"

function Form() {
    const [value, setValue] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }

    return (
        <>
            <input
                type="text"
                placeholder="Nhập nội dung"
                value={value}
                onChange={handleChange}
            />
            <h3>{value ? value : "Đang nhập tiêu đề"}</h3>
        </>
    )
}

export default Form
