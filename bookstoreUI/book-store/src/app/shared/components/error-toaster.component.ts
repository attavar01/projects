import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

@Component({
    template: `<mat-dialog-content style='color: white;'>{{data.errorMsg}}</mat-dialog-content>
    <mat-dialog-actions align="end">
    <button mat-button style='color: white;' mat-dialog-close>OK</button>
  </mat-dialog-actions>`,
    standalone: true,
    styles:['::ng-deep .mat-mdc-dialog-container .mdc-dialog__surface {background-color: #ff8080}'],
    imports: [MatDialogModule, MatButtonModule],
  })
  export class ErrorToaster {
    constructor(@Inject(MAT_DIALOG_DATA) public data:any) {}
  }