import { Usuario } from "./usuario";

export class Favorito {
    constructor(
        public id: string, 
        public usuario: Usuario, 
        public favorito: Usuario,
        public createdAt: string,
        public updatedAt: string
    ) { 
    }
 } 