import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: IconButtonComponent;
  let fixture: ComponentFixture<IconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconButtonComponent],
    });
    fixture = TestBed.createComponent(IconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("test_random_icon_emitted", () => {
    const component = new IconButtonComponent();
    spyOn(component.randomIconSelected, 'emit');
    component.icons = ['test-icon'];
    component.showRandomIcon();
    setTimeout(() => {
      expect(component.randomIconSelected.emit).toHaveBeenCalledWith('test-icon');
    }, 3000);
  });

  it("test_show_random_icon", () => {
    const component = new IconButtonComponent();
    spyOn(component, 'getRandomIcon').and.returnValue('test-icon');
    spyOn(component.randomIconSelected, 'emit');
    component.showRandomIcon();
    expect(component.randomIcon).toBeUndefined();
    setTimeout(() => {
      expect(component.randomIcon).toBe('test-icon');
      expect(component.getRandomIcon).toHaveBeenCalled();
      expect(component.randomIconSelected.emit).toHaveBeenCalledWith('test-icon');
    }, 3000);
  });

  it("test_initial_icon_displayed", () => {
    const component = new IconButtonComponent();
    component.initialIcon = "fas fa-flag";
    expect(component.initialIcon).toBe("fas fa-flag");
  });

  it("test_empty_icons_array", () => {
    const component = new IconButtonComponent();
    component.icons = [];
    spyOn(component, 'getRandomIcon').and.returnValue('');
    component.showRandomIcon();
    expect(component.randomIcon).toBeUndefined();
  });

  it("test_empty_icons_array", () => {
    const component = new IconButtonComponent();
    component.icons = [];
    expect(component.getRandomIcon()).toBeUndefined();
  });

  it("test_initial_icon_undefined", () => {
    const component = new IconButtonComponent();
    expect(component.initialIcon).toBeUndefined();
  });

  it("test_get_random_icon_returns_undefined", () => {
    const component = new IconButtonComponent();
    component.icons = ['test-icon'];
    spyOn(Math, 'random').and.returnValue(1);
    const randomIcon = component.getRandomIcon();
    expect(randomIcon).toBeUndefined();
  });
});
