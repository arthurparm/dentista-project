import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HeroComponent } from './app/components/hero/hero.component';
import { Metodo5rComponent } from './app/components/metodo-5r/metodo-5r.component';
import { GaleriaResinaComponent } from './app/components/galeria-resina/galeria-resina.component';
import { PricingEbookComponent } from './app/components/pricing-ebook/pricing-ebook.component';
import { PublicoAlvoComponent } from './app/components/publico-alvo/publico-alvo.component';
import { AprendizadosComponent } from './app/components/aprendizados/aprendizados.component';
import { SobreAutorComponent } from './app/components/sobre-autor/sobre-autor.component';
import { DepoimentosComponent } from './app/components/depoimentos/depoimentos.component';
import { CtaFinalComponent } from './app/components/cta-final/cta-final.component';
import { FooterComponent } from './app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    Metodo5rComponent,
    GaleriaResinaComponent,
    PricingEbookComponent,
    PublicoAlvoComponent,
    AprendizadosComponent,
    SobreAutorComponent,
    DepoimentosComponent,
    CtaFinalComponent,
    FooterComponent,
  ],
  template: `
    <main>
      <app-hero />
      <app-metodo-5r />
      <app-galeria-resina />
      <app-cta-final />
      <app-publico-alvo />
      <app-aprendizados />
      <app-sobre-autor />
      <app-depoimentos />
      <app-pricing-ebook />
      <app-footer />
    </main>
  `,
  styles: [`
    main {
      display: block;
      overflow-x: hidden;
    }
  `],
})
export class App {}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
