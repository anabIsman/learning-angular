import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hsshsh';
  public variable: string = "jsjsjsjs"  

  show(num: number){
    if (num == 1){
      this.variable ="valeur 1"
    }else{
      this.variable ="valeur 2"
      
    }
  }
}
