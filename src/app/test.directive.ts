import { Directive, ViewContainerRef } from '@angular/core';


// --- notice the selector name, adHost; 
// --- that's what you use to apply the directive to the element. The next section shows you how.
@Directive({
    selector: '[adHost]',
})


//----- Define an anchor point to tell Angular where to insert components

export class AdDirective {
   constructor(public viewContainerRef: ViewContainerRef) { }
}