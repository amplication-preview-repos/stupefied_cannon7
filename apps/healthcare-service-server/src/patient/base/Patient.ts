/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Appointment } from "../../appointment/base/Appointment";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsEnum,
  IsString,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumPatientGender } from "./EnumPatientGender";

@ObjectType()
class Patient {
  @ApiProperty({
    required: false,
    type: () => [Appointment],
  })
  @ValidateNested()
  @Type(() => Appointment)
  @IsOptional()
  appointments?: Array<Appointment>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dob!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumPatientGender,
  })
  @IsEnum(EnumPatientGender)
  @IsOptional()
  @Field(() => EnumPatientGender, {
    nullable: true,
  })
  gender?: "Option1" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  problem!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Patient as Patient };
