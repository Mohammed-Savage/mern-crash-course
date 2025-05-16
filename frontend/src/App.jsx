// Since we're doing all of our styling using ChakraUI Vite, we can comment out the import statements and the App function.
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Box, useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/* This is the main App component. It uses Chakra UI for styling and React Router for navigation. */}
      {/* The App component contains a Navbar and a set of routes for different pages. */}
      {/* The Navbar is a separate component that contains links to different pages. */}
      {/* The Routes are defined using the Route component from React Router. */}
      {/* The HomePage and CreatePage components are imported from their respective files. */}
      {/* The Box component is used to create a container for the app. */}
      {/* The minH prop sets the minimum height of the box to 100vh, which means it will take up the full height of the viewport. */}
      {/* The bg prop sets the background color of the box based on the current color mode (light or dark). */}
      {/* The useColorModeValue hook is used to get the appropriate color value based on the current color mode. */}
      {/* The Navbar component is rendered at the top of the app, and the Routes are rendered below it. */}
      {/* The Routes component contains a set of Route components that define the different pages of the app. */}
      {/* Each Route component has a path prop that defines the URL path for the page, and an element prop that defines the component to be rendered for that page. */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// function App() {

//   return (
//     <>
//       <Button>
//         Hello
//       </Button>
//     </>
//   )
// }

// export default App
