import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import EditerPage from "./pages/EditerPage";

function App() {
  return (
    <>
      {/*Toster configuration notification such position size etc*/}
      {/* it must be in global scope */}
      <div>
        <Toaster 
        position="bottom-center"
        toastOptions={{
          sucess:{
            theme:{
              primary:'#03AED2'
            }
          }
        }}
        ></Toaster>
      </div>

      {/* roting here */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/editer/:roomId" element={<EditerPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
