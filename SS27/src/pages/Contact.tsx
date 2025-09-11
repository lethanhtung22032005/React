const Contact = () => {
    return (
        <div className="p-6 space-y-2">
            <h1 className="text-xl font-bold">Liên hệ</h1>
            <p><strong>Email:</strong> tung@example.com</p>
            <p><strong>Số điện thoại:</strong> 0123-456-789</p>
            <p>
                <strong>Facebook:</strong>{" "}
                <a
                    href="https://facebook.com"
                    target="_blank"
                    className="text-blue-500 underline"
                >
                    fb.com/tung
                </a>
            </p>
        </div>
    );
};

export default Contact;
