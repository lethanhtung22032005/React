import axios from "axios";
import { useEffect } from "react";

function App() {
  async function getAllStudents() {
    try {
      const res = await axios.get("http://localhost:3000/students");
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <button onClick={getAllStudents}>Get Students</button>
    </div>
  );
}

export default App;
