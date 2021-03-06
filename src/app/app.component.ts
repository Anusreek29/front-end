import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryApp';

  showHead: boolean = false;

  constructor(public router: Router) {
   
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        
        if((event['url'] != '/')){
          this.showHead = false;
        }
        else {
          this.showHead = true;
        }
      }
    });
  }
}
