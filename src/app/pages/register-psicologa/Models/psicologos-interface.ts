export interface PsicologosInterface {
    idpsicologa:number,
    nombre:string,
    apellido:string,
    aniosExperiencia:string,
    especialidad:string,
    telefono:string,
    email:string
}
export type PsicologosInterfacePost = Omit<PsicologosInterface, 'idpsicologa'>;