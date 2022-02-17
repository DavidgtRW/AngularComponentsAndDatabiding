import { Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges, 
  DoCheck, 
  AfterContentChecked, 
  AfterContentInit, 
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild, ElementRef,
  ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements OnInit, 
OnChanges, DoCheck, AfterContentChecked, AfterContentInit,
AfterViewChecked, AfterViewInit, OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static:true}) heading: ElementRef;
  @ContentChild('contentPharagrapph', {static:true}) pharagraph: ElementRef;

  constructor() { 
    console.log('constrcutor called');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngInInit called');
    console.log('Text content is: '+this.heading.nativeElement.textContent);
    console.log('Text Content of phraragraph: '+this.pharagraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDocheck called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log('Text Content of phraragraph: '+this.pharagraph.nativeElement.textContent);
  }
  

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log('Text content is: '+this.heading.nativeElement.textContent);
    
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }

}
