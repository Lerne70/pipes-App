import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    
    transform(termino: string, enMayusculas:boolean = true):string {
        // console.log(enMayusculas);
        // if (enMayusculas) {
        //     return termino.toUpperCase();
        // } else {
        //     return termino.toLocaleLowerCase();
        // }
        return (enMayusculas) ? termino.toLocaleUpperCase() : termino.toLocaleLowerCase();
    }
}