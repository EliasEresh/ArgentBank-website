import React from "react";
import Footer from "../components/footer";
import Header from "../components/Header";
import SignIn from "../components/form";

function Login() {
  document.title = "Argent Bank - Sign In";

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <SignIn />
      </main>
      <Footer />
    </div>
  );
}

export default Login;