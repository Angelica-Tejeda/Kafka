import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextViewEditorComponent } from './text-view-editor.component';

describe('TextViewEditorComponent', () => {
  let component: TextViewEditorComponent;
  let fixture: ComponentFixture<TextViewEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextViewEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextViewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
