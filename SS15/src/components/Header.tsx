import { Component } from "react"

interface PropsType {
    content: string;
}

interface StateType {
    items: string[];
    check: boolean;
}

class Header extends Component<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props);
        this.state = {
            items: ["Item 1", "Item 2", "Item 3"],
            check: true
        };
    }
    click = () => {
        console.log("Clicked!!");
        this.setState({ check: !this.state.check });

    }
    componentDidMount(): void { 
        console.log("Component đã được khởi tạo");
    }
    componentDidUpdate(): void {
        console.log("Component được cập nhật")
    }
    componentWillUnmount(): void {
        console.log("Component đã bị gỡ bỏ");
    }
    render() {
        return (
            <>
                <h1 onClick={()=>this.click()}>{this.props.content}</h1>
                {
                    this.state.check && <ul>
                        {this.state.items.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                }
            </>
        );
    }
}

export default Header
