import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //default tc
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //tc1
  /*it('Default value of quantity should be 1', () => {
    let qtyObj = fixture.nativeElement.querySelector('#qty');
    qtyObj.dispatchEvent(new Event('input'));
    expect(qtyObj.value).toBe('1');
  });

  //tc2
  /*it('Result value should be empty initially', () => {
    let resultObj = fixture.nativeElement.querySelector('#total');
    resultObj.dispatchEvent(new Event('input'));
    expect(resultObj.value).toBe('');
  });

  //tc3
  it('Checking result value by calling method calc()', () => {
    component.calc();
    expect(component.result.toString()).toBe(NaN.toString());
  });

  //tc4
  it('Checking result value by calling method calc() with NaN values', () => {
    component.qty = NaN
    //component.unit_price = NaN
    component.calc();
    expect(component.result.toString()).toBe(NaN.toString());
  });*/

  //tc5
  it('Checking two way binding template -> property', () => {
    let priceObj = fixture.nativeElement.querySelector("#unit_price");
    priceObj.value = "1000";
    console.log("Query Object ----------->" , priceObj)
    //priceObj.dispatchEvent(new Event('input'));
    console.log(priceObj.value);
    console.log(component.unit_price);
    expect(priceObj.value).toBe(component.unit_price);
  });


});
