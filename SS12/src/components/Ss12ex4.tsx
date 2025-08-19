type ColorBoxProps = {
    color?: string; 
};

function Ss12ex4({ color = "gray" }: ColorBoxProps) {
    const boxStyle: React.CSSProperties = {
        width: "200px",
        height: "200px",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        margin: "10px",
    };

    return <div style={boxStyle}>Box</div>;
}

export default Ss12ex4;
