import { Component } from "@angular/core";
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    toDo: any
    toDoData: any[] = [];
    editedData: any;
    editedIndex: any;
    data:any;
    addData() {
        this.toDoData.push(this.toDo);
    }

    delet(i: number) {
        this.toDoData.splice(i, 1)
    }
    edit(getData: any, i: any) {
        this.editedData = getData
        this.editedIndex = i;
        this.data= getData;
    }
    saveChanges() {
        this.toDoData[this.editedIndex] = this.editedData
        this.addData.length
    }

}