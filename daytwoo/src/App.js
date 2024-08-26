import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <header>
        <MyNav />
      </header>
      <main className="bg-secondary">
        <Welcome />
        <BookList />

        {/* <AllTheBooks /> */}
      </main>
      <footer>
        <MyFooter />
      </footer>
    </>
  );
}

export default App;
