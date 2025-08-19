type User = {
    firstName: string;
    lastName: string;
};

function formatName(user: User): string {
    return `${user.firstName} ${user.lastName}`;
}

function Ss12ex5() {
    const user: User = {
        firstName: "Nguyễn Văn",
        lastName: "Nam",
    };

    return (
        <div>
            <h2>Xin chào, {formatName(user)}!</h2>
        </div>
    );
}

export default Ss12ex5;
