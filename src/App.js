import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        {
          path: "/",
          element: (
            <div>
              <h1> hello Londogen root</h1>
              <Link to="about">About Us</Link>
            </div>
          ),
        },
        {
          path: "about",
          element: <div>
            <h1>  About</h1>
            <Link to="/">Home</Link>
          </div>
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
