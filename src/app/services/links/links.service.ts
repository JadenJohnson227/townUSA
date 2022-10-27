import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  public readonly FHTL = {
    auth: 'https://auth.familytech.byu.edu',
    home: 'https://familytech.byu.edu',
    contact: 'https://familytech.byu.edu/contact.html',
    donate: 'https://familytech.byu.edu/donate.html',
    people: 'https://familytech.byu.edu/people.html',
    relativeFinder: 'https://www.relativefinder.org',
    virtualPedigreee: 'http://virtual-pedigree.familytech.byu.edu',
    descendancyExplorer: 'http://descend.familytech.byu.edu',
    treeSweeper: 'https://treesweeper.familytech.byu.edu',
    brownie: 'https://familytech.byu.edu/apps/brownie.html', //TODO change once brownie is actually released
    pedigreePie: 'http://pedigree-pie.familytech.byu.edu',
    onePageGenealogy: 'http://opg.familytech.byu.edu',
    familyCalendar: 'https://calendar.familytech.byu.edu',
    geneopardy: 'https://geneopardy.familytech.byu.edu',
    wheelOfFamilyFortune: 'https://wheel.familytech.byu.edu',
    ancestorGames: 'https://ancestorgames.familytech.byu.edu',
    recordQuest: 'https://recordquest.familytech.byu.edu',
  }

  public readonly FS: string = 'https://www.familysearch.org/'

  public readonly APP_NAME: string = 'AngularTemplate';

  private home: string = 'start';

  public mainMenu = [
    { name: 'Home', href: 'home', icon: 'home' },
    //{name: 'Help', href: 'help', icon: 'help'},
    { name: 'Contact', href: 'https://familytech.byu.edu/contact.html', icon: 'contact_mail' },
    //{name: 'About', href: 'about'},
  ];

  constructor() { }

  getHome(): string {
    return this.home;
  }

  setHomeLoggedIn(): void {
    this.home = 'home';
    this.mainMenu.push({
      name: 'Logout',
      href: 'logout',
      icon: 'supervised_user'
    });
  }

  logOut() {
    this.mainMenu.pop();
    this.home = 'start';
  }

  /**
   * 
   * @param redirect the url to return to upon signing in. Defaults to the current url 
   */
  public getAuthRedirect(redirect = window.location.href): string {
    return `${this.FHTL.auth}?redirect=${redirect}`;
  }

}
