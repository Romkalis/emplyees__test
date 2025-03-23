import { createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import {NewUser} from "../components/core/NewUser/NewUser.jsx";

export const routes = createBrowserRouter(
  [
    {
      path: '/',
      element: <App/>,
    },
    {
      path: '/add',
      element: <NewUser />
    }
  ]
)

