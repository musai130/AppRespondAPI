import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IUsersData} from "../../models/users";
import {FormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {UsersPageComponent} from "../../pages/users/users-page.component";
import {NgIf} from "@angular/common";


@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  imports: [
    FormsModule,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  standalone: true
})
export class UsersComponent {
  @Input() user!: IUsersData
  @Output() onChanged = new EventEmitter<ChangeData>();
  change(increased:boolean, user: IUsersData){
    this.onChanged.emit({increased, user});
  }
  constructor(private appComponent: UsersPageComponent) {

  }
  deleteUser() {
    this.appComponent.deleteUser(this.user);
  }
}

export interface ChangeData { // Define an interface for clearer event data
  increased: boolean;
  user: IUsersData // Optional data array
}
