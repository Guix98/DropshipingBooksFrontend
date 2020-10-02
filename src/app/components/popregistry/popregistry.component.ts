import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-ngx-bootstrap',
  templateUrl: './popregistry.component.html',
  styleUrls: ['./popregistry.component.css']
})
export class AppComponent implements OnInit {

  
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }
  // convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    
    }
  ngOnInit(): void {
  this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

}