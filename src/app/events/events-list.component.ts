import {Component} from '@angular/core'

@Component({
    selector: 'events-list',
    template:
    `
    <div>
        <h1> Angularrrrr </h1>
        <hr>
        <events-thumbnail [event]="event1"></events-thumbnail>
    </div>
    `
})

export class EventsListCompponent
{
event1 = {
    id:1,
    name:'Nazwa',
    date:'01/01/2010',
    time:'10:10 pm',
    price: 599.99,
    imageLoc: "brak",
    location:
    {
        address: '1092 DT',
        city: 'London',
        country: 'England'
    }



}
}