import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector : '[format]',
    host : {
        '(focus)' : 'onFocus()',
        '(blur)' : 'onBlur()'
    }


})

export class FormatDirective {
    constructor(private el : ElementRef, 
                private renderer: Renderer){}
    onFocus(){
        this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'bold');
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200px');
    }
    onBlur(){
        this.renderer.setElementStyle(this.el.nativeElement, 'font-weight', 'normal');
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120px');
    }
}