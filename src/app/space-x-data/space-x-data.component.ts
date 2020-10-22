import { Component, OnInit } from '@angular/core';
import { SpaceXDataService } from './space-x-data.service';

@Component({
  selector: 'app-space-x-data',
  templateUrl: './space-x-data.component.html',
  styleUrls: ['./space-x-data.component.scss']
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
      if(this.successLaunch == data){
        this.successLaunch = '';
      }else{
        this.successLaunch = data;
      }
    }else if(type == 'land'){
      if(this.successLand == data){
        this.successLand = '';
      }else{
        this.successLand = data;
      }
    }else if(type == 'year'){
      if(this.launchYear == data){
        this.launchYear = '';
      }else{
        this.launchYear = data;
      } 
    }
    this.setPath();
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
  setPath(){
    let path1,path2,path3 = '';
    if(this.launchYear){
      path1 = `&launch_year=${this.launchYear}`
    }
    if(this.successLaunch){
      path2 = `&launch_success=${this.successLaunch}`;
    }
    if(this.successLand){
      path3 = `&land_success=${this.successLand}`;
    }
    this.basePath = (path1 ? path1 : '') + (path2 ? path2 : '') + (path3 ? path3 : '');
    this.getSpaceXData(this.basePath);
  }

}
