import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

declare var $: any

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  
  firstValue: string = '';
  lastValue: string = '';
  firstTemp: string = '';
  lastTemp: string = '';
  modalMessage: string = '';
  guests: Observable<any[]>;
  formValid: boolean = false;

  constructor(public db: AngularFireDatabase) {
    this.guests = db.list('guests').valueChanges();
  }

  formValidation(t: string) :boolean {
    let regex = /[^a-zA-Z]/
    let hasNum = regex.test(t);
    return hasNum;
  }

  ngOnInit() {
  }

  onSubmit() {
    if ((this.firstValue.length > 0 && this.firstValue != null) && (this.lastValue.length > 0 && this.lastValue != null))
    {
      if (!this.formValidation(this.firstValue) && !this.formValidation(this.lastValue))
      {
        this.formValid = true;
        this.firstTemp = this.firstValue;
        this.lastTemp = this.lastValue;
      }
      else
      {
        this.modalMessage = "No numbers or special characters."
      $("#formModal").modal('show');
      }
    }
    else 
    { 
      this.modalMessage = "Please fill out both first name and last name."
      $("#formModal").modal('show');
    }

    if(this.formValid)
    {
      this.db.list('guests').push({ content: this.firstValue + " " + this.lastValue});
      this.modalMessage = this.firstTemp + " " + this.lastTemp + " was added.";
      $("#formModal").modal('show');
      this.firstValue = '';
      this.lastValue = '';
      this.formValid = false;
    }
  }
}
