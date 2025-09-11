import { useParams } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 13",
        price: "30.000.000 VND",
        description:
            "Laptop nhỏ gọn, hiệu năng mạnh. Thiết kế tinh tế, pin dùng cả ngày. Thích hợp cho dân CNTT và công việc di động.",
        image: "https://via.placeholder.com/400x250?text=Laptop+Dell+XPS+13",
    },
    {
        id: 2,
        name: "iPhone 15 Pro",
        price: "28.000.000 VND",
        description:
            "Điện thoại flagship Apple mới nhất. Chip A17 Pro siêu mạnh, camera cải tiến, màn hình mượt 120Hz.",
        image: "https://via.placeholder.com/400x250?text=iPhone+15+Pro",
    },
    {
        id: 3,
        name: "Tai nghe Sony WH-1000XM5",
        price: "9.000.000 VND",
        description:
            "Tai nghe chống ồn hàng đầu thế giới. Âm thanh chi tiết, pin lên đến 30 giờ, sạc nhanh 10 phút dùng 5 giờ.",
        image: "https://via.placeholder.com/400x250?text=Sony+WH-1000XM5",
    },
    {
        id: 4,
        name: "Chuột Logitech MX Master 3S",
        price: "2.500.000 VND",
        description:
            "Chuột không dây cao cấp. Thiết kế công thái học, cuộn siêu nhanh, kết nối nhiều thiết bị cùng lúc.",
        image: "https://via.placeholder.com/400x250?text=Logitech+MX+Master+3S",
    },
    {
        id: 5,
        name: "Bàn phím cơ Keychron K6",
        price: "2.000.000 VND",
        description:
            "Bàn phím cơ nhỏ gọn, hỗ trợ Bluetooth. Có thể thay switch nóng, đèn LED RGB đẹp mắt.",
        image: "https://via.placeholder.com/400x250?text=Keychron+K6",
    },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id.toString() === id);

    if (!product) {
        return (
            <div className="p-6 text-center">
                <h1 className="text-2xl font-bold text-red-500">
                    Sản phẩm không tồn tại.
                </h1>
            </div>
        );
    }

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                className="mx-auto mb-4 rounded-lg shadow-lg"
            />
            <p className="text-lg font-semibold">{product.price}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
        </div>
    );
};

export default ProductDetail;
