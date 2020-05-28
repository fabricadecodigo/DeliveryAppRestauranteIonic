import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-container',
  templateUrl: './validation-container.component.html',
  styleUrls: ['./validation-container.component.scss'],
})
export class ValidationContainerComponent implements OnInit {

  @Input()
  control: FormControl;

  constructor() { }

  ngOnInit() { }

}
