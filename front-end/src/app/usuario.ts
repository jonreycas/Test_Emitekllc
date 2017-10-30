export class Usuario {
    constructor(
        public id: number, 
        public nombre: string, 
        public cuenta: string,
        public clave: string,
        public sexo: string,
        public createdAt: Date,
        public updatedAt: Date
    ) { 
    }
 } 