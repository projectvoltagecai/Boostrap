import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.DTO';

@Controller('user')
export class UserController {
    constructor (private readonly userservice: UserService){}

   @Get()
   userHola(): string{
   return this.userservice.saludo()

  }

  @Post()
  async create(@Body() User : UserDto){

    const respuesta = await this.userservice.crearUser(User)
    return {ok: true, respuesta}
  }

  @Get('all')

  async Consultar(){
    return await this.userservice.ConsultarUsers()

  }

  @Delete('/:id')
  async Eliminar(@Param('id') id: string){

    const usuarioEliminado= await this.userservice.EliminarUser(id)
    if (usuarioEliminado){
      return {ok:true, usuarioEliminado}

    }
    return {ok: false, mensaje: "El usuario no existe"}
  }

  @Patch('/:id')
  async Actualizar(@Param('id')id: string,@Body() User: UserDto){

    const usuarioActualizado = await this.userservice.ActualizarUser(id, User)

    if(usuarioActualizado){
      return {ok:true, usuarioActualizado}
    }
    else 
    return {ok: false, mensaje: "El usuario no se puede actualizar porque no existe"}
  }
  
}
