import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  specialization?: StringNullableFilter;
};
