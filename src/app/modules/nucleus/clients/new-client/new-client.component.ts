import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {

  newCountryForm: FormGroup;
  countryForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;

  // saving states
  protected countyModeState: number = -1;
  protected cityModeState: number = -1;
  protected addressModeState: number = -1;

  // protect after creating or select
  protected createdCountry: boolean = false;

  // countries
  protected countries = [];

  constructor(
    private fb: FormBuilder,
    private clientService: ClientService,
    ) {
      this.buildForm();
  }
  selectedItemFormControl = new FormControl();
  ngOnInit() {
    console.log(3)
    this.fetchData();
  }

  buildForm(): void {
    this.newCountryForm = this.fb.group({
      name: ['', Validators.required],
      code: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3)]]
    });
    console.log(this.newCountryForm)
    this.countryForm = this.fb.group({
      id: ['', Validators.required],
    });
    console.log(this.countryForm)
    this.secondForm = this.fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: ['', Validators.required],
    });
  }

  test = 2;

  fetchData(): void {
    this.clientService.getCountries()
      .subscribe(
        data => {
          console.log(data);
          this.countries = data;
          console.log(this.countries)
        }
      )
  }

  // segment representing country, city, address
  // mode representing 0 - new , 1 - exisiting
  private flip(segment: string, mode: number) {
    switch(segment) {
      case 'COUNTRY':
        if(!this.createdCountry) {
          if(this.countyModeState !== mode) 
            this.countyModeState = mode === 0 ? 0 : 1;
          else
            this.countyModeState = -1;
        } 
      break;
      case 'CITY':
        if(this.cityModeState !== mode)
          this.cityModeState = mode === 0 ? 0 : 1;
        else 
          this.cityModeState = -1;
      break;
      case 'ADDRESS':
        if(this.addressModeState !== mode)
          this.addressModeState = mode === 0 ? 0 : 1;
        else 
          this.addressModeState = -1;
      break;
    }
  }

  addNewCountry() {
    console.log(this.newCountryForm.value)
    this.createdCountry = true;
    this.newCountryForm.disable();
  }

  setCountry() {
    console.log(this.countryForm.value)
    this.createdCountry = true;
    this.countryForm.disable();
  }


  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }
}
