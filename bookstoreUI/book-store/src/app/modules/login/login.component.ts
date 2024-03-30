import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookStoreService } from '../../shared/services/book-store.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorToaster } from '../../shared/components/error-toaster.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{
  userName = '';
  password = '';

  constructor(private _bookStoreService : BookStoreService, private _router:Router, private _localStorage:LocalStorageService, public dialog: MatDialog){

  }

  onSignIn(form: NgForm) {
    if (form.invalid) {
      return;
  }
  else {
    this._bookStoreService.signIn(form.value).subscribe(userInfo => {
      this._localStorage.setStorage(JSON.stringify(userInfo)); 
      this._router.navigate(['/home']);
    },
    error =>{
      this.dialog.open(ErrorToaster, { data : {errorMsg: error.error.message}});
    })
    
  }
  }
}
