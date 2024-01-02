import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./container/Root/Root.container";
import Homepage from "./container/Homepage/Homepage.container";
import Create from "./container/Create/Create.container";
import TaskDetail from "./container/TaskDetail/TaskDetail.container";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="create" element={<Create />} />
        <Route path="tasks/:taskId" element={<TaskDetail />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
