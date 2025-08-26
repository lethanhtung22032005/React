import { useState } from "react"

function Toggle() {
    const [isVisible, setIsVisible] = useState(false)

    function handleToggle() {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <button onClick={handleToggle}>
                {isVisible ? "Ẩn" : "Hiện"}
            </button>
            {isVisible && <h3>Tiêu đề văn bản</h3>}
        </>
    )
}

export default Toggle
