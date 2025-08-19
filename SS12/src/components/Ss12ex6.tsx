import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";

function Ss12ex6() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <Header />
            <div style={{ display: "flex", flex: 1 }}>
                <Menu />
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default Ss12ex6
