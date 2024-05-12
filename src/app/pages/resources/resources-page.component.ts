import {Component, OnInit} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {resources} from "../../data/resources";
import {IResource} from "../../models/resources";
import {ResourcesComponent} from "../../components/resources/resources.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  imports: [
    ResourcesComponent,
    NgForOf
  ],
  standalone: true
})

export class ResourcesPageComponent implements OnInit {
  constructor(private service: UsersService) {
  }
  url = 'https://reqres.in/api/unknown'
  resourceslist: IResource = resources
  ngOnInit(): void {
    this.loadUsersList()
  }
  loadUsersList(){
    this.service.getAll(this.url).subscribe( item => {
      this.resourceslist = item;
    })
  }
}
