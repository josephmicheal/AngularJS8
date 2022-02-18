import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  @Output()
  serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  @Output("bpCreated")
  blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('newServerName', {static: true}) newServerNameInput:ElementRef;

  onAddServer(newServerContent:HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.newServerNameInput.nativeElement.value,
      serverContent: newServerContent.value
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
