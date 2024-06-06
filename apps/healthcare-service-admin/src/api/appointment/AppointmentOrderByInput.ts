import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
