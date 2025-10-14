import Header from "../components/Header";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Work() {
  return (
    <div className="container">
      <Header />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
