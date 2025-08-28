import React, { useState } from "react";

const RandomQuote = () => {
    const quotes = [
        "Học, học nữa, học mãi.",
        "Thất bại là mẹ thành công.",
        "Không gì là không thể.",
        "Kiến tha lâu đầy tổ.",
        "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau."
    ];

    const [quote, setQuote] = useState(
        quotes[Math.floor(Math.random() * quotes.length)]
    );

    const handleNewQuote = () => {
        let newQuote = quote;
        while (newQuote === quote) {
            newQuote = quotes[Math.floor(Math.random() * quotes.length)];
        }
        setQuote(newQuote);
    };

    return (
        <div>
            <h2>Câu nói truyền cảm hứng hôm nay:</h2>
            <p>"{quote}"</p>
            <button onClick={handleNewQuote}>Lấy câu nói mới</button>
        </div>
    );
};

export default RandomQuote;
