import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { InstructionsComponent } from "../instructions/instructions.component";
import { FilterStateService } from "../services/filter-state.service";

import projectData from "../search/communityProjects.json";
//import { tmpdir } from "os";
interface Project {
  id: Number;
  name: String;
  description: String;
  location: String;
}

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})

/**SearchComponent
 * @param surname the name to search by
 * @param location the location to search by
 * @param ...
 * @param suggestTimer used to only give suggestions when the user stops typing
 * @param waitInterval the amount of time to wait between typing and giving suggestions
 * */
export class SearchComponent implements OnInit {
  public surname: string = "";
  public location: string = "";
  public option: string[] = ["Record Attachment"];
  public difficulty: string[] = ["Easy", "Medium"];
  //public difficulty: string[] = ["Easier", "Normal"];
  public menuList: any;
  public difficultyList: any;
  public autocomplete: Array<string> = [];
  private suggestTimer: any;
  private waitInterval: number = 150; //modify this number to change the speed of autocomplete

  public panelOpenState: boolean = false;

  public projectName: string = "";
  projects:Project[] = projectData;



  constructor(
    private backendService: BackendService,
    private filterService: FilterStateService,
    private emptySearchMessage: MatSnackBar,
    public instructions: MatDialog
  ) {
    // this.menuList = [
    //   "Record Attachment",
    //   "Possible Duplicates",
    //   "Connect Families",
    //   "Find Death Dates",
    // ];
    this.menuList = ["Record Attachment"];
    this.difficultyList = ["Easy", "Medium", "Hard"];
    //this.difficultyList = ["Easier", "Normal", "Harder"];
  }

  ngOnInit(): void {
    this.difficulty = this.filterService.getDiff();
    this.option = [this.filterService.getType()];
  }


  public updateDiff() {
    console.log("Change Diff");
    this.filterService.changeDiff(this.difficulty);
  }

  public updateType() {
    console.log("Change Type");
    this.filterService.changeType(this.option[0]);
  }


  /**
   * Opens the Instructions Component as Mat-Dialog
   * */
  public displayInstructions(): void {
    this.instructions.open(InstructionsComponent, {
      panelClass: "helpDialog",
      autoFocus: false, //prevents scrolling to the bottom upon opening
    });
  }

  public getSuggestionsName(): void {

    //reset timer
    clearTimeout(this.suggestTimer);

    if (this.surname === "") {
      this.autocomplete = [];
      return;
    }

    this.suggestTimer = setTimeout(async () => {
      let suggestions = await this.backendService.getSuggestName(
        this.surname,
        "",
        this.difficulty,
        this.option[0]
      );

      let temp = [];

      for (let i = 0; i < suggestions.body.length; i++) {
        if (i >= 10) {
          break;
        }
        let record = suggestions.body[i];
        temp.push(record.surname);
      }

      this.autocomplete = temp;
    }, this.waitInterval);
  }

  public getSuggestionsLocation(): void {
    //reset timer
    clearTimeout(this.suggestTimer);

    if (this.location === "") {
      this.autocomplete = [];
      return;
    }

    this.suggestTimer = setTimeout(async () => {
      let suggestions = await this.backendService.getSuggestLoc(
        "",
        this.location,
        this.difficulty,
        this.option[0]
      );

      let temp = [];

      /*
      for (let i = 0; i < suggestions.body.length; i++) {
        if (i >= 10) {
          break;
        }
        let record = suggestions.body[i];
        if (record.state == null && record.county == null) {
          continue;
        } else if (record.state == null) {
          temp.push(record.county);
        } else if (record.county == null) {
          temp.push(record.state);
        } else {
          temp.push(record.county + ", " + record.state);
        }
      }
      */

      //New way, might have some bugs but works for now
      for (let i = 0; i < suggestions.body.length; ++i) {
        temp.push(suggestions.body[i]);
      }

      this.autocomplete = temp;
    }, this.waitInterval);


  }

  public clearSuggestions(): void {
    this.autocomplete = [];
  }

  public showProjects(): void {
    //console.log("SHOW PROJECTS");
    document.getElementById("project-tab").style.backgroundColor = "#f5f5f5";
    document.getElementById("search-tab").style.backgroundColor = "#d8d8d8";
    document.getElementById("search-display").style.display = "none";
    document.getElementById("project-display").style.display = "block";
  }

  public showSearch(): void {
    //console.log("SHOW SEARCH");
    document.getElementById("search-tab").style.backgroundColor = "#f5f5f5";
    document.getElementById("project-tab").style.backgroundColor = "#d8d8d8";
    document.getElementById("project-display").style.display = "none";
    document.getElementById("search-display").style.display = "block";
  }

  @Output() searchToMap = new EventEmitter<Object>();

  public async populateMap(): Promise<void> {
    if (this.surname === "" && this.location === "") {
      this.emptySearchMessage.open(
        "Please Enter a Name or Location",
        "Dismiss",
        { duration: 3000, panelClass: ["warning-snackbar"] }
      );
      return;
    }
    this.emptySearchMessage.dismiss();
    this.searchToMap.emit({
      name: this.surname,
      loc: this.location,
      option: this.option[0],
      difficulty: this.difficulty,
    });
  }

  @Output() searchProjects = new EventEmitter<Object>();

  public async projectClicked(name: string = ""): Promise<void> {
    console.log("a project was clicked, emitting");

    this.projectName = name;

    this.searchProjects.emit({
      projectName: this.projectName,
      name: this.surname,
      loc: this.location,
      option: this.option[0],
      difficulty: this.difficulty,
    });
  }



}



