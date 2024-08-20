import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main>
        <Welcome />
        <AllTheBooks />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
