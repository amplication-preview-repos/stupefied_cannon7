import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  dob?: Date | null;
  gender?: "Option1" | null;
  name?: string | null;
  problem?: string | null;
};
