export class Nota {
    constructor(
        public id: string, 
        public titulo: string, 
        public contenido: string,
        public usuario: number,
        public createdAt: string,
        public updatedAt: string
    ) { 
    }
 } 