import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';

import { AppService } from './user.service';
import { userDTO } from './userDTO';

@Controller("api/")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hello")
  @UsePipes(new ValidationPipe())
  getHello(): string {
    return this.appService.getHello();
  }
 
  @Post("insert")
  @UsePipes(new ValidationPipe())
  postBye(@Body() userDTO:userDTO): string {
    return this.appService.postBye(userDTO);
  }

  @Get("get/:id")
  @UsePipes(new ValidationPipe())
  getId(@Param()userDTO:userDTO) : string{
    return this.appService.getbyId(userDTO);
  }

  @Put("update")
  @UsePipes(new ValidationPipe())
  updatedBye(@Body()userDTO:userDTO):string{
    return this.appService.updateBye(userDTO);
  }

  @Delete("delete/:id")
  @UsePipes(new ValidationPipe())
  deleteId(@Param('id', ParseIntPipe)id:any) : string{
    return this.appService .deleteId(id);
  }

  @Get("get/?")
  @UsePipes(new ValidationPipe())
  newId(@Query()userDTO:userDTO) : string{
    return this.appService.getbyId(userDTO);
  }

  @Get("get/:idNo")
  @UsePipes(new ValidationPipe())
  getIdNo(@Param()userDTO:userDTO): string{
    return this.appService.getbyIdNo(userDTO);
  }

  @Get("wellcome")
  @UsePipes(new ValidationPipe())
  getWellcome(): string {
    return this.appService.getWellcome();
  }

  @Put("sale")
  @UsePipes(new ValidationPipe())
  updatedSale(@Body()userDTO:userDTO): string {
    return this.appService.updatesale(userDTO);
  }

  @Post("entry")
  @UsePipes(new ValidationPipe())
  postentry(@Body()userDTO:userDTO ): string {
    return this.appService.postentry(userDTO);
  }

  @Put("device")
  @UsePipes(new ValidationPipe())
  updatedevice(@Body() userDTO:userDTO):string{
    return this.appService.updatedevice(userDTO);
  }

  @Delete("newdelete/:id")
  @UsePipes(new ValidationPipe())
  deleteinfo(@Param("id" ,ParseIntPipe) id:any) : string{
    return this.appService .deleteinfo(id);
  }

}

