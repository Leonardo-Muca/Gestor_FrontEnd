import { Proyecto } from '../interfaces/proyecto';
export interface Tarea {
    _id?: number;
    idProyecto: Proyecto;
    strNombre: string;
    strStatus: string;
    strDescripcion: string;
    dteFechaInicio: any;
    dteFechaEntrega: any;
    arrAdministrador: any;
    arrDesarrollador: any;
    arrTester: any;
};