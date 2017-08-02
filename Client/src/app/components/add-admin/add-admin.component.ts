import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  users;

  constructor(private usersService: UsersService, private toastService: ToastService) {
  }

  ngOnInit() {
    this.usersService.getAllNonAdmins().then((response) => {
      let { data } = response;
      this.users = data;
    }).catch((error) => {
      console.log(error);
      this.toastService.errorToast('An error occured.');
    });
  }

}
