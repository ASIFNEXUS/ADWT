import { Injectable } from '@nestjs/common';
import { userDTO } from './userDTO';

@Injectable()
export class AppService {
  [x: string]: any;
  postNewvalue(id: any, pname: any): string {
    throw new Error('Method not implemented.');
  }
  
  getHello(): string {
    return 'Hello World!';
  }

  postBye(userDTO:userDTO): string {
    return `bye id = ${userDTO.id} name= ${userDTO.name}`;
  }

  getbyId(id):any{
    return `the id is ${id}`;
  }

  updateBye(userDTO:userDTO): string {
    return `updated id = ${userDTO.id} name= ${userDTO.name}`;
  }

  deleteId(id):any{
    return `deleted id is ${id}`;
  }

  newId(id):any{
    return `the id is ${id.id}`;
  }

  getbyIdNo(id):any{
    return `the id no is ${id}`;
  }

  getWellcome(): string {
    return 'Wellcome to our site!';
  }
 
  updatesale(userDTO:userDTO): string {
    return `updated id = ${userDTO.id} name= ${userDTO.name}`;
  }

  postentry(userDTO:userDTO): string {
    return `bye id = ${userDTO.id} name= ${userDTO.name}`;
  }

  updatedevice(userDTO:userDTO): string {
    return `updated device id = ${userDTO.id} name= ${userDTO.name}`;
  }

  deleteinfo(id):any{
    return `New deleted info is: ${id}`;
  }

}
