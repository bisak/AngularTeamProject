import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.css']
})
export class ModalConfirmComponent implements OnInit {

  @Input() confirmModal;
  @Input() text: string;
  @Output() confirm = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<boolean>();

  constructor() {
  }

  _cancel() {
    this.cancel.emit(true);
  }

  _confirm() {
    this.confirm.emit(true);
  }

  ngOnInit() {
  }

}
