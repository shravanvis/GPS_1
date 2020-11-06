import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SetupComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close('Pizza!');
  }
}
