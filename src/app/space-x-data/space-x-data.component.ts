import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from './space-x-data.service';

@Component({
  selector: 'app-space-x-data',
  templateUrl: './space-x-data.component.html',
  styleUrls: ['./space-x-data.component.css']
})
export class SpaceXDataComponent implements OnInit {
  
  public yearList = this._spaceService.yearsList();
  public successList = this._spaceService.successList();
  public launchYear = '';
  public successLand = '';
  public successLaunch = '';
  public spaceXData : any;
  public basePath = '';
  public isLoading = false;
  constructor(
    private _spaceService: SpaceXDataService
  ) { }
  
  ngOnInit(): void {
    this.getSpaceXData('');
  }
  select(data,type){
    if(type == 'launch'){
      this.successLaunch = data;
    }else if(type == 'land'){
      this.successLand = data;
    }else if(type == 'year'){
      this.launchYear = data;
    }
    this.basePath = `&launch_year=${this.launchYear}&launch_success=${this.successLaunch}&land_success=${this.successLand}`;
    this.getSpaceXData(this.basePath);
  }
  resetFilter(){
    this.launchYear = '';
    this.successLand = '';
    this.successLaunch = '';
    this.spaceXData = [];
    this.getSpaceXData('');
  }
  getSpaceXData(path){
    this.isLoading = true;
    this._spaceService.getData(`?limit=100${path}`).subscribe(data=>{
      if(data){
        this.spaceXData = data;
        this.isLoading = false;
      }
    })
  }

}
