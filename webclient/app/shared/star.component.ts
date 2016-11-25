import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(event:any): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(){
        this.notify.emit(`the rating ${this.rating} was clicked!`);
    }
}