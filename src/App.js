import Header from "./Header";
import Products from "./Products";
import Menu from "./Menu";
import Home from "./Home";

function App() {

  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <Home></Home>
     
    </div>
  );
}

export default App;
// npx create-react-app First_Project

// project is loaded -- index.html(public)-- loaded -- load the bundle.js -- index.js -- loading the App