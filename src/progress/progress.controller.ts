import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProgressService } from './progress.service';
import { ProgressDto } from './Progress.DTO';

@Controller('progress')
export class ProgressController {

    constructor (private readonly progressService: ProgressService){}

    @Get()

    progressHola(): string {
        return this.progressService.saludo()
    }

    @Post()

    async create(@Body() Progress : ProgressDto){

        const respuesta = await this.progressService.crearProgress(Progress)

        return {ok: true, respuesta}
    }

    @Get('all')
    async buscarTodos(){
        return await this.progressService.ConsultarProgress()

    }

    @Delete('/:id')
    async eliminar (@Param("id") id:string){

        const progressEliminado= await this.progressService.EliminarProgress(id)
        if (progressEliminado){
            return{ok:true, progressEliminado}
        }
        return {ok:false, mensaje: "El id de progreso no existe"}
    }


    @Patch('/:id')

    async actualizar(@Param("id")id: string, @Body()Progress: ProgressDto){

    const progressActualizado = await this.progressService.ActualizarProgress(id, Progress)

    if (progressActualizado){
        return{ok:true, progressActualizado}
    }
    return {ok:false, mensaje: "El id de progreso no existe"}
}
}


