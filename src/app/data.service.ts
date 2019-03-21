import {Injectable} from '@angular/core';

@Injectable()
export class DataService{
    private goodPeople = [
        {name: 'SAURAV', yearborn: '1993'},
        {name: 'GAURAV', yearborn: '1998'}
    ];

    getAllGoodPeople(){
        return  this.goodPeople;
    }
}