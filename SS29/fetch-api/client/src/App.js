import React, { useEffect } from "react";

function App() {
  const getAllProduct = () => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => {
        console.log("Danh sách sản phẩm:", data);
      })
      .catch((err) => console.error("Lỗi:", err));
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <p>Mở console (F12) để xem dữ liệu trả về</p>
    </div>
  );
}

export default App;
