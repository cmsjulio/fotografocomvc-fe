import { Photographer, PhotographerUpdate } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';
import { PhotographerService } from 'src/app/service/photographer.service';

@Component({
  selector: 'app-dados-basicos-form',
  templateUrl: './dados-basicos-form.component.html',
  styleUrls: ['./dados-basicos-form.component.css']
})
export class DadosBasicosFormComponent implements OnInit {
  @Input() photographer: Photographer;

  form: PhotographerUpdate = {
    name: '',
    gender: '',
    shortInfo:'' ,
    bio: '',
    phone: '',
    aboutMe: '',
    locationId: '',
  };

  constructor(private photographerService: PhotographerService) { }

  ngOnInit(): void {
    this.form.name = this.photographer.name
    this.form.gender = this.photographer.gender
    this.form.shortInfo = this.photographer.shortInfo
    this.form.bio = this.photographer.bio
    this.form.phone = this.photographer.phone
    this.form.aboutMe = this.photographer.aboutMe
    this.form.locationId = this.photographer.location?.id.toString()

    // console.log(this.form)
  }

  public submitUpdate(): void{
    this.photographerService.updateOwnProfile(this.form).subscribe(()=>{
      window.location.reload()
    })
  }

  public voltarClick(): void {
    window.location.reload()
  }

}
