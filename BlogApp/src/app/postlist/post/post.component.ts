import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  
    //title: string = 'mon premier post';
   // content: string;
  //  loveIts: number;
   // created_at: Date;
  
  likeNumber: number = 0;
  dislikeNumber: number = 0;
  date: Date = new Date();

  @Input() title : String ;
  @Input() content : String ;
  @Input() created_at : Date ;
  

  constructor() { }

  ngOnInit() {
  }

  addLike(): void {
    this.likeNumber++;
  }
  addDislike(): void {
    this.dislikeNumber++;
  }
  getColor(): String {
    if (this.likeNumber>this.dislikeNumber)
  return 'green'
  else if (this.likeNumber==this.dislikeNumber)
  return 'black'
  else return 'red'
  }
}
