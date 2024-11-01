// Suggested code may be subject to a license. Learn more: ~LicenseLog:2962748559.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:471356978.
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexViewComponent } from './pokedex-view.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PokedexViewComponent', () => {
  let component: PokedexViewComponent;
  let fixture: ComponentFixture<PokedexViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PokedexViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokedexViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
