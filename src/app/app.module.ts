import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { ArticleComponent } from './componentes/article/article.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { Article2Component } from './componentes/article2/article2.component';
import { Article3Component } from './componentes/article3/article3.component';
import { Article4Component } from './componentes/article4/article4.component';
import { Article5Component } from './componentes/article5/article5.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { FilosoficoComponent } from './paginas/filosofico/filosofico.component';
import { CienciaComponent } from './paginas/ciencia/ciencia.component';
import { TecnologicoComponent } from './paginas/tecnologico/tecnologico.component';
import { ServicioComponent } from './paginas/servicio/servicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { Formulario2Component } from './componentes/formulario2/formulario2.component';
import { Formulario3Component } from './componentes/formulario3/formulario3.component';
import { Form1Component } from './paginas/form1/form1.component';
import { Form2Component } from './paginas/form2/form2.component';
import { Form3Component } from './paginas/form3/form3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    ArticleComponent,
    FooterComponent,
    Article2Component,
    Article3Component,
    Article4Component,
    Article5Component,
    PrincipalComponent,
    FilosoficoComponent,
    CienciaComponent,
    TecnologicoComponent,
    ServicioComponent,
    FormularioComponent,
    Formulario2Component,
    Formulario3Component,
    Form1Component,
    Form2Component,
    Form3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
