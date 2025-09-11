import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { products } from "../component/products";

const Ss27ex4 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search") || "";

    const [keyword, setKeyword] = useState(searchQuery);
    useEffect(() => {
        setKeyword(searchQuery);
    }, [searchQuery]);

    const handleSearch = () => {
        if (keyword.trim() !== "") {
            navigate(`/products?search=${keyword}`);
        } else {
            navigate("/products");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Danh sách sản phẩm</h1>

            <div style={{ marginBottom: "16px" }}>
                <input
                    type="text"
                    placeholder="Nhập từ khóa..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    style={{
                        padding: "8px",
                        width: "250px",
                        marginRight: "8px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                    }}
                />
                <button
                    onClick={handleSearch}
                    style={{
                        padding: "8px 12px",
                        backgroundColor: "blue",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Search
                </button>
            </div>

            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        {p.name} - {p.price.toLocaleString()} VND
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ss27ex4;
