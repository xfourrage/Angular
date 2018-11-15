import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostComponent } from './postlist/post/post.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
