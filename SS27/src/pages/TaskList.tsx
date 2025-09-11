import { Link } from "react-router-dom";
import { tasks } from "../component/tasks";

const TaskList = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Danh sách công việc</h1>
            <div className="space-y-4">
                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="border rounded-md p-4 bg-gray-50 shadow-sm"
                    >
                        <h2 className="text-lg font-semibold">{task.title}</h2>
                        <p className="text-gray-700">{task.description}</p>
                        <Link to={`/task/${task.id}`} className="text-blue-600 mt-2 block">
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
