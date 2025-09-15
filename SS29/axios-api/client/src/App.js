import { useEffect } from "react";
import axios from "axios";

function App() {
  const getAllStudent = async () => {
    try {
      const res = await axios.get("http://localhost:3001/student");
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllStudent();
  }, []);

  return <h1>Check console for student data</h1>;
}

export default App;
