import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 bg-gray-100 shadow" style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#007aff" ,color: "white" }}>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
    );
};

export default Navbar;
