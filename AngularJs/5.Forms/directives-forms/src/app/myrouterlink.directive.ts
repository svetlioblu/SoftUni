import { Directive, OnInit, ElementRef, Renderer2, Input, } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]'
})
export class MyrouterlinkDirective implements OnInit {
  @Input() appMyRouterLink: string = ''

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
    console.log(this.appMyRouterLink);
    // this.router.navigate([''])

  }
}
