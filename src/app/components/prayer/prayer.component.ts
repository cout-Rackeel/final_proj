import { Component, ElementRef, OnInit } from '@angular/core';
import { PrayerFormComponent } from '../prayer-form/prayer-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { faDeleteLeft, faEdit, faPray, faTrash } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css'],
  providers:[ApiService]
})
export class PrayerComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
    private api : ApiService,
    private el :ElementRef
    ) { }

  ngOnInit(): void {
    this.retrievePrayers();
  }

  //declarations
  prayerRecords !:any;
  praying = faPray;
  edit = faEdit;
  delete = faTrash


  openDialog(){
    this.dialog.open(PrayerFormComponent,{
      width:"60%",
      minHeight:"300px"
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.retrievePrayers();
      }
    })
  }

  retrievePrayers(){
    return this.api.getPrayers().subscribe({
      next:(res) => {
        this.prayerRecords = res;
        console.log(this.prayerRecords);
      },
      error:(err) => {
        alert('Error retrieving prayers')
      }
    })
  }

  deleteRequest(id:number){
    return this.api.deletePrayer(id).subscribe({
      next:(res) => {
        alert('prayer deleted')
        this.retrievePrayers()
      },
      error:(err) => {

      }
    })
  }

  highlightPrayer(prayer:any){

    prayer.status = !prayer.status;
    if(prayer.status){
      return alert('Commited to Prayer')
    }else{
      return alert('Not Commited to Prayer')
    }

  }



}
