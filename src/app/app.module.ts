import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Pipe1Pipe } from '';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comps/comp1/comp1.component';
import { Comp2Component } from './comps/comp2/comp2.component';
import { PipeBigPipe } from './pipes/pipe-big.pipe';
import { PipeDatePipe } from './pipes/pipe-date.pipe';
import { PipeAllBigPipe } from './pipes/pipe-all-big.pipe';
import { PipeAllLowPipe } from './pipes/pipe-all-low.pipe';
import { PipeSayHelloPipe } from './pipes/pipe-say-hello.pipe';
import { PipeIncrPipe } from './pipes/pipe-incr.pipe';
import { PipeDecrPipe } from './pipes/pipe-decr.pipe';
import { PipeTopTenPipe } from './pipes/pipe-top-ten.pipe';
import { PipeFilterPipe } from './pipes/pipe-filter.pipe';
import { PipeMaxValPipe } from './pipes/pipe-max-val.pipe';
import { PipeMinValPipe } from './pipes/pipe-min-val.pipe';
import { FormsModule } from '@angular/forms';
import { ColorHoverDirective } from './directivs/color-hover.directive';
import { VisibilityDirective } from './directivs/visibility.directive';
import { OpacityDirective } from './directivs/opacity.directive';
import { LoggerDirective } from './directivs/logger.directive';
import { ChangeDirective } from './directivs/change.directive';
// import { SelectService } from './servicees/select.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatModule } from './modules/material-module';
import { Pipe1Pipe } from './pipes/pipe1.pipe';
// import { SelectCurrService } from './servicees/select-curr.service';



@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    PipeBigPipe,
    PipeDatePipe,
    PipeAllBigPipe,
    PipeAllLowPipe,
    PipeSayHelloPipe,
    PipeIncrPipe,
    PipeDecrPipe,
    PipeTopTenPipe,
    PipeFilterPipe,
    PipeMaxValPipe,
    PipeMinValPipe,
    ColorHoverDirective,
    VisibilityDirective,
    OpacityDirective,
    LoggerDirective,
    ChangeDirective,
    Pipe1Pipe
    // SelectService,
    // SelectCurrService
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
