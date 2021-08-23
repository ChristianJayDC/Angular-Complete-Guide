import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @ViewChild('header', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) contentParagraph: ElementRef;

  constructor() {
    console.log('Constructor called');

  }

  ngOnChanges() {

  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // console.log(this.header.nativeElement.textContent);

  }

}
