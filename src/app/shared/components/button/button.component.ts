import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],

})
export class ButtonComponent {

  @Input() label: string = 'Button';

  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @Input() disabled: boolean = false;

  @Output() clicked = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

}
