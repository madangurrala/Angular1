import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment2';
  fruitsList = ['Apples', 'Bananas', 'Cherries'];

  addNewItem(newItem){
    this.fruitsList.push(newItem);
    console.log(this.fruitsList);
  }

}
