import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'prune',
  templateUrl: './prune.component.html',
  styleUrls: ['./prune.component.scss']
})
export class PruneComponent implements OnInit {
  @Output() onSubmitted:EventEmitter<any> = new EventEmitter();
  @Output() onCancel:EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  formSubmit(newPerson){
    this.onSubmitted.emit(newPerson);
  }
  formCancel(){
    this.onCancel.emit();
    
  }

}
