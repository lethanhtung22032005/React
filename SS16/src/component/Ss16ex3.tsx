import React, { Component } from 'react';

const styles: { [key: string]: React.CSSProperties } = {
    base: {
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        margin: "4px",
        cursor: "pointer",
        fontSize: "14px",
    },
    Primary: { backgroundColor: "#007bff", color: "white" },
    Secondary: { backgroundColor: "#6c757d", color: "white" },
    Success: { backgroundColor: "#28a745", color: "white" },
    Warning: { backgroundColor: "#ffc107", color: "black" },
    Danger: { backgroundColor: "#dc3545", color: "white" },
    Info: { backgroundColor: "#17a2b8", color: "white" },
    Light: { backgroundColor: "#f8f9fa", color: "black", border: "1px solid #ccc" },
    Dark: { backgroundColor: "#343a40", color: "white" },
    Link: { background: "none", color: "#007bff", textDecoration: "underline" },
};

interface Props {
    type: keyof typeof styles;
    label: string;
}

export default class Button extends Component<Props> {
    render() {
        const { type, label } = this.props;
        return (
            <button style={{ ...styles.base, ...styles[type] }}>
                {label}
            </button>
        );
    }
}

export class App extends Component {
    render() {
        return (
            <div>
                <Button type="Primary" label="Primary" />
                <Button type="Secondary" label="Secondary" />
                <Button type="Success" label="Success" />
                <Button type="Warning" label="Warning" />
                <Button type="Danger" label="Danger" />
                <Button type="Info" label="Info" />
                <Button type="Light" label="Light" />
                <Button type="Dark" label="Dark" />
                <Button type="Link" label="Link" />
            </div>
        );
    }
}
