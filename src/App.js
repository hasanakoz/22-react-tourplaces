import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
      <h1>Welcome to React</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eveniet
        reprehenderit soluta nemo quidem dicta, quo amet deleniti, non quos quae
        quibusdam aliquid sit molestiae beatae possimus architecto iure odio?
      </p>
    </div>
  );
};

export default App;
