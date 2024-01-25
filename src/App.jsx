import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Watched from "./pages/Watched";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
