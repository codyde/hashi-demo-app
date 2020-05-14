import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMeshComponent } from './service-mesh.component';

describe('ServiceMeshComponent', () => {
  let component: ServiceMeshComponent;
  let fixture: ComponentFixture<ServiceMeshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMeshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
