import { Component } from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input #box 
            (keyup.enter)="onKey(box.value)"
            (blur) = "values=box.value"
        >
        <p>{{values}}</p>
    `
})
export class KeyUpComponent {
    values = '';
    onKey(value: string){
        this.values += value + ' | ';
    }
}