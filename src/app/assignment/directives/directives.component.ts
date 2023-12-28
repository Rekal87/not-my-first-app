import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isButtonClicked = false;
  amountBuuttonClicked = 0;
  buttonClickedArr = [];

  onUserClick() {
    this.isButtonClicked = true;
    this.amountBuuttonClicked = this.amountBuuttonClicked + 1;
    console.log('Button clicked: ', this.amountBuuttonClicked);
    // this.buttonClickedArr.push({
    //   id: this.buttonClickedArr.length + 1,
    //   value: 'Clicked',
    // });
    this.buttonClickedArr.push(new Date());
  }
}
