import { Provider } from "react-redux";
import "./App.css";
import Body from "./component/Body";
import Head from "./component/Head";
import store from "./util/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;

/**
 * Head
 * Body
 *  sidebar
 *    menu items
 *  main container
 *    button list
 *    video container
 *      video card
 */
