import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child components (app-product-list)', () => {
    const childComponent = fixture.debugElement.query(By.css('app-product-list'));
    expect(childComponent).toBeTruthy();
  });


  //tc1
  it('should render all child components (app-product-list)', () => {
    const childComponents = fixture.debugElement.queryAll(By.css('app-product-list'));
    console.log(childComponents.length);
    expect(childComponents.length).toBe(component.productArr.length);
  });


  //tc2
  it('testing child component data (app-product-list)', () => {
    const childComponent = fixture.debugElement.query(By.css('app-product-list'));
    expect(childComponent.properties["item"][0]).toEqual(component.productArr[0]);
  });


  //tc3
  it('testing child component events removeprod()', () => {
    const childComponent = fixture.debugElement.query(By.css('app-product-list'));
    const pid = childComponent.properties["item"][0].pid;
    childComponent.triggerEventHandler('removeprod', pid)
    let index = component.productArr.findIndex((item: any) => item.deptno == pid);
    expect(index).toBe(-1);
  });

});
