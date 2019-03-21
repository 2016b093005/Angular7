import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Convert'
})

export class ConvertPipe implements PipeTransform{
    transform(value: number): number {
        // if(format === 'CtoF')
        return (value * 9 / 5 ) + 32;
    }
}