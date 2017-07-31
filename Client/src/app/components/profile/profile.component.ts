import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData;
  username;

  constructor(private profileService: ProfileService, private route: ActivatedRoute, private toastService: ToastService) {
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.profileService.getProfile(this.username).then((response) => {
      this.getProfileSuccess(response.data);
    }).catch((error) => {
      this.toastService.errorToast('An error occured');
    });
  }

  getProfileSuccess(data) {
    this.profileData = data;
  }

}
