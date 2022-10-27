import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, lastValueFrom } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  // private apiPath: string =  'https://map-app-backend-prd.byu-dept-fhtl-prd.amazon.byu.edu/api/v2/'

  private apiPath: string =  'http://localhost:8000/api/v2/'

  constructor(private http: HttpClient) { }

  async awaitGetLastValueFrom(url: string, params?: any): Promise<any> {
    // https://www.youtube.com/watch?v=3aeK5SfWBSU
    let wait = 0;
    let result = null;

    if (!params) params = { observe: 'response' };
    else if (!params.hasOwnProperty('observe')) params.observe = 'response';
    const data$ = this.http.get<any>(url, params);
    do {
      //debugger
      if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait)); //wait between checks
      try {
        const result = await lastValueFrom(data$, { defaultValue: 'Default on null' }) ?? 'Default on undefined'
        return result;
      }
      catch (err: any) {
        console.log("GOT AN ERROR");
        console.log(err);
        if (err.status < 500 && err.status > 0) return err.hasOwnProperty("body") ? err.body : null;
      }
      if (wait < 15000) wait += 1000;
    } while (result == null);
  }

  /**
   *
   * @param name The name being searched
   * @param loc The location being searched
   * @param filterType The filter parameters to decide what we are searching (e.g. duplicates, records, etc.)
   *                   Possible values (case sensitive): Possible Duplicates, Connect Families,Find Death Dates ,Record Attachment
   * @param filterDifficulty If the filter is for source linking, pass an array of strings including at least
   *                          one of the following: 'Easy', 'Medium' or 'Hard'.
   */

  async getSearchName(name: string = "", loc: string = "", filterType: string, filterDifficulty: string[]): Promise<any> {
    if (name === "" && loc === "") {
      throw new Error("Search must not be empty.");
    }

    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('loc', loc);
    params = params.append("filterType",filterType);
    if (filterType == "Record Attachment") {
      for (let i=0;i<filterDifficulty.length;i++){
        params = params.append("filterDifficulty",filterDifficulty[i]);
      }
    }

    return this.awaitGetLastValueFrom(this.apiPath+'searchname?'+params.toString());
  }

  async getSearchLoc(name: string = "", loc: string = "", filterType: string, filterDifficulty: string[]): Promise<any> {
    if (name === "" && loc === "") {
      throw new Error("Search must not be empty.");
    }

    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('loc', loc);
    params = params.append("filterType",filterType);
    if (filterType == "Record Attachment") {
      for (let i=0;i<filterDifficulty.length;i++){
        params = params.append("filterDifficulty",filterDifficulty[i]);
      }
    }

    return this.awaitGetLastValueFrom(this.apiPath+'searchloc?'+params.toString());
  }

  async getProject(projectName: string = "", name: string = "", loc: string = "", filterType: string, filterDifficulty: string[]): Promise<any> {

    let params = new HttpParams();
    params = params.append('projectName', projectName);
    params = params.append('name', name)
    params = params.append('loc', loc);
    params = params.append("filterType",filterType);
    if (filterType == "Record Attachment") {
      for (let i=0;i<filterDifficulty.length;i++) {
        params = params.append("filterDifficulty",filterDifficulty[i]);
      }
    }

    console.log("Params: ", params)

    return this.awaitGetLastValueFrom(this.apiPath+'project?'+params.toString());
  }

  async getSuggestName(name:string = "", loc:string = "", filterDifficulty: string[], filterType: string): Promise<any> {

    //debugger

    if (name===""&&loc===""){
      return null;
    }
    let params = new HttpParams();
    params=params.append('loc',loc);
    params = params.append('name',name);

    params = params.append("filterType",filterType);
    if(filterType == "Record Attachment"){
    for(let i=0;i<filterDifficulty.length;i++){
      params = params.append("filterDifficulty",filterDifficulty[i]);
    }
  }
    return this.awaitGetLastValueFrom(this.apiPath + "suggestname?"+params.toString());
  }

  async getSuggestLoc(name:string = "", loc:string = "", filterDifficulty: string[], filterType: string): Promise<any> {

    //debugger

    if (name===""&&loc===""){
      return null;
    }
    let params = new HttpParams();
    params=params.append('loc',loc);
    params = params.append('name',name);

    params = params.append("filterType",filterType);
    if(filterType == "Record Attachment"){
    for(let i=0;i<filterDifficulty.length;i++){
      params = params.append("filterDifficulty",filterDifficulty[i]);
    }
  }
    return this.awaitGetLastValueFrom(this.apiPath + "suggestloc?"+params.toString());
  }

  updateUrl(url:string = "",hintType:string=""): void {
    console.log("url: ", url);
    console.log("hintType: ", hintType);
    if(url===""){
      throw new Error("URL must not be empty.");
    }
    this.awaitGetLastValueFrom(`${this.apiPath}update?url=${encodeURIComponent(url)}&filterType=${encodeURIComponent(hintType)}`);
  }
}
