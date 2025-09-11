import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "../component/tasks";

const TaskDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const task = tasks.find((t) => t.id === Number(id));

    if (!task) {
        return <h2 className="text-center text-red-500">Không tìm thấy công việc</h2>;
    }

    return (
        <div className="p-6 text-center">
            <h1 className="text-2xl font-bold mb-4">{task.title}</h1>
            <p className="text-gray-700 mb-6">{task.description}</p>
            <button
                onClick={() => navigate(-1)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Quay lại
            </button>
        </div>
    );
};

export default TaskDetail;
