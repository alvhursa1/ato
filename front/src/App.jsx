import { createRef, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import Kiefer from "./pages/kiefer";
import Home from "./pages/home";
import Works from "./pages/works";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./styles/app.css";
import Coyo from "./pages/coyo";
import Fiona from "./pages/fiona";
import Zds from "./pages/zds";
import Navilandia from "./pages/navilandia";
import NotFoundPage from "./pages/404";
import Demo from "./pages/demo";
// import LoadingScreen from './components/loadingScreen';
import Calendario from "./pages/calendario";
import Demo3 from "./pages/demo3";
import Demo2 from "./pages/demo2";
import ButtonWhatsApp from "./components/buttonWhatsApp";

const routes = [
  { path: "/", element: <Home />, nodeRef: createRef(), transition: "page" },
  {
    path: "/work",
    element: <Works />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "/work/kiefer",
    element: <Kiefer />,
    nodeRef: createRef(),
    transition: "none",
  },
  {
    path: "/work/coyo",
    element: <Coyo />,
    nodeRef: createRef(),
    transition: "none",
  },
  {
    path: "/work/zds",
    element: <Zds />,
    nodeRef: createRef(),
    transition: "none",
  },
  {
    path: "/work/navilandia",
    element: <Navilandia />,
    nodeRef: createRef(),
    transition: "none",
  },
  {
    path: "/work/fiona",
    element: <Fiona />,
    nodeRef: createRef(),
    transition: "none",
  },
  {
    path: "/about",
    element: <About />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "/contact",
    element: <Contact />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "/demoux",
    element: <Demo />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "/demoagenciacreativa",
    element: <Demo2 />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "/demobranding",
    element: <Demo3 />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "/calendar",
    element: <Calendario />,
    nodeRef: createRef(),
    transition: "page",
  },
  {
    path: "*",
    element: <NotFoundPage />,
    nodeRef: createRef(),
    transition: "page",
  },
];

function App() {
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const isFirstVisit = !localStorage.getItem('hasVisitedBefore');
  //   if (isFirstVisit) {
  //     setIsLoading(true);
  //     localStorage.setItem('hasVisitedBefore', 'true');
  //     // Simulate loading time
  //     setTimeout(() => setIsLoading(false), 3500); // Remove this line in real app
  //   }
  // }, []);

  // if (isLoading) {
  //   return <LoadingScreen />; // Replace this with your actual loading component
  // }

  return (
    <Router>
      <ButtonWhatsApp />
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const appLocation = useLocation();
  const [prevPath, setPrevPath] = useState("");
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setPrevPath(currentPath);
    setCurrentPath(location.pathname);
  }, [appLocation, currentPath]);

  return (
    <Routes>
      {routes.map(({ path, element, nodeRef, transition }) => (
        <Route
          key={path}
          path={path}
          element={
            <AnimatedRoute
              nodeRef={nodeRef}
              element={element}
              transition={
                prevPath === "/" && path.includes("/work/")
                  ? "page"
                  : transition
              }
            />
          }
        />
      ))}
    </Routes>
  );
}

function AnimatedRoute({ nodeRef, element, transition }) {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        nodeRef={nodeRef}
        timeout={800}
        classNames={transition}
        unmountOnExit={true}
        onExited={() => window.scrollTo(0, 0)}
      >
        <div ref={nodeRef} className="page">
          {element}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

AnimatedRoute.propTypes = {
  nodeRef: PropTypes.object.isRequired,
  element: PropTypes.element.isRequired,
  transition: PropTypes.string.isRequired,
};

export default App;
