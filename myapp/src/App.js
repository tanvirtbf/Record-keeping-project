import Header from "./components/Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Fields from "./components/Fields";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData] = useState([]);
  const addData = ()=>{
    setData([...data,{name,email}]);
    setName("");
    setEmail("");
  }
  return (
    <div className="App">
      <Header></Header>
      <div className="form">
        <Stack direction="row" spacing={2}> 
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} color="error" variant="contained">
            <AddIcon />
          </Button>
        </Stack> 
      </div>
      <div className="data">
        <div className="data_val">
          <h4>name</h4>
          <h4>email</h4>
          <h4>remove</h4>
        </div>
        {
          data.map((element,index)=>{
            return(
              <Fields key={index} name={element.name} email={element.email} index={index}></Fields>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
