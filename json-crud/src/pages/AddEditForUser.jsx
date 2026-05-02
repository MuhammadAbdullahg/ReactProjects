import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../validation/userSchema";
import api from "../api/axios";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
export default function AddEditForUser({ toast }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data) => {
    if (id) {
      api.put(`/users/${id}`, data);
      toast.current.show({
        severity: "success",
        summary: "Updated",
        detail: "User updated successfully",
        life: 2000,
      });
    } else {
      api.post("/users", data);
      toast.current.show({
        severity: "success",
        summary: "Added",
        detail: "User added successfully",
        life: 2000,
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      api.get(`/users/${id}`).then((res) => {
        Object.keys(res.data).forEach((key) => {
          setValue(key, res.data[key]);
        });
      });
    }
  }, [id, setValue]);
  return (
    <div>
      <h2>{id ? "Edit User" : "Add User"}</h2>
      <form className="p-fluid" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Name</label>
          <InputText {...register("name")} />
          <small className="p-error">{errors.name?.message}</small>
        </div>
        <div className="field">
          <label>UserName</label>
          <InputText {...register("username")} />
          <small className="p-error">{errors.username?.message}</small>
        </div>
        <div className="field">
          <label>Email</label>
          <InputText {...register("email")} />
          <small className="p-error">{errors.email?.message}</small>
        </div>
        <div className="field">
          <label>Age</label>
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <InputNumber
                value={field.value}
                onValueChange={(e) => field.onChange(e.value)}
              />
            )}
          />
          <small className="p-error">{errors.age?.message}</small>
        </div>
        <Button label="Save" icon="pi pi-check" />
      </form>
    </div>
  );
}
