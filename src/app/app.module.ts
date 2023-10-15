import { PhotographerListComponent } from './photographer/photographer-list.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ButtonModule } from 'primeng/button';
import { authInterceptorProviders } from './auth/_helpers/auth.interceptor';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InputTextModule } from 'primeng/inputtext';
import { SelecionarCidadeComponent } from './home/components/selecionar-cidade/selecionar-cidade.component';
import { PhotographerCardComponent } from './photographer/components/photographer-card/photographer-card.component';
import { FilterModalComponent } from './photographer/components/filter-modal/filter-modal.component';
import { ImageGalleryCardComponent } from './profile/components/image-gallery-card/image-gallery-card.component';
import { UploadImageComponent } from './profile/components/upload-image/upload-image.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProfileBannerComponent } from './profile/components/profile-banner/profile-banner.component';
import { DetalhesCardComponent } from './profile/components/detalhes-card/detalhes-card.component';
import { SearchBannerComponent } from './photographer/components/search-banner/search-banner.component';
import { DadosBasicosFormComponent } from './profile/components/dados-basicos-form/dados-basicos-form.component';
import { LocalidadeEventoFormComponent } from './profile/components/localidade-evento-form/localidade-evento-form.component';
import { EquipamentoFormComponent } from './profile/components/equipamento-form/equipamento-form.component';
import { MaisSobreMimFormComponent } from './profile/components/mais-sobre-mim-form/mais-sobre-mim-form.component';
import { EntregasCardComponent } from './profile/components/entregas-card/entregas-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HeaderComponent,
    FooterComponent,
    SelecionarCidadeComponent,
    PhotographerListComponent,
    PhotographerCardComponent,
    FilterModalComponent,
    ImageGalleryCardComponent,
    UploadImageComponent,
    ProfileBannerComponent,
    DetalhesCardComponent,
    SearchBannerComponent,
    DadosBasicosFormComponent,
    LocalidadeEventoFormComponent,
    EquipamentoFormComponent,
    MaisSobreMimFormComponent,
    EntregasCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
