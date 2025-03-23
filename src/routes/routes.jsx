import { createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {NewUser} from "../components/core/NewUser/NewUser.jsx";
import {Home} from "../components/core/Home/Home.jsx"

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'add',
          element: <NewUser />
        }
      ]
    },
  ]
)

