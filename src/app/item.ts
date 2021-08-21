import { InstrumentoEnum, DificultadEnum, SaborEnum, 
    TipoEnum, HambreEnum, PreparacionEnum  } from "./categorias";

export interface Item {
    id: number;
    nombre: string;
    receta: string;
    instrumento: InstrumentoEnum;
    extra: string[];
    variacion: string[];
    dificultad: DificultadEnum;
    calificacion: number;
    imagen: string[];
    ingredientes: string[];
    link: string[]
    tipo: TipoEnum[];
    hambre: HambreEnum;
    preparacion: PreparacionEnum;
    relacionados: number[];
    sabor: SaborEnum;
}
