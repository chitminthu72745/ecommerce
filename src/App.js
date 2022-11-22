import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <HomePage />
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <Header />
        <ShopPage />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Header />
        <SignInAndSignUp />
      </>
    ),
  },
]);
class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
