import React from "react";
import FullscreenLoader from "./components/FullScreenLoader/FullScreenLoader";
import TableList from "./components/Table-List/TableList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TableList />} />
        </Routes>
      </BrowserRouter>
      <FullscreenLoader />
    </div>
  );
}

export default App;
