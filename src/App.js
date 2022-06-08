import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Tabel from "./Tabel";

function App() {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const getdata = (newdata) => {
    console.log(newdata);
    setData([...data, newdata]);
  };
  const handleDelete = (i) => {
    const d = data.filter((item) => {
      return item.id === i.id;
    });
    setEditData(d[0]);
  };
  return (
    <div>
      <Form getdata={getdata} editData={editData} />
      <Tabel data={data} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
