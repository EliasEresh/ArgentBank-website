import React from "react";
import Features from "../components/features";
import Footer from "../components/footer";
import Header from "../components/Header";
import Hero from "../components/hero";

function Home() {
  document.title = "Argent Bank - Home Page";

  return (
    <div>
      <Header />
      <main className="main">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default Home;