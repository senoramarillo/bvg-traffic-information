import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { metaReducers, reducers } from '@app/store/reducers';

import { LineSummaryComponent } from '@line-summary/line-summary.component';
import { LinesComponent } from './lines.component';
import { DateSelectorComponent } from '@date-selector/date-selector.component';
import { undergroundLines, tramLines, busLines } from '@config/bvg';

describe('LinesComponent', () => {
  let component: LinesComponent;
  let fixture: ComponentFixture<LinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        ReactiveFormsModule
      ],
      declarations: [
        LinesComponent,
        LineSummaryComponent,
        DateSelectorComponent
      ]
    })
    .compileComponents();
  }));

  it('should set the correct u-bahn lines based on the type', () => {
    fixture = TestBed.createComponent(LinesComponent);
    component = fixture.componentInstance;
    component.type = 'underground';
    fixture.detectChanges();

    expect(component.lines).toEqual(undergroundLines.map(entry => entry.line));
  });

  it('should set the correct tram lines based on the type', () => {
    fixture = TestBed.createComponent(LinesComponent);
    component = fixture.componentInstance;
    component.type = 'tram';
    fixture.detectChanges();

    expect(component.lines).toEqual(tramLines);
  });

  it('should set the correct bus lines based on the type', () => {
    fixture = TestBed.createComponent(LinesComponent);
    component = fixture.componentInstance;
    component.type = 'bus';
    fixture.detectChanges();

    expect(component.lines).toEqual(busLines);
  });

});