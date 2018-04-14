import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SubirimagenComponent } from './components/subirimagen/subirimagen.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SubirimagenComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
