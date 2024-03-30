import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../shared/services/local-storage.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit{
  constructor(private localStorage:LocalStorageService){}

  ngOnInit(): void {
    this.localStorage.setStorage(null) ;
  }

}
