import { useState } from 'react'
import './App.css'
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="project"><Projects /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}

export default App
