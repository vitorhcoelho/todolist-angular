import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public enableSpinner: boolean = true;
  public taskList: {
    task: string;
    checked: boolean;
  }[] = [];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.enableSpinner = false;
  }

  addTask(task: string) {
    if (task !== '') this.taskList.push({ task: task, checked: false });
  }

  deleteTask(taskDeleted: { task: string; checked: boolean }) {
    this.taskList = this.taskList.filter((item) => item !== taskDeleted);
  }

  cleanInput(field: any) {
    field.value = '';
  }
}
