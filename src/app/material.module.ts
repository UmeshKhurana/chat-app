import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,MatIconModule,MatInputModule,MatRadioModule,MatSelectModule,MatCardModule,MatButtonModule,MatTabsModule,MatBadgeModule } from '@angular/material';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule
    
  ],
  exports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule
    
  ]

})
export class MaterialModule { }
