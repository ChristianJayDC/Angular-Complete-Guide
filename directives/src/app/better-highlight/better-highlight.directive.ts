import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'aqua');
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'aqua';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseover(evenData: Event) {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'aqua', false, false);
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(evenData: Event) {
    // this.renderer.setStyle(this.elmRef.nativeElement, 'background-color', 'transparent', false, false);
    this.backgroundColor = this.defaultColor;
  }


}
