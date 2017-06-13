import { Component } from '@angular/core';
import {Input,Output } from '@angular/core';
import { FieldBase } from './field-base';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId:module.id,
    selector: 'field',
    templateUrl: 'field.component.html',
    styleUrls:['field.component.css']
})

export class FieldComponent  {
    
    @Input() field:FieldBase<any>;
    @Input()  form:FormGroup;
    constructor() { }

    get isValid(){
        return this.form.controls[this.field.key].valid;
    }

    get isEmpty(){
        let errors = this.form.controls[this.field.key].errors||{};
        return errors['empty'];
    }
}