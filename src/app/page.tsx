"use client"
import { NavBar } from "@/components/index/NavBar";
import { Banner } from "@/components/index/Banner";
import { About } from "@/components/index/About";
import { Skills } from "@/components/index/Skills";
import { Projects } from "@/components/index/Projects";
import { Footer } from "@/components/index/Footer";
import { SSRProvider } from 'react-bootstrap';

function Home() {
  return (
    <SSRProvider>
      <div className="Home">
        <NavBar />
        <Banner />
        <Projects />
        {/* <About /> */}
        <Skills />
        <Footer />
      </div>
    </SSRProvider>
  );
}

export default Home;
