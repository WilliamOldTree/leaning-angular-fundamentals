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

  // Sugestão: renomear para addTask (singular) para consistência com 'task'
  // e corrigir o parâmetro para newTaskTitle (singular 't')
  public addTasks (newTaskTittle: string):void{
    const trimmedTitle = newTaskTittle.trim(); // Boa prática: trim antes de usar
    if (trimmedTitle)
    {
      // Corrigido: chama .update() no signal 'task'
      this.task.update(currentTasks => [...currentTasks, trimmedTitle]);
    }
  }
}
