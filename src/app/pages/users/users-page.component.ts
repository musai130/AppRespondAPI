import {users_data} from "../../data/users";
import {NgForOf, NgIf} from "@angular/common";
import {ChangeData, UsersComponent} from "../../components/users/users.component";
import {IUsers, IUsersData} from "../../models/users";
import {UsersService} from "../../services/users.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {EditFormComponent} from "../../components/edit/edit-form.component";


@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, NgForOf, RouterLink, RouterLink, EditFormComponent, NgIf],
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent implements OnInit  {
  title = 'app-users-page'
  url = 'https://reqres.in/api/users?page=2'
  url_user = 'https://reqres.in/api/users/'
  userslist: IUsers = users_data
  flag = true
  userform!: IUsersData
  onChanged(data: ChangeData) {
    this.flag = !data.increased;
    this.userform = data.user;
  }

  onChangedCancel(increased: boolean) {
    this.flag = !increased;
  }
  constructor(private service: UsersService) {
  }
  ngOnInit(): void {
    this.loadUsersList()
  }
  deleteUser(user : IUsersData) {
    this.service.deleteUser(user.id, this.url_user).subscribe( item => {
        let getIndex : number = this.userslist.data.indexOf(user)
        this.userslist.data.splice(getIndex, 1)
    })
  }

  editUser(user: IUsersData) {
    this.service.editUser(user.id, user, this.url_user).subscribe( item => {
      this.flag = true;
    })
  }

  loadUsersList(){
    this.service.getAll(this.url).subscribe( item => {
      this.userslist = item;
    })
  }
}
