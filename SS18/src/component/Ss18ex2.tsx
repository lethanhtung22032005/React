import React, { useMemo } from "react"

type User = {
    id: number
    name: string
    age: number
}

export default function UserList() {
    const users: User[] = [
        { id: 1, name: "An", age: 17 },
        { id: 2, name: "Bình", age: 20 },
        { id: 3, name: "Chi", age: 22 },
        { id: 4, name: "Dũng", age: 16 }
    ]

    const filteredUsers = useMemo(
        () => users.filter(user => user.age > 18),
        [users]
    )

    return (
        <div>
            <h2>Danh sách người dùng trên 18</h2>
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}
