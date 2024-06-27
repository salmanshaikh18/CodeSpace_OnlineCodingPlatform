import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Compiler from "./pages/CodeEditor";
import PageNotFound from "./pages/PageNotFound";
// import { Button } from "./components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"

const App = () => {
  const {urlId} = useParams()
  console.log(urlId)
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code-editor/:urlId" element={<Compiler />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
