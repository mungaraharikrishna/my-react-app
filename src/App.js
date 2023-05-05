// import { useState } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { Formik } from "formik";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import * as Yup from "yup";
import "./App.css";
import About from "./pages/about";
import ContactUs from "./pages/contactus";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Login from "./pages/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
