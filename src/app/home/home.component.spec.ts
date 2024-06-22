import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  // sut (system under test)
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent post back when Enter key triggered filter search', () => {
    // given a keydown.enter event has occurred
    let e = new Event('keydown.enter');

    // and i would like to watch for a specific method to be called
    let spy = spyOn(e, 'preventDefault');

    // when filterResults is called
    component.filterResults("test", e);
    
    // i expect event.preventDefault to have been called, which prevents a post back to the server
    expect(spy).toHaveBeenCalled();
  });
});
