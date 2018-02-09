import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActive = true;
  label = "AUBG is ...";

  onClickWrapper(){
    console.log("button wrapper click");
  }
  onClickButton($event){
    $event.stopPropagation();
    console.log("button click");
    console.log($event)
  }

  clearLabel(){
    this.label = '';
  }
}