import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FilterStateService {
  private hintType: string = "Record Attachment";
  //private difficulty: string[] = ["Easier", "Normal"];
  private difficulty: string[] = ["Easy", "Medium"];
  constructor() {}

  changeType(type: string) {
    this.hintType = type;
  }

  changeDiff(diff: string[]) {
    this.difficulty = diff;
  }

  getDiff() {
    return this.difficulty;
  }

  getType() {
    return this.hintType;
  }
}
