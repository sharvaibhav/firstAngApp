import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @Input() newper;
  values="";
  people = [
      {
        name:"vaibhav",
        image:"http://lorempixel.com/400/200",
        website:"www.google.com",
        email:"vaibhav.jiitu@gmail.com"
      }
    ];

    onKey(event:any) { // without type info
    this.values = event.target.value;
  }

  formSubmit(formValues){
    console.log(formValues);
    this.people.push(formValues);

  }
}
