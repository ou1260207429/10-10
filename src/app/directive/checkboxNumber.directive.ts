import { Directive, ElementRef, HostListener, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd';

@Directive({
    selector: '[checkboxNumber]'
})
export class CheckboxNumberDirective {

    constructor(private model: NgControl) { }

    value = 0;
    @Input() set checkboxNumber(v) {
        this.value = v;
        this.model.valueAccessor.writeValue(this.getValue);
    }
    @Output() public checkboxNumberChange = new EventEmitter();
    @Output() public change = new EventEmitter();

    @HostListener('ngModelChange', ['$event']) onModelChange(v) {
        if (v == true) {
            this.value = 1;
        } else {
            this.value = 0;
        }
        this.checkboxNumberChange.emit(this.value);
        this.change.emit(this.value);
    }

    @HostBinding('attr.ngModel') get getValue() {
        return this.value == 1;
    }

}