import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { faWarning } from '@fortawesome/free-solid-svg-icons';
import { MatDialogRef } from '@angular/material/dialog';
import { PrayerComponent } from '../prayer/prayer.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-prayer-form',
  templateUrl: './prayer-form.component.html',
  styleUrls: ['./prayer-form.component.css'],
  providers:[ApiService]
})
export class PrayerFormComponent implements OnInit {
  Todaydate: Date = new Date();
  prayerForm !: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef : MatDialogRef<PrayerComponent>,
    private api : ApiService
    ) {}

  ngOnInit(): void {

    this.prayerForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      title: new FormControl('',[Validators.required]),
      date: new FormControl(new Date(),[]),
      prayerRequest: new FormControl('',[Validators.required]),
      status: new FormControl('',[]),
    });

  }

  error = faWarning




  get title() {return this.prayerForm.get('title');}
  get date() { return this.prayerForm.get('date');}
  get name() { return this.prayerForm.get('name');}
  get prayerRequest() { return this.prayerForm.get('prayerRequest');}


  addPrayer(){
    if(this.prayerForm.valid){
    this.api.postPrayer(this.prayerForm.value).subscribe({
      next:(res:any) => {
        alert('Prayer request sent');
        console.log(this.prayerForm);
        this.prayerForm.reset();
        this.dialogRef.close('save');
      },
      error:(err:any) => {
        alert('Sorry had trouble submitting prayer request')
      }
    })
  }

  }


}
