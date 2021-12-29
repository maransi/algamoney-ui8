import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `<div class="ui-message ui-messages-error" *ngIf="temErro()">
      {{ text }}
    </div>`,
  styles: [`
    .ui-messages-error{
      margin: 0;
      margin-top: 4px;
    }`
  ]
})
export class MessageComponent implements OnInit {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  constructor() { }

  ngOnInit() {

  }

  temErro(): boolean{
    return this.control.hasError(this.error) && this.control.dirty;

  }
}
