import { Component } from '@angular/core';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CompanyProfileComponent,
    UserProfileComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  profileType: string = 'profile';
}
