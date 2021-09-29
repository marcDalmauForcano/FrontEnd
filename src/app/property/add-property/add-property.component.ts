import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
// import { IProperty } from 'src/app/model/iproperty';
// import { IProperty } from '../IProperty.interface';
// import { IPropertyBase } from '../../model/ipropertybase';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertForm : NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  // will come from master
  propertyTypes : Array<string> = ['House','Apartment','Duplex'];
  furnishTypes : Array<string> = ['Fully','Semi','Unfurnished'];

  // propertyView : IPropertyBase = {
  //   Id: null,
  //   SellRent: null,
  //   Name: "",
  //   Price : null,
  //   PType : "",
  //   FType : null,
  //   BHK : null,
  //   BuildArea : null,
  //   City : null,
  //   RTM : null
  // };

  propertyView : IProperty = {
    Id : null,
    Name : '',
    Price : null,
    SellRent : null,
    Type : null
  };

  constructor(private router: Router) { }

  ngOnInit() {
    // setTimeout(()=> {
    //   this.addPropertForm.controls['Name'].setValue("Default Value");
    // });
  }

  onBack(){
    this.router.navigate(['/']);
  }

  // onSubmit(Form: NgForm){
  onSubmit(){
    console.log('Congrats, form Submitted');
    console.log(this.addPropertForm);
  }

  selectTab(tabId: number) {
      this.formTabs.tabs[tabId].active = true;
  }
}
