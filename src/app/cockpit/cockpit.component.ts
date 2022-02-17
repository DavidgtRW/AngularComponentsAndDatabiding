import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //Line below is: With Angular 8 should be line below since we'll also
  //use the selected element in ngOnInit.
  //@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
  //If you DON'T use the selected element in ngOnInit, set static: false instead.

  //Line below is: With Angular 8+ should be line below since we'll also
  //use the selected element in ngOnInit.
  //@ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  //If you DON'T use the selected element in ngOnInit, set static: false instead.
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output( 'bpCreated' ) blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServer() {
  //   console.log("Kindred1.1");
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
  //   console.log("Kindred1.1.1");
  // }

  onAddServer(nameInput: HTMLInputElement) {
    
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  // onAddBlueprint() {
  //   console.log("Kindred1.2");
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
  //   console.log("Kindred1.1.2");
  // }

  onAddBlueprint(nameInput: HTMLInputElement) {
    console.log("Kindred1.2", nameInput.value);
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
