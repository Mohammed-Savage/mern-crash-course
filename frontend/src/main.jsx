
// This is the code that originated in this file:

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// This is an alternate, backup code I could try:

// import * as React from "react";
// import { ChakraProvider } from "@chakra-ui/react";
// import * as ReactDOM from "react-dom/client";
// import App from "./App";

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );


// This is my updated code:

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
// import './index.css'; Since we're not using this file we can comment it out.
import App from './App.jsx';
// I added the following imports:
import React from 'react';
import ReactDOM from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
