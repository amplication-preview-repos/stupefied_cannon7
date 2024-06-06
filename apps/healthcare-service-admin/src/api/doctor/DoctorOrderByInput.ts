import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
