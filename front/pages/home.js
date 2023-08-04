import React from "react";
import Features from "../../front/components/features";
import Footer from "../../front/components/footer";
import Header from "../../front/components/Header";
import Hero from "../../front/components/hero";

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