import {Component} from '@angular/core'

@Component({
        selector: 'border',
        template: `
            <div style='border:3px solid black;
                 border-radius:4px;
                 box-shadow:4px 5px 4px #345;
                 width:150px'>
                 <p>Company : </p>
                 <span><ng-content></ng-content></span>

            </div>`

})

export class BorderComponent{


}
