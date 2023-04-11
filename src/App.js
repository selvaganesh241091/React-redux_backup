import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./components/RouterComponent";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import PriceComponent from "./components/PriceComponent";
import Typography from "@mui/material/Typography";


function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <PriceComponent />
        <div
          style={{
            width: "100%",
            display: "grid",
            placeItems: "center",
          }}
        >
          <RouterComponent />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
