//B1:xây dựng gia diện
//B2: xây dựng state quản lí giá trị trong o input
//B3: sử dụng state để điều khiển giao diện hiển thị

import { useState } from "react"

function form() {
    const [title, setTile] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    }
    return (
        <div>
            <input placeholder=" nhap noi dung" ></input>
        </div>
    )
}

export default form