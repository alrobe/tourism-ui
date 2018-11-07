import {Person} from './person'

export class Agency{
    id        : string;
    name: string;
    adress    : string;
    email      : string;
    phone      : string;
    webPage   : string;
    person    : Person;

    constructor(id?:string, nameAgency?: string, adress?: string, mail?:string, telf?:string, webPage?: string, person?: Person){
        this.id         = id;
        this.name = nameAgency;
        this.adress     = adress;
        this.email       = mail;
        this.phone       = telf;
        this.webPage    = webPage;
        this.person     = person;
    }
}
