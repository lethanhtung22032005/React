import { useEffect, useState } from "react"
import { Input, Button, Checkbox, Space, Typography } from "antd"
import { DeleteOutlined, EditOutlined, CheckOutlined } from "@ant-design/icons"

interface Todo {
    id: number
    text: string
    completed: boolean
}

const { Title, Text } = Typography

function TodoList() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem("todos")
        return saved ? JSON.parse(saved) : []
    })
    const [value, setValue] = useState("")
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editText, setEditText] = useState("")

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = () => {
        if (!value.trim()) return
        const newTodo: Todo = { id: Date.now(), text: value, completed: false }
        setTodos([...todos, newTodo])
        setValue("")
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const startEdit = (id: number, text: string) => {
        setEditingId(id)
        setEditText(text)
    }

    const updateTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: editText } : todo
        ))
        setEditingId(null)
        setEditText("")
    }

    const completedCount = todos.filter(t => t.completed).length

    return (
        <div className="p-6 max-w-md mx-auto shadow rounded-xl bg-white">
            <Title level={3} className="text-center">Danh sách công việc</Title>

            <Space.Compact className="w-full mb-4">
                <Input
                    placeholder="Nhập công việc..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button type="primary" onClick={addTodo}>Thêm</Button>
            </Space.Compact>

            {todos.map(todo => (
                <div key={todo.id} className="flex items-center justify-between mb-2">
                    <Space>
                        <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        {editingId === todo.id ? (
                            <Input
                                value={editText}
                                onChange={e => setEditText(e.target.value)}
                                className="w-40"
                            />
                        ) : (
                            <Text delete={todo.completed}>{todo.text}</Text>
                        )}
                    </Space>
                    <Space>
                        {editingId === todo.id ? (
                            <Button
                                type="text"
                                icon={<CheckOutlined style={{ color: "green" }} />}
                                onClick={() => updateTodo(todo.id)}
                            />
                        ) : (
                            <Button
                                type="text"
                                icon={<EditOutlined style={{ color: "blue" }} />}
                                onClick={() => startEdit(todo.id, todo.text)}
                            />
                        )}
                        <Button
                            type="text"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteTodo(todo.id)}
                        />
                    </Space>
                </div>
            ))}

            <p className="text-green-600 text-center mt-2">
                {completedCount} / {todos.length} công việc đã hoàn thành
            </p>
        </div>
    )
}

export default TodoList
