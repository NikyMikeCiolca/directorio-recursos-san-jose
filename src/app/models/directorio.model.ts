export interface Entidad {
    id: string;
    nombre: string;
    descripcion: string;
    web?: string;
    telefono?: string;
    email?: string;
    direccion?: string;
}

export interface Servicio {
    id: string;
    entidadId: string;

    nombre: string;
    descripcion: string;

    categoriaIds: string[];
    colectivoIds: string[];

    url?: string;

    requisitos?: string[];
    horario?: string;
    modalidad?: 'presencial' | 'online' | 'telefonica' | 'mixta';
    gratuito?: boolean;
}

export interface Categoria {
    id: string;
    nombre: string;
    descripcion: string;
}

export interface Colectivo {
    id: string;
    nombre: string;
    descripcion: string;
}