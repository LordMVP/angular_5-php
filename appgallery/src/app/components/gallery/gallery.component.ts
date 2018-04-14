import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  isVisible: boolean = false;
  id: string = '';
  constructor() { }

  ngOnInit() {
  }

  data_backend(uid: string){
    this.isVisible = true;
    this.id = uid;
  }

}
