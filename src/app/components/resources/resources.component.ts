import {Component, Input} from "@angular/core";
import {IResourceData} from "../../models/resources";
import {NgStyle} from "@angular/common";

@Component({
  selector: "app-resources",
  templateUrl: "./resources.component.html",
  standalone: true,
  imports: [
    NgStyle
  ]
})
export class ResourcesComponent {
  @Input() resources!: IResourceData;
}
