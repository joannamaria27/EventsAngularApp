import {Component, Input, Output} from '@angular/core'
import { __importDefault } from 'tslib'

@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="hell haverhell thumbnail">
    <h2> {{event.name}} </h2>
        <div>Date: {{event.date}} </div>
        <div>Time: {{event.time}} </div>
        <div>Price: \${{event.price}} </div>
        <div>
            <span>Location: {{event.location.address}} </span>
            <span>&nbsp;</span>
            <span> {{event.location.city}}, {{event.location.country}} </span>
        </div>
        
    </div>
    `
})

export class EventsThumbnailComponent
{
    @Input() event:any

   
}



