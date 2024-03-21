export interface User {
  ctipou?: number;
  descripcion?: string;
  estado?: string;
}

export interface Empleados {
  CI?: number | undefined;
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
