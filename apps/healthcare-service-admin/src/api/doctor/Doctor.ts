import { Appointment } from "../appointment/Appointment";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  name: string | null;
  specialization: string | null;
  updatedAt: Date;
};
