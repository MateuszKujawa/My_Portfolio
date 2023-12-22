import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Usługi">Parallax</section>

    <section >Services</section>

    <section id="Portfolio">Parallax</section>

    <section>Portfolio1</section>

    <section id="Kontakt">Parallax</section>

    <section>Kontakt</section>

    <section id="Omnie">Parallax</section>

    <section>O mnie</section>

    <section id="CV">CV</section>
    {
    /* <Test />
    <Test /> */}
  </div>;
};

export default App;
