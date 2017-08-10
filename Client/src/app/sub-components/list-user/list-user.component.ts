import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';
import { UsersService } from '../../services/users.service';
import { ToastService } from '../../services/toast.service';
import { element } from 'protractor';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  @Input() user;
  @Input() isAddAdmin: boolean = false;
  @Input() isAllAdmins: boolean = false;
  @Input() isBanUser: boolean = false;

  @ViewChild('parentElement') element: ElementRef;

  confirmModal = new EventEmitter<string | MaterializeAction>();

  constructor(private userService: UsersService, private toastService: ToastService) {
  }

  ngOnInit() {
  }

  removeAdmin() {
    this.userService.removeAdmin(this.user.username).then((response) => {
      this.toastService.toast('Successfully removed admin.');
      this.element.nativeElement.remove();
      this.closeModal();
    }).catch((error) => {
      console.log(error);
      this.toastService.errorToast('An error occured.');
    });
  }

  addAdmin(){
    this.userService.addAdmin(this.user.username).then((response) => {
      this.toastService.toast('Successfully added admin.');
      this.element.nativeElement.remove();
      this.closeModal();
    }).catch((error) => {
      console.log(error);
      this.toastService.errorToast('An error occured.');
    });
  }

  banUser(){
    this.userService.banUser(this.user.username).then((response) => {
      this.toastService.toast('Successfully banned user.');
      this.element.nativeElement.remove();
      this.closeModal();
    }).catch((error) => {
      console.log(error);
      this.toastService.errorToast('An error occured.');
    });
  }

  closeModal() {
    this.confirmModal.emit({ action: 'modal', params: ['close'] });
  }

  openModal() {
    this.confirmModal.emit({ action: 'modal', params: ['open'] });
  }


}
