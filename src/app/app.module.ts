import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HTTP Interceptor
import { HttpInterceptorService } from './services/httpInterceptor/http-interceptor.service';

// Pages import
import { HomeComponent } from './pages/home/home.component';
import { CoinsListComponent } from './pages/coins-list/coins-list.component';
import { ConverterComponent } from './pages/converter/converter.component';
import { HistoryComponent } from './pages/history/history.component';

// Components import
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';
import { FooterComponent } from './components/footer/footer.component';
import { HistoryTableComponent } from './components/history-table/history-table.component';
import { HistoryDialogComponent } from './components/history-dialog/history-dialog.component';

// SVG Icons
import { AngularIconComponent } from './components/angular-icon/angular-icon.component';
import { BootstrapIconComponent } from './components/bootstrap-icon/bootstrap-icon.component';
import { GithubIconComponent } from './components/github-icon/github-icon.component';

//External Libries Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    CoinsTableComponent,
    HomeComponent,
    CoinsListComponent,
    ConverterComponent,
    HistoryComponent,
    AngularIconComponent,
    BootstrapIconComponent,
    GithubIconComponent,
    HistoryTableComponent,
    HistoryDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
