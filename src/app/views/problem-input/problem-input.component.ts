import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { ProblemService } from 'src/app/shared/providers/problem.service';

@Component({
    selector: 'problem-input',
    templateUrl: './problem-input.component.html',
    styleUrls: ['./problem-input.component.scss'],
})
export class ProblemInputComponent {

    problemForm: FormGroup;
    send_spinner = false;
    resultado: any;

    constructor(
        private formBuilder: FormBuilder,
        private problemService: ProblemService,
    ) {
        this.problemForm = this.formBuilder.group({
            parameters: ['', [Validators.required]],
            shopping_centers: ['', [Validators.required]],
            roads: ['', [Validators.required]],
        });
    }

    submit(){
        if (this.problemForm.valid) {
            const problem_values = this.problemForm.getRawValue();
            this.send_spinner = true;
            this.problemService.postSolution(problem_values).subscribe(
                result => {
                    this.send_spinner = false;
                    console.log(result);
                    this.resultado = 'El tiempo minimo de recorrido es: '+result.minimum_time;
                },
                error => {
                    this.send_spinner = false;
                    this.resultado = "Error en el procesamiento de datos."
                }
            );
        }
    }

}