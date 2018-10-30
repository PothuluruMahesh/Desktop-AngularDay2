import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile-Group',
  templateUrl: './nested-group.component.html',
  styleUrls: ['./nested-group.component.css']
})
export class NestedGroupComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'mahesh',
      address: {
        street: '123 BTM Street'
      }
    });
  }
}