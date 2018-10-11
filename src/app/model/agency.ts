import {Person} from './person'

export class Agency{
    nameAgency: string;
    adress    : string;
    mail      : string;
    telf      : string;
    webPage   : string;
    person    : Person;

    constructor(nameAgency: string, adress: string, mail:string, telf:string, webPage: string, person: Person){
        this.nameAgency = nameAgency;
        this.adress     = adress;
        this.mail       = mail;
        this.telf       = telf;
        this.webPage    = webPage;
        this.person     = person;
    }
}
