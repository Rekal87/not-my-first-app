import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent {
  username: string = '';
  userMessage: string = '';

  onResetName() {
    if (this.username.length > 0) {
      this.username = '';
      this.userMessage = '';
    } else {
      this.userMessage = 'Write a name';
    }
  }
}
