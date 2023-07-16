import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnMove]'
})
export class HighlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }


  ngOnInit(): void {
    // this.elRef.nativeElement.style.backgroundColor = 'yellow'

    this.renderer.setStyle(
      this.elRef.nativeElement, 'background-color', 'red'
    )

    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler
    )
    this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler
    )
  }
  mouseEnterHandler(e: MouseEvent) {
    console.log('enter', e);

  }
  mouseLeaveHandler(e: MouseEvent) {
    console.log('leave', e);

  }

}
