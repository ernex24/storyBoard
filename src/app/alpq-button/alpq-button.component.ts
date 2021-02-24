import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Button } from 'protractor';

@Component({
  selector: 'alpq-button',
  templateUrl: './alpq-button.component.html',
  styleUrls: ['./alpq-button.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class AlpqButtonComponent implements OnInit {

  @Input() 
  type:  'primary' | 'secondary' | 'warning' | 'danger' | 'success' ;

  @Input() 
  size: 'small' | 'medium' | 'large' ; 

  @Input() 
  label = 'Button';

  @Input() 
  icon = false;

  @Input() 
  iconType = 'gg-software-download';

  @Input() 
  loading = false;
  
  @Output() 
  onClick = new EventEmitter<Event>();

  @ViewChild('container', {static: true}) container:ElementRef;
  
  public get classes(): string {
    const mode = ` alpq-btn-${this.type} ` + ` alpq-btn-${this.size} `
    console.log(mode)
    return mode;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.container)
    this.icon ? this.container.nativeElement.innerHTML = `<span class="${this.iconType}"></span>${this.label}` : this.label
    this.loading ? this.container.nativeElement.innerHTML = `<span class="gg-loadbar-alt"></span>` : this.label
  }
}
