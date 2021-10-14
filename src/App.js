import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Todo from "./Todo/Todo";
import Task from "./Tasks/Task";
import {useState} from "react";
import Store from "./store/Store";
import NewTask from "./Tasks/NewTask";
import Login from "./Login/Login";

function App() {
  function handleChange(newValue) {
    setTaskList(newValue);
  }
  const [taskList,setTaskList] = useState([
    {
      id:"1",
      name:"hola",
      description : "hola",
      dueDate: "hola",
      assignedTo: "hola",
      status:"hola"
    },
    {
      id:"2",
      name:"ciao",
      description : "ciao",
      dueDate: "ciao",
      assignedTo: "ciao",
      status:"ciao"
    }
  ]);
  return (
      <Store>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">LOGIN</Link>
                </li>
                <li>
                  <Link to="/todo">todo </Link>
                </li>

                <li>
                  <Link to="/newtask">newTask</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/todo">
                <Todo   />
              </Route>
              <Route path="/task/:id" >
                <Task />
              </Route>
              <Route path="/newtask" >
                <NewTask />
              </Route>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </Store>
  );
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
