import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PatientWhereInput = {
  appointments?: AppointmentListRelationFilter;
  dob?: DateTimeNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  problem?: StringNullableFilter;
};
