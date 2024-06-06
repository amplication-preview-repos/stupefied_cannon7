import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  createdAt: Date;
  dateTime: Date | null;
  doctor?: Doctor | null;
  id: string;
  patient?: Patient | null;
  updatedAt: Date;
};
