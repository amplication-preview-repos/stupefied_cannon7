import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  createdAt?: SortOrder;
  dob?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  problem?: SortOrder;
  updatedAt?: SortOrder;
};
