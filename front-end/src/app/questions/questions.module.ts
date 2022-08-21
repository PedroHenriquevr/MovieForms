import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    RadioButtonModule,
    FormsModule,
  ],
})
export class QuestionsModule {}
