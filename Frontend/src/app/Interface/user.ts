export interface User {
  ctipou?: number;
  descripcion?: string;
  estado?: string;
}

export interface Empleados {
  CI?: number | null;
  cipadre?: number | null;
  nom1: string | null;
  nom2?: string | null;
  ape1: string | null;
  ape2?: string | null;
  sexo: string | null;
  dir?: string | null;
  lugarnac?: string | null;
  teldomicilio?: string | null;
  email?: string | null;
  etnia?: string | null;
  estcivil?: string | null;
  colorpelo?: string | null;
  estatura?: number | null;
  peso?: number | null;
  idniveledu?: number | null;
  cargo?: string | null;
  contrato?: string | null;
  departamento?: string | null;
  ubicacion?: string | null;
  estado?: string;
  foto?: Blob | null;
  clave?: string | null;
}

export interface Especialidad {
  idespecialidad?: number | null;
  especialidad?: string | null;
  estado?: string;
}

export interface NivelEdu {
  idniveledu?: number | null;
  nombrenivel?: string | null;
  idtiponiveledu?: number | null;
  idespecial?: number | null;
  idnomcentro?: number | null;
  fobtenido?: Date | null;
  estado?: string;
}

export interface Caparecibida {
  idcapa?: number | null;
  CI?: number | null;
  idtitulo?: number | null;
  idtipocapa?: number | null;
  finicio?: Date | null;
  ffin?: Date | null;
  idnomcentro?: number | null;
  idfacultad?: number | null;
  tomo?: string | null;
  folio?: string | null;
  estado?: string;
}

export interface Facultad {
  idfacultad?: number | null;
  facultad?: string | null;
  estado?: string;
}

export interface Nomcentro {
  idnomcentro?: number | null;
  nomcentro?: string | null;
  estado?: string;
}

export interface Tipocapacitacion {
  idtipocapa?: number | null;
  tipocapa?: string | null;
  estado?: string;
}

export interface Tiponiveledu {
  idtiponiveledu?: number | null;
  tiponiveledu?: string | null;
  estado?: string;
}

export interface Titulo {
  idtitulo?: number | null;
  titulo?: string | null;
  estado?: string;
}