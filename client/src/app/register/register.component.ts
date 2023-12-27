import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //@Input() usersFromHomeComponent: any; // to get data from Parent
  @Output() cancelRegister = new EventEmitter(); // to send data to Parent
  model: any = {}

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: response => {
        this.cancel();
      },
      error: error => console.log(error)

    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }


}
