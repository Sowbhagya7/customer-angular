import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaecustomerdetailsComponent } from './updaecustomerdetails.component';

describe('UpdaecustomerdetailsComponent', () => {
  let component: UpdaecustomerdetailsComponent;
  let fixture: ComponentFixture<UpdaecustomerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaecustomerdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaecustomerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
