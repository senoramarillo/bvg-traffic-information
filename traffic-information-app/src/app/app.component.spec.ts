import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

import { metaReducers, reducers} from '@app/store/reducers';

import { AppComponent } from './app.component';
import { DashboardComponent } from '@dashboard/dashboard.component';
import { HeaderComponent } from '@header/header.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Traffic Status'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector('h1').textContent).toEqual('Traffic Status');
  });

});
