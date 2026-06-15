export interface Material {
  id: string;
  nombre: string;
  descripcion: string;
  precio_unitario: number;
  stock: number;
  unidad_medida: string;
  taller_id?: string;
}