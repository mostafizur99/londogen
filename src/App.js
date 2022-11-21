import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/Abouts/About";
import Home from "./components/Homes/Home";
import Review from "./components/Reviews/Review";
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
        {
          path: "reviews",
          element: <Review />
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
