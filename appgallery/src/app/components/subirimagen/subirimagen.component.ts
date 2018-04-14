import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { GalleryComponent} from '../gallery/gallery.component';

@Component({
  selector: 'app-subirimagen',
  templateUrl: './subirimagen.component.html',
  styleUrls: ['./subirimagen.component.css']
})
export class SubirimagenComponent implements OnInit {
  @Input()
   gallery: GalleryComponent;
  constructor(private http: Http) { }

  ngOnInit() {
  }
  subirImagen(event){
   let elemento = event.target;
   if(elemento.files.length > 0){
     let formData = new FormData();
     formData.append('file', elemento.files[0]);
     this.http.post('http://localhost:8888/appUpload/back/script.php', formData) 
     .subscribe((data) => {
       let jsonRes = data.json();
       this.gallery.data_backend(jsonRes.file);
      }, (error) => console.log(error.message));
   }
  }
}
