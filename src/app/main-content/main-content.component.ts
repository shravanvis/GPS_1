import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SetupComponent } from '../setup/setup.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  leftside: boolean = true;

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  public pieChartLabels = ['Moving', 'Offline'];
  public pieChartData = [67, 33];
  public pieChartType = 'pie';
  
  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }


  // for dropdown
  dropdown: boolean = false;
  opendropdown(){
    this.dropdown = true;
  }
  // for dropdown

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  showBottom: boolean = false;

  openbottom(){
    this.showBottom = !this.showBottom
  }

  showside: boolean = false;

  openside(){
    this.showside = !this.showside;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  opendashboard(): void {
    const dialogRef = this.dialog.open(DashboardComponent, {
      // width: '15000px',
      // height: '600px'
      panelClass: 'dashboardclass'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  

  openleft(){
    this.leftside = !this.leftside;
  }

  opensetup(){
    this.dialog.open(SetupComponent, {
      // width: '700px',
      height: '540px'
    })
  }


  sideObjects: boolean = true;

  openSideObjects(){
    this.sideObjects = !this.sideObjects;
  }

  objects: boolean = true;
  events: boolean = false;
  history: boolean = false;
  
  showObjects(){
    this.objects = true;
    this.events = false;
    this.history = false;
  }

  showevents(){
    this.events = true;
    this.objects = false;
    this.history = false;
  }

  showhistory(){
    this.history = true;
    this.objects = false;
    this.events = false;
  }
}
