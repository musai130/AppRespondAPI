import {Component, Input} from "@angular/core";
import {IUsersData} from "../../models/users";


@Component({
  selector: "app-more-info",
  templateUrl: "./more-info.component.html",
  standalone: true
})

export class MoreInfoComponent {
  @Input() user!: IUsersData
}
