import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-ban-user',
  templateUrl: './ban-user.component.html',
  styleUrls: ['./ban-user.component.css']
})
export class BanUserComponent implements OnInit {

  users;

  constructor(private usersService: UsersService, private toastService: ToastService) {
  }

  ngOnInit() {
    this.usersService.getAllUsers().then((response) => {
      let { data } = response;
      data = data.filter(user => !user.banned);
      this.users = data;
    }).catch((error) => {
      console.log(error);
      this.toastService.errorToast('An error occured.');
    });
  }


}
