import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document,SchemaOptions } from 'mongoose';
import {IsEmail, IsNotEmpty, IsString} from "class-validator";

const options: SchemaOptions = {
    timestamps : true,
}

let IsEmail() = IsEmail;

@Schema()
export class Cat extends Document {
    @Prop({
        required : true,
        unique: true,
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Prop({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Prop({
        required : true,
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Prop()
    @IsString()
    imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);