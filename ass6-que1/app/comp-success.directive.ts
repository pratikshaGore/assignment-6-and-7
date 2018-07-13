import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.color="Black";
   // ele.nativeElement.style.background='yellow'
   }
   @HostListener('mouseenter') onmouseenter()
   {
     this.ele.nativeElement.style.color="green"
   }
   

}
