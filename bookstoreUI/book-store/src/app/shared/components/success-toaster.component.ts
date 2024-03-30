import { Component, Inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    template: `<mat-dialog-content>Your book has been reserved between {{data.start}} and {{data.end}}</mat-dialog-content>
    <mat-dialog-actions align="end">
    <button mat-button mat-dialog-close>OK</button>
  </mat-dialog-actions>`,
    standalone: true,
    imports: [MatDialogModule, MatButtonModule],
  })
  export class SuccessToaster {
    constructor(@Inject(MAT_DIALOG_DATA) public data:any) {}
  }