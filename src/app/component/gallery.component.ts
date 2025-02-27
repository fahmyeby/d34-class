import { Component, OnInit } from '@angular/core';
import { FakeryService } from '../service/fakery.service';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent implements OnInit {
  photo: any[] = [];
  error: string = '';

  constructor(private fakeryService: FakeryService) {}

  ngOnInit(): void {
    this.fetchPhotos();
  }

  // fetch photo from service
  fetchPhotos(): void {
    this.fakeryService.getFakeryPhotos().subscribe({
      next: (data) => {
        this.photo = data;
      },
      error: (error) => console.error(error),
    });
  }
}
