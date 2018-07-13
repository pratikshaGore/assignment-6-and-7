import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef)
   {
     ele.nativeElement.style.color="black";
   }
    @HostListener('mouseleave') onmouseleave()
    {
      this.ele.nativeElement.style.color="red";
    }

}
