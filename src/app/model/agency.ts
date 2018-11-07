import {Person} from './person'

export class Agency{
    id        : string;
    nameAgency: string;
    adress    : string;
    mail      : string;
    telf      : string;
    webPage   : string;
    person    : Person;

    constructor(id:string, nameAgency: string, adress: string, mail:string, telf:string, webPage: string, person: Person){
        this.id         = id;
        this.nameAgency = nameAgency;
        this.adress     = adress;
        this.mail       = mail;
        this.telf       = telf;
        this.webPage    = webPage;
        this.person     = person;
    }
}
