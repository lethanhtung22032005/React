import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 13",
        price: "30.000.000 VND",
        description: "Chiếc laptop nhỏ gọn, hiệu năng mạnh mẽ, thích hợp cho dân CNTT.",
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: "28.000.000 VND",
        description: "Điện thoại flagship với chip A17 Pro, chụp ảnh siêu nét.",
    },
    {
        id: 3,
        name: "Tai nghe Sony WH-1000XM5",
        price: "9.000.000 VND",
        description: "Tai nghe chống ồn hàng đầu, âm thanh chất lượng cao.",
    },
    {
        id: 4,
        name: "Chuột Logitech MX Master 3S",
        price: "2.500.000 VND",
        description: "Chuột không dây cao cấp, pin trâu, dùng cực mượt.",
    },
    {
        id: 5,
        name: "Bàn phím cơ Keychron K6",
        price: "2.000.000 VND",
        description: "Bàn phím cơ nhỏ gọn, hỗ trợ Bluetooth và hot-swap switch.",
    },
];

const ProductList = () => {
    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-700">{product.price}</p>
                        <p className="text-sm text-gray-500">{product.description}</p>
                        <Link
                            to={`/products/${product.id}`}
                            className="mt-2 inline-block text-blue-500 hover:underline"
                        >
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
