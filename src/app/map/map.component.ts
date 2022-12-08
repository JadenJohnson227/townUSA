import { Component, AfterViewInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import * as L from "leaflet";
import { HttpResponse } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { PopupWarningComponent } from "../popup-warning/popup-warning.component";
/*
interface search {
  projectName: string,
  name: string,
  loc: string,
  option: any,
  difficulty: any
}
*/
@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"],
})

/**
 * MapComponent
 * @param showSearch determines if search component is shown
 * @param map map configuration
 * @param defaultIcon attributes common to each icon
 * @param easyIcon sets icon color for easy record attachments
 * @param mediumIcon sets icon color for medium record attachments
 * @param hardIcon sets icon color for hard record attachments
 * @param icons markers for the map
 * @param startingCoords default latitude and longitude position
 * @param startingZoom default zoom
 * @param searchType the type of record
 * @param openPopUp instructions for how webpage works
 */
export class MapComponent implements AfterViewInit {
  public openPopUp: boolean = true;
  public showSearch: boolean = false;
  public showPopup: boolean = false;
  public tabError: boolean = false;
  private numTabs: number = 5;
  private map: any = null;
  private defaultIcon: any = null;
  private easyIcon: any = null;
  private mediumIcon: any = null;
  private hardIcon: any = null;
  private icons: any = new L.layerGroup();
  private startingCoords: Array<number> = [40, -100];
  private startingZoom: number = 5; //The higher the number the more zoomed in
  private searchZoom: number = 3;
  private searchType: any = "Record Attachment";
  //private searchEmitter: Object = null;
  //private searchEmitter: search;
  private searchEmitter: any;
  private preserveScroll: boolean = false;
  private currentData: Array<Object> = null;
  private hintCount: number = 0;
  private projectShown: boolean = false;


  constructor(
    private backendService: BackendService,
    private blankSearchMessage: MatSnackBar,
    public popupWarning: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.configureIcon();
    this.addPins();
  }

  /**
   * Generates the Map
   * */
  private initMap(): void {
    this.map = L.map("map", {
      center: this.startingCoords,
      zoom: this.startingZoom,
      zoomControl: false,
      tap: false,
    });
    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    //So the user cannot scroll off of the map
    //Numbers derived from Leaflet website
    this.map.setMaxBounds([
      [256, 256],
      [-256, -256],
    ]);

    //Set zoom in, zoom out buttons to be in the top right, hides zoom buttons in mobile
    if (!L.Browser.mobile) {
      L.control
        .zoom({
          position: "topright",
        })
        .addTo(this.map);
    }
  }

  public changeOpenPopUp(): void{
    if(this.openPopUp){
      this.openPopUp = false;
    }else{
      this.openPopUp = true;
    }
  }

  /**
   * Sets attributes for the icon to be
   * displayed when showing records
   * */
  private configureIcon(): void {
    this.defaultIcon = L.icon({
      iconUrl: "../assets/icons/mapIcon.png",
      iconSize: [45, 45],
      iconAnchor: [22.5, 45],
      popupAnchor: [0, -40],
    });
    this.easyIcon = L.icon({
      iconUrl: "../assets/icons/greenIcon.png",
      iconSize: [45, 45],
      iconAnchor: [22.5, 45],
      popupAnchor: [0, -40],
    });
    this.mediumIcon = L.icon({
      iconUrl: "../assets/icons/blueIcon.png",
      iconSize: [45, 45],
      iconAnchor: [22.5, 45],
      popupAnchor: [0, -40],
    });
    this.hardIcon = L.icon({
      iconUrl: "../assets/icons/purpleIcon.png",
      iconSize: [45, 45],
      iconAnchor: [22.5, 45],
      popupAnchor: [0, -40],
    });
  }


  /**
    *Adds pins for each of the connected websites
  **/

  private addPins(): void{
    //Array of locations and website urls
    let data:{url: string, latitude: number, longitude: number, state: string, county: string}[] = [
      {"url":"http://connectedtempe.surge.sh/", "latitude":33.41, "longitude":-111.94,"state":"Arizona","county":"Early Tempe"},
      {"url":"http://connectedus.surge.sh/", "latitude":38.89, "longitude":-77.03,"state":"Famous People","county":"USA"},
      {"url":"http://connectedmesa.surge.sh/", "latitude":33.41, "longitude":-111.83,"state":"Arizona","county":"Mesa"},
      {"url":"http://connectedherriman.surge.sh/", "latitude":40.51, "longitude":-112.03,"state":"Utah","county":"Herriman"},
      {"url":"http://connectedcody.surge.sh/", "latitude":44.52, "longitude":-109.05,"state":"Wyoming","county":"Cody"},



    ];
    let results = data;
    this.currentData = results;
    //how much space you want between both latitude and longitude before you combine into one pin
    let diff = 1
    //array of locations that are close enough to be merged into one pin
    let matches = [];
    //area of locations that have already been added to make to prevent duplicates when merging locations
    let completed = [];
    //boolean that tells if it should start a new popUp or add next location to another pin
    let start = true;
    //Starts going through the list of locations
    for (let i = 0; i < results.length; i++) {
      matches = [i];
      start = true;

        //Checks for locations that are within the var diff in both latitude and longitude of the original location
        for(let j = i+1;j < results.length;j++){
          if((Math.abs(results[i].latitude-results[j].latitude) < diff ) && (Math.abs(results[i].longitude-results[j].longitude) < diff)){
            matches.push(j);
          }
        }
        //goes through all locations that were found to be close enough to make one popUp Pin and adds them to the map
        for(let k=0;k<matches.length;k++){
          if(!completed.includes(matches[k])){
            //starts new pin if false skips to add the location to an already started pin
            if(start){
              var marker = L.marker([results[i].latitude, results[i].longitude], {
                icon: this.defaultIcon,
              });
              //Prevents popups from displaying null as locations
              if (results[i].state == null) {
                results[i].state = "";
              }
              if (results[i].county == null) {
                results[i].state = "";
              }
              var popupContent = `<b>`;
              start = false;
            }
            popupContent += `<a class="popup-click" href="${results[matches[k]].url}" target='_blank' rel='noreferrer noopener'>
            </br>${results[matches[k]].county}, ${results[matches[k]].state}
            </a>`;
        }
          completed.push(matches[k]);
        }
        popupContent += `</b>`;
        marker.bindPopup(popupContent);
        this.icons.addLayer(marker);
        this.icons.addTo(this.map);
    }
  }










  /**
   * Called whenever the page is clicked. Only used to identify when a popup is clicked to perform a backend call.
   *
   */


  pageClicked(event) {
    let classes = event?.target?.classList;
    if (classes == null || !classes.contains("popup-click")) return;

    let url = event.target.href;
    let hint = event.target.childNodes[1].innerText;
    //this.backendService.updateUrl(url, hint);
  }

}
