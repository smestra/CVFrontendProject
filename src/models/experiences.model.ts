export interface Experience {
    _id?:string;
    studentCode: number;
    nombre: string;
    cargo: string;
    empresa: string;
    fechaInicio: string;
    fechaFin: string;
    descripcion?: string;
}