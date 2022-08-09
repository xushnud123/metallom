import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import firebase from "./components/firebase/firebase";
import Cards from "./components/cards/cards";
import Header from "./components/Header/header";
import Products from "./components/Products/products";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const q = query(collection(firebase, "product"));
    const unSub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) =>
        todosArray.push({ ...doc.data(), id: doc.id })
      );
      setTodos(todosArray);
    });
    return () => unSub();
  }, []);
  console.log(todos)
  return (
    <React.Fragment>
      <Products />
      <Cards todos={todos}/>
    </React.Fragment>
  );
}

export default App;
