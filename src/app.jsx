import { Route } from "react-router";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./page/home";
import SearchPage from "./page/searchPage";
import VideoPage from "./page/videoPage";

function App() {
  return (
    <>
      <Navbar />
      <Route path='/' component={Home} exact />
      <Route path='/video/:videoId' component={VideoPage} />
      <Route path='/search/:word' component={SearchPage} />
    </>
  );
}

export default App;
