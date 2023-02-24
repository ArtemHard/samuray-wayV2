import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/redux-store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    {/*<StoreContext.Provider value={store}>*/}
    {/*    <App/>*/}
    {/*</StoreContext.Provider>*/}

    {/*<ContextProvider store={store}>*/}
    {/*    <App/>*/}
    {/*</ContextProvider>*/}

    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
