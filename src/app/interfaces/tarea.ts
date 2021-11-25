export interface Tarea {
    _id?: number;
    idProyecto: number;
    strNombre: string;
    strStatus: string;
    strDescripcion: string;
    dteFechaInicio: any;
    dteFechaEntrega: any;
    arrAdministrador: any;
    arrDesarrollador: any;
    arrTester: any;
};