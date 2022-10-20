import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/Abouts/About";
import Home from "./components/Homes/Home";
import LayoutMain from "./layouts/LayoutMain";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        {
          path: "/",
          loader: () => fetch('categoryDb.json'),
          element: <Home />,
        },
        {
          path: "about",
          element: <About />
        },
      ]
    }
  ])

  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
