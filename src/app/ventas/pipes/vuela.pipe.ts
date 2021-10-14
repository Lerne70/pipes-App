import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{
    
    transform(termino: boolean):string {
        return (termino) ? 'vuela' : 'no vuela';
    }
}