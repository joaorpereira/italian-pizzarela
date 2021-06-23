import "./sass/styles.scss";

import NavBar from "./components/NavBar";
import Hero from "./screens/Hero";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import Clients from "./screens/Clients";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Products />
      <Clients />
      <Contact />
    </main>
  );
}

export default App;
