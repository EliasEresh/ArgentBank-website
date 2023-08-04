import Footer from "../../front/components/footer";
import HeaderUser from "../../front/components/HeaderUser";
import Header from "../../front/components/Header";
import Accounts from "../../front/components/accountccount";

function Profile() {
  document.title = "Argent Bank - Account";
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <HeaderUser />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;