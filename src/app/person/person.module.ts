import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { PruneComponent } from './prune/prune.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ProfileComponent, PruneComponent],
  exports:[ProfileComponent,PruneComponent]
})
export class PersonModule { }
