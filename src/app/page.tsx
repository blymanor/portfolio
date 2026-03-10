import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
