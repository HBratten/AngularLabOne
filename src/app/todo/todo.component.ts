import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  constructor() {}

  choresList: Todo[] = [
    { task: "fold clothes", completed: false },
    { task: "put clothes in dresser", completed: false },
    { task: "relax", completed: true },
    { task: "try to pet cat", completed: false },
    { task: "pet dog", completed: false },
    { task: "be awesome", completed: true }
  ];

  ngOnInit() {}
}
