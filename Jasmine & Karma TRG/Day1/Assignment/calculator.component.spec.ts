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
  it('Default value of quantity should be 1', () => {
    let qty = component.quantity;
    expect(qty).toBe(1);
  });

  //tc2
  it('Result value should be empty initially', () => {
    let resultObj = fixture.nativeElement.querySelector('span');
    expect(resultObj.textContent).toBe('');
  });

  
  //tc3
  it('Checking result value by calling method calc()', () => {
    component.price = 10;
    component.quantity = 2;
    component.calc();
    
    expect(component.result).toBe("Total Amount : 20");
  });

  
  //tc4
  it('Checking result value by calling method calc() with NaN values', () => {
    component.quantity = "Hello";
    component.quantity = "World";
    
    component.calc();
    expect(component.result).toBe("Total Amount : NaN");
  });

  
  //tc5
  it('Checking two way binding template -> property', () => {
    let inputelements = fixture.nativeElement.querySelectorAll("input");
    inputelements[1].value = 1000
    inputelements[1].dispatchEvent(new Event('input'));
    expect(inputelements[1].value).toBe(component.price);
  });

  //tc6
  it('Checking two way binding property -> template', () => {

    component.price = 2000;
    let inputelements = fixture.nativeElement.querySelectorAll("input");
    inputelements[1].dispatchEvent(new Event('input'));
    expect(inputelements[1].value).toBe(component.price);
  });

  //tc6
  it('Checking result after calc() ', () => {

    let inputelements = fixture.nativeElement.querySelectorAll("input");

    inputelements[1].value = 10;
    inputelements[1].dispatchEvent(new Event('input'));

    inputelements[2].value = 10;
    inputelements[2].dispatchEvent(new Event('input'));

    let button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    let result = fixture.nativeElement.querySelector("span");

    expect(result.textContent).toBe("Total Amount : 100");

  });


});
