import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentUpdateInput = {
  dateTime?: Date | null;
  doctor?: DoctorWhereUniqueInput | null;
  patient?: PatientWhereUniqueInput | null;
};
