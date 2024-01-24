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

  deleteTask() {}

  cleanInput(field: any) {
    field.value = '';
  }
}
