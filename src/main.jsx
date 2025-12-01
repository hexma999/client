import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// npm i react-router-dom
import { BrowserRouter } from "react-router-dom";
import TokenStorage from "./db/token.js";
import AuthService from "./service/auth.js";
import PostSerivce from "./service/post.js";

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

console.log(baseURL);
const tokenStorage = new TokenStorage();
const authService = new AuthService(tokenStorage);
const postService = new PostSerivce(tokenStorage);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App postService={postService} />
    </BrowserRouter>
  </StrictMode>
);
