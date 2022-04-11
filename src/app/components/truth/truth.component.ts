import { Component, OnInit } from '@angular/core';
import { TruthService } from 'src/app/services/truth.service';

@Component({
  selector: 'app-truth',
  templateUrl: './truth.component.html',
  styleUrls: ['./truth.component.css']
})
export class TruthComponent implements OnInit {

  truths !: any;

  constructor( private api : TruthService) { }

  ngOnInit(): void {
    this.api.getTruth().subscribe({
      next:(res) => {
        this.truths = res;
      },
      error:(err) => {
        alert('Error obtaining truth')
      }
    })
  }

}
