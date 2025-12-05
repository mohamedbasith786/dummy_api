import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';



interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App  {

  userdata:  Comment[] = []

  apiurl = "https://jsonplaceholder.typicode.com/posts/1/comments"

  async getdata() {
      const response = await fetch(this.apiurl);
      this.userdata=await response.json();
      console.log(this.userdata);
  }


  ngOnInit() {
    this.getdata();
    
  }
  cleardata(){
    this.userdata=[];
  }
}