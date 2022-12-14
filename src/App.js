import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import firebase from "./components/firebase/firebase";
import Cards from "./components/cards/cards";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";
import YandexMap from "./components/yandex-map/yandex-map";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/contact/contact";
import Yandex from "./components/yandex/yandex";
import Footer from "./components/footer/footer";
import About from "./components/About/about";

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
    <div>
      <Navbar />
      <Header />
      <About />
      <Cards todos={todos} />
      <Gallery />
      <YandexMap />
      <Yandex />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
