import {
  collection,
  onSnapshot,
  query,
  QuerySnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import Todo from "./Todo";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
};

function App() {
  const [todos, setTodos] = useState();
  const [input, setInput] = useState("");
  console.log(todos);

  //create todo
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("plase enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todo"), {
      text: input,
      completed: false,
    });
  };
  //read todo
  useEffect(() => {
    const q = query(collection(db, "todo"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todoArr = [];
      querySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArr);
    });
    return () => unsubscribe();
  }, []);
  //update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todo", todo.id), {
      completed: !todo.completed,
    });
  };
  //delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todo", id));
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Toodo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className={style.input}
            type="text"
            placeholder="Add todo"
          />
          <button className={style.button}>Add Todo</button>
        </form>
        <ul>
          {todos?.map((item, index) => (
            <Todo
              key={index}
              todo={item}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
