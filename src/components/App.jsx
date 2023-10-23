import { Provider } from "react-redux";
import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <Provider>
        <Layout>
      <AppBar />
      {/* <TaskForm />
      <TaskList /> */}
    </Layout>
    </Provider>
  
  );
};
