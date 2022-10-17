import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutMain />,
      children: [
        {
          path: "/",
          element: (
            <div>
              <h1>Hello Londogen home page</h1>
            </div>
          ),
        },
        {
          path: "about",
          element: <div>
            <h1>About Page</h1>
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
