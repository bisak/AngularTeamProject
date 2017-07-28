import { Component, OnInit } from '@angular/core';

import { AuthHelperService } from '../../services/auth-helper.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  profilePicUrl: string;
  fullName: string;
  routerLinkOpts: object = { exact: true };
  userId: string;

  constructor(public authHelperService: AuthHelperService,
              private router: Router,
              private toastService: ToastService) {
  }

  ngOnInit() {
    const decodedToken = this.authHelperService.getDecodedAuthToken()
    if (decodedToken) {
      this.fullName = `${decodedToken.firstName} ${decodedToken.lastName}`;
    }

    this.username = this.authHelperService.getUsernameFromToken();
    this.userId = this.authHelperService.getUserIdFromToken();

    this.authHelperService.loginAnnounced.subscribe(data => {
      const decToken = this.authHelperService.getDecodedAuthToken();
      this.username = this.authHelperService.getUsernameFromToken();
      this.userId = this.authHelperService.getUserIdFromToken();
    });
  }

  onLogoutClick() {
    this.authHelperService.logout();
    this.toastService.toast('Logged out.');
    this.router.navigate(['/']);
    return false;
  }

}
