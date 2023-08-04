import React from "react";
import Footer from "../../front/components/footer";
import Header from "../../front/components/Header";
import SignIn from "../../front/components/form";

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