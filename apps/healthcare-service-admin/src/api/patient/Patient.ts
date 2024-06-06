import { Appointment } from "../appointment/Appointment";

export type Patient = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  dob: Date | null;
  gender?: "Option1" | null;
  id: string;
  name: string | null;
  problem: string | null;
  updatedAt: Date;
};
