import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule }                   from '@angular/http';
import { PaginationModule, TabsModule } from 'ngx-bootstrap';
import { AppRoutingModule }             from './appRouting.module';
import { AppComponent }                 from './app.component';
import { SidebarNavComponent }          from './sidebar_nav.component';
import { FiltersComponent }             from './filters.component';
import { RoverService }                 from './rover.service';
import { CuriosityRoverComponent }      from './rover_curiosity.component';
import { OpportunityRoverComponent }    from './rover_opportunity.component';
import { SpiritRoverComponent }         from './rover_spirit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    FiltersComponent,
    CuriosityRoverComponent,
    OpportunityRoverComponent,
    SpiritRoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [
    RoverService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
