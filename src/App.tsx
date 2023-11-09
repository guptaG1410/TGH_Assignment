import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./store/store";

import Home from "./pages/Home";
import Bookmark from "./pages/Bookmark";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="bg-mainBg min-h-[100vh] bg-slate-500">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/bookmark" element={<Bookmark />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;