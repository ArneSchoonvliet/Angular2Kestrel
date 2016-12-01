import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <h1>{{title}}</h1>
    `
})
export class AboutComponent implements OnInit {
    public title : string = "About";
    constructor() { }

    ngOnInit() { }
}