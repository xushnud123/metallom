import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
} from "firebase/firestore";
import firebase from "./components/firebase/firebase";
import Cards from "./components/cards/cards";
import Navbar from './components/Navbar/navbar'
import Header from "./components/Header/header";



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
  return (
    <div >
      <Navbar/>
      <Header/>
      <Cards todos={todos}/>
    </div>
  );
}

export default App;
