import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FormsModule, NgModel} from "@angular/forms";
import {IUsersData} from "../../models/users";
import {UsersPageComponent} from "../../pages/users/users-page.component";
import {MoreInfoComponent} from "../moreinfo/more-info.component";

@Component({
  selector: "app-edit-form",
  templateUrl: "./edit-form.component.html",
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MoreInfoComponent,
  ],
  standalone: true
})
export class EditFormComponent {
  @Input() user!: IUsersData
  @ViewChild('firs_name') first_name!: ElementRef<HTMLInputElement>;
  @ViewChild('last_name') last_name!: ElementRef<HTMLInputElement>;
  @ViewChild('email') email!: ElementRef<HTMLInputElement>;
  @Output() onChangedCancel = new EventEmitter<boolean>();
  change(increased:boolean) {
    this.onChangedCancel.emit(increased);

  }
  constructor(private appComponent: UsersPageComponent) {

  }
  editUser()  {
    this.user.first_name = this.first_name.nativeElement.value
    this.user.last_name = this.last_name.nativeElement.value
    this.user.email = this.email.nativeElement.value
    this.appComponent.editUser(this.user);
  }
}
