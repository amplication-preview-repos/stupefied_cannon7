import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PatientList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Patients"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="dob" source="dob" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="problem" source="problem" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
