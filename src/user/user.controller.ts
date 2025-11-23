import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.DTO';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
    constructor (private readonly userservice: UserService){}

   @Get()
   userHola(): string{
   return this.userservice.saludo()

  }

  

  @Get('all')

  async Consultar(){
    return await this.userservice.ConsultarUsers()

  }

  
     @Post()
    @UseInterceptors(
      FileFieldsInterceptor([
        
        { name: 'Avatar', maxCount: 1 },
      ]),
    )
    create(
      @Body() userDto: UserDto,
      @UploadedFiles() files:  {Avatar?: Express.Multer.File[] },
    )
    {
      // Asignamos los buffers de los archivos al DTO
      
      
      if (files.Avatar && files.Avatar[0]) {
        userDto.Avatar = files.Avatar[0].buffer;
      }
  
      // Llamamos al método del servicio
      return this.userservice.create(userDto);
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
