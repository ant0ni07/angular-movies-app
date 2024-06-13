import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/data/model/Feedback';
import { emailDomainValidator } from 'src/app/validators/email.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{

  // feedback: Feedback = new Feedback('','',2,'','');

  feedbackForm!: FormGroup;

  /**
   *
   */
  constructor() {
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl ('', [Validators.required, Validators.email,
        emailDomainValidator('@info.com')
      ]),
      phoneNumber: new FormGroup('', [Validators.required]),
      rateExperience: new FormGroup(8, [Validators.min(0), Validators.max(10)]),
      feedbackTitle: new FormGroup('', [Validators.required]),
      feedback: new FormGroup('',[Validators.required])

    });
    
  }
  submitFeedback(){
    
    console.log('Feedback form p sumbit' , this.feedbackForm);
    
  }
  ngOnInit(): void {

    
  }

}
