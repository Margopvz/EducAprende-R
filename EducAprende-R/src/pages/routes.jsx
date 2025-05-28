import { createBrowserRouter, createRoutesFromElements,Route } from "reat-router-dom";
import Main from "./components/main.jsx";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </>
))