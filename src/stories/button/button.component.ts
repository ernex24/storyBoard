import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpq-button',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export default class ButtonComponent {
  /**
   * Is this the principal call to action on the page?
   */
  @Input('skin') skin: any;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = [`alpq-btn-${this.skin}`, `alpq-btn-${this.skin}-${this.size}` ]
    console.log(mode)
    return mode;
  }
}
