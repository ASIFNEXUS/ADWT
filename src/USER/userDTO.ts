import { IsDate, IsEmail, IsNotEmpty } from "class-validator";

export class userDTO{
    @IsNotEmpty({message:'id can not be empty'})
    id:number;
    @IsNotEmpty({message:'name can not be empty'})
    name:string;
    @IsNotEmpty({message:'phoneNo can not be empty'})
    phoneNo:number;
    @IsNotEmpty({message:'email can not be empty'})
    @IsEmail({})
    email:string;
    @IsNotEmpty({message:'address can not be empty'})
    address:string;
    
    @IsNotEmpty({message:'password can not be empty'})
    password:string;


}


