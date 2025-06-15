import { Component , signal} from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list.html',
  styleUrl: './to-do-list.css'
})
export class ToDoList {

  public task = signal<string[]>([]);

  public tasks (newTaskTittle: string):void{
    if (newTaskTittle.trim())
    {
      this.task.update(currentTasks => [...currentTasks, newTaskTittle]);
    }
  }
}

