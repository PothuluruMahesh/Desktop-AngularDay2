import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { NestedGroupComponent } from './nested-group/nested-group.component';
import { ValidationComponent } from './validation/validation.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import {Hello1Component} from './hello1/hello1.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    NestedGroupComponent,
    ValidationComponent,
    HeroFormComponent,
    Hello1Component,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
