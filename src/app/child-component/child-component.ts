import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css',
})
export class ChildComponent {

@Input() messageFromParent !:string;
@Output() messagetoParent = new EventEmitter<string>();

sendMsg(){
  this.messagetoParent.emit("Hello From Child to Parent");
}


}
