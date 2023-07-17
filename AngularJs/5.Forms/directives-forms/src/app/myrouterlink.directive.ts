import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyrouterlink]'
})
export class MyrouterlinkDirective implements OnInit {

  constructor(private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router) { }

  ngOnInit(): void {
    this.renderer.listen(
      this.elRef.nativeElement,
      'click',
      this.clickHandler.bind(this)
    )
  }

  clickHandler(e: MouseEvent) {
    console.log(e);

  }
}
