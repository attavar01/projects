import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = new Subject<string>();
  constructor() { }


  watchStorage(): Observable<any> {
    return this.storage.asObservable();
  }

  public setStorage(user) {
    localStorage.setItem('userInfo', user);
    this.storage.next('changed'); // tell subscribers storage status is updated
  }

  public getStorage() {
    return localStorage.getItem('userInfo');
  }
}
