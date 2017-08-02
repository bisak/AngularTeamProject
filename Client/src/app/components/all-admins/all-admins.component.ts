import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-all-admins',
  templateUrl: './all-admins.component.html',
  styleUrls: ['./all-admins.component.css']
})
export class AllAdminsComponent implements OnInit {

  users;

  constructor(private usersService: UsersService, private toastService: ToastService) {
  }

  ngOnInit() {
    this.usersService.getAllAdmins().then((response) => {
      const { data } = response;
      this.users = data;
    }).catch((error) => {
      console.log(error);
      this.toastService.errorToast('An error occured.');
    });
  }

}
