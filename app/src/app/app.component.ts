import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'To Do List em Angular'
  taskInput: string = ''
  allTasks: { text: string, id: string }[] = []
  getValue(value: string): void {
    this.taskInput = value
  }
  createTask(): void {
    if (this.taskInput.length) {
      const newTask = {
        text: this.taskInput,
        id: String(new Date().getTime())
      }
      this.allTasks = [...this.allTasks, newTask]
    } else {
      window.alert('escreva uma task')
    }
  }
  deleteTask(id: string): void {
    const newListOfTasks = this.allTasks.filter((task) => task.id !== id)

    this.allTasks = newListOfTasks
  }
  changeStatusTask(event: Event) {
    const spanElement = event.target as HTMLElement
    spanElement.classList.toggle('selecionado')
  }
}
