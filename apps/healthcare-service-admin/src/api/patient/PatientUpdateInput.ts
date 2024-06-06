import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  dob?: Date | null;
  gender?: "Option1" | null;
  name?: string | null;
  problem?: string | null;
};
