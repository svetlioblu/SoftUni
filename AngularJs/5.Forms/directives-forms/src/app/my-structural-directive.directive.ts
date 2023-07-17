import { Directive, Input, OnChanges, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructuralDirective]'
})
export class MyStructuralDirectiveDirective implements OnChanges {
  // todo ngIf implementation
  @Input() appMyStructuralDirective: boolean = true
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.appMyStructuralDirective) {
      this.vcRef.createEmbeddedView(
        this.templateRef
      )
    } else {
      this.vcRef.clear()
    }

  }

}
function Oprional(target: typeof MyStructuralDirectiveDirective, propertyKey: undefined, parameterIndex: 0): void {
  throw new Error('Function not implemented.');
}

