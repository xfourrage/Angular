import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  // posts = [ 
  //   {
  //     title: 'Mon premier poste',
  //     content: 'content1',
  //     likes: 0,
  //     dislikes: 0,
  //     created_at: '10/03/2018'
  //   } ,
  //   {
  //     title: 'Mon deuxième poste',
  //     content: 'content2',
  //     likes: 0,
  //     dislikes: 0,
  //     created_at: '12/03/2018'
  //   } ,
  //   {
  //     title: 'Mon dernier poste',
  //     content: 'content3',
  //     likes: 0,
  //     dislikes: 0,
  //     created_at: '07/31/2018'
  //   } ,
  
  // ]

  @Input() arrayPost : any;


  constructor() { 
    console.log(this.arrayPost);
  }

  ngOnInit() {
  }

}
