import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Cart from "./Components/store/Cart";
import Todolist from "./Components/Todolist";
import { Provider } from "react-redux";
import store from "./Components/store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>  
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
             />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/todolist" element={<Todolist />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
