import {
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatDialogConfig,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { NgModule } from '@angular/core';
const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  disableClose: true,
  hasBackdrop: true,
};
const Material_Modules = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
]

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG }
  ],
  exports: [...Material_Modules]
})
export class MaterialModule { }
