import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'counter',
    inputs: ['count'],
    outputs: ['countChanged'],
    template: `
    <div>
        <button name='btn1' (click)='changeEvt()'>
            Click
        </button>
    </div>
    `
})
export class CounterComponent {
    count: number;
    public countChanged = new EventEmitter();

    changeEvt() {
        this.countChanged.emit();
        this.count++;
    }
}
