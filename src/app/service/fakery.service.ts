import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  constructor(private httpClient: HttpClient) { }

  private fakeryURL = 'https://jsonfakery.com/photos';

  getFakeryPhotos(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.fakeryURL);
  }
}
