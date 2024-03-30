import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  title = 'The Book Store';
  hasSignedIn =false;

  constructor(private _localStorage:LocalStorageService){}

  ngOnInit(): void {

    this._localStorage.watchStorage().subscribe(() => {
      this.hasSignedIn = this._localStorage.getStorage() != 'null';
    })
}
}
