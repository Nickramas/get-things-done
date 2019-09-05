import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@get-things-done/api-interfaces';

@Component({
  selector: 'get-things-done-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public title = 'Get Things Done'
  public message = ''

  constructor(private http: HttpClient) {
    this.http.get('http://127.0.0.1:3333/api/message').subscribe((data) => {
      this.message = data.message
    })
  }
}
