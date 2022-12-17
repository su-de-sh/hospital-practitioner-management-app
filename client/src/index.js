import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import MuiThemeProvider from "./theme";
import store from "./store";
import { Provider } from "react-redux";
import AuthGuard from "./guard/AuthGuard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MuiThemeProvider>
      <Provider store={store}>
        <AuthGuard>
          <Router>
            <App />
          </Router>
        </AuthGuard>
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>
);
