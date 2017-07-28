import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

interface UserResponse {
  login: string,
  bio: string,
  company: string,
  organizations_url: string,
  url: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private http: HttpClient) {


  }

  ngOnInit(): void {

    this.http.get('https://api.github.com/users/admirkb')
      .subscribe((data) => {
        console.log(data)
      });

    this.http.get<UserResponse>('https://api.github.com/users/admirkb')
      .subscribe((data) => {
        console.log("Login", data.login)
        console.log("Organizations Url", data.organizations_url)
        console.log("Url", data.url)
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client side error", err)
        } else {
          console.log("Server side error", err)
        }

      });


    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {

      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe((res) => {

        console.log(res)
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client side error", err)
        } else {
          console.log("Server side error", err)
        }

      })



  }
}
