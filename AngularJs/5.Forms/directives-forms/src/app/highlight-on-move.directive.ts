import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

//todo insert into module,declarations 
@Directive({
  selector: '[appHighlightOnMove]'
})
export class HighlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    //  todo no correct hardcoded
    // this.elRef.nativeElement.style.backgroundColor = 'yellow'
    // todo correct
    //    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')

    //todo listeners rendered feature
    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    )
    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    )
  }
  mouseEnterHandler(e: MouseEvent) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red')
    //todo can add class
    this.renderer.addClass(this.elRef.nativeElement, 'highlight')
  }
  mouseLeaveHandler(e: MouseEvent) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '')
  }

  // todo hostlisteners it seems more clear
  @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
    console.log(e);

  }
}
