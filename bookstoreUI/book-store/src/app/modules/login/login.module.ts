import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
