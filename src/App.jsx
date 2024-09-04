import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "../src/pages/Beranda";
import TentangKami from "../src/pages/TentangKami";
import Bantuan from "../src/pages/Bantuan";
import Media from "../src/pages/Media";
import Kontak from "../src/pages/Kontak";
import Login from "../src/pages/Login";
import PrivateRoute from "../src/Router/PrivateRoute";
import NotFound from "../src/pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="container-fluid">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route
                exact
                path="/"
                element={<PrivateRoute element={<Beranda />} />}
              />
              <Route
                path="/tentang-kami"
                element={<PrivateRoute element={<TentangKami />} />}
              />
              <Route
                path="/bantuan"
                element={<PrivateRoute element={<Bantuan />} />}
              />
              <Route
                path="/media"
                element={<PrivateRoute element={<Media />} />}
              />
              <Route
                path="/kontak"
                element={<PrivateRoute element={<Kontak />} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
