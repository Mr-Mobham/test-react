import { useEffect } from "react";
import Header from "../layouts/Header";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Home from './home/Home'
import User from './user/User'
import '../assets/styles/main.scss';



function App() {

  const Routers = () => {
    let routes = useRoutes([
      { path: "/", element: <Home  /> },
      { path: "/user/:id", element: <User  /> },
      // ...
    ]);
    return routes;
  };
  


  return (
    <div className="w-100">
          <Header />
            <Router>
                <Routers />
            </Router>
    </div>

  );
}

export default App;
