import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './assignment/success-alert/success-alert.component';
import { TwoWayBindingComponent } from './assignment/two-way-binding/two-way-binding.component';
import { DirectivesComponent } from './assignment/directives/directives.component';
import { GameControlComponent } from './assignment/bind-it/game-control/game-control.component';
import { OddComponent } from './assignment/bind-it/odd/odd.component';
import { EvenComponent } from './assignment/bind-it/even/even.component';
import { OnlyOddComponent } from './only-odd/only-odd.component';
import { BasicHighlightDirective } from './only-odd/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './only-odd/better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    OnlyOddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
