import {Component, Input, Output} from '@angular/core'
import { __importDefault } from 'tslib'

@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="well haverhell thumbnail">
    <h2> {{event.name}} </h2>
        <div>Date: {{event?.date}} </div>
        <div>Time: {{event?.time}} </div>
        <div>Price: \${{event?.price}} </div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}} </span>
            <span class="pad-left" > {{event?.location?.city}}, {{event?.location?.country}} </span>
        </div>
        <div *ngIf="event?.onlineUrl">
            Online Url: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .thumbnail {min-height: 210px; }
        .pad-left{ margin-left: 10px; }
        .well{ color: #bbb; }
    `]
})

export class EventsThumbnailComponent
{
    @Input() event:any

   
}



