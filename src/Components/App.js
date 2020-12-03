import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header />
      </AuthProvider>
    </div>
  );
}

export default App;
