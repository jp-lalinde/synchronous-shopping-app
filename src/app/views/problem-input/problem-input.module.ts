import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProblemInputComponent } from './problem-input.component';
import {MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: ProblemInputComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProblemInputComponent
    ]
})
export class ProblemInputModule { }