import { Component } from '@angular/core';
import { PostComponent } from './postlist/post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';

  post = [ 
    {
      title: 'Mon premier poste',
      content: 'ce premier poste est vraiment incroyablement complet, vivement la suite',
      likes: 0,
      dislikes: 0,
      created_at: '10/04/2018'
    } ,
    {
      title: 'Mon deuxième poste',
      content: 'ce deuxième poste depasse les attentes',
      likes: 0,
      dislikes: 0,
      created_at: '10/05/2018'
    } ,
    {
      title: 'Mon dernier poste',
      content: 'alors là rien à dire',
      likes: 0,
      dislikes: 0,
      created_at: '10/06/2018'
    } ,
  
  ]





}
