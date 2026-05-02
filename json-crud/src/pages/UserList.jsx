import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { confirmDialog } from "primereact/confirmdialog";

export default function UserList({ toast }) {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  const deleteUser = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this user",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: async () => {
        await api.delete(`/users/${id}`);
        fetchUsers();
        toast.current.show({
          severity: "success",
          summary: "Deleted",
          detail: "User deleted successfully",
          life: 2000,
        });
      },
    });
  };

  const actionButtons = (rowData) => (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-sm p-button-warning mr-2"
        onClick={() => navigate(`/edit/${rowData.id}`)}
      />
      <Button
        icon="pi pi-trash"
        onClick={() => deleteUser(rowData.id)}
        className="p-button-sm p-button-danger"
      />
    </>
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-content-end mb-2">
        <Button
          label="Add User"
          icon="pi pi-plus"
          size="small"
          onClick={() => navigate("/add")}
        />
      </div>
      <DataTable
        value={users}
        stripedRows
        showGridlines
        paginator
        rows={5}
        size="small"
        filterDisplay="row"
      >
        <Column
          field="name"
          header="Name"
          filter
          sortable
          filterPlaceholder="search"
        ></Column>
        <Column
          field="username"
          header="UserName"
          filter
          sortable
          filterPlaceholder="search"
        ></Column>
        <Column
          field="email"
          header="Email"
          filter
          sortable
          filterPlaceholder="search"
        ></Column>
        <Column
          field="age"
          header="Age"
          filter
          sortable
          filterPlaceholder="search"
        ></Column>
        <Column
          header="Action"
          body={actionButtons}
          style={{ width: "13%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
