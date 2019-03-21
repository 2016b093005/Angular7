import {Component} from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
    selector: 'quote',
    styles: [`
    .quote {
        background-color: #ffff00
    }
    `    ],
    template: `
    <div>
        <h2 style="background-color: #ffff00;">  Decoratot that marks a class as an Angular component provides
                config metadata
                <p class="quote" style="background-color:#ffff00;"> {{quote.line}} - {{quote.author}}</p>
        </h2>
    </div>`
})

export class QuoteComponent {
    quote = {
        line : 'NO Pain No Gain',
        author: 'Some'
    };
}
