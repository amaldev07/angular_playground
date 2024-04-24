import { Directive, ElementRef, HostListener, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';


@Directive({
  selector: '[appCurrencyInput]',
  providers: [CurrencyPipe]
})
@Injectable({
  providedIn: 'root'
})
export class CurrencyInputDirective {
  constructor(
    private el: ElementRef<HTMLInputElement>,
    private control: NgControl,
    private currencyPipe: CurrencyPipe
  ) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const transformedValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    
    if (!isNaN(transformedValue)) {
      this.control.control?.setValue(transformedValue, { emitEvent: false });
      const formattedCurrency = this.currencyPipe.transform(transformedValue, 'USD', 'symbol', '1.2-2');
      this.el.nativeElement.value = formattedCurrency !== null ? formattedCurrency : '';
    } else {
      this.el.nativeElement.value = ''; // Clear the input if transformation fails
    }
  }
}
