import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import AddEditForUser from "./pages/AddEditForUser";
import MainLayout from "./layout/MainLayout";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
function App() {
  const toast = useRef(null);
  return (
    <BrowserRouter>
      <Toast ref={toast} />
      <ConfirmDialog />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<UserList toast={toast} />} />
          <Route path="/add" element={<AddEditForUser toast={toast} />} />
          <Route path="/edit/:id" element={<AddEditForUser toast={toast} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
