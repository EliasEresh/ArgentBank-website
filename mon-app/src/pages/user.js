import Footer from "../components/footer";
import HeaderUser from "../components/HeaderUser";
import Header from "../components/Header";
import Accounts from "../components/account";

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