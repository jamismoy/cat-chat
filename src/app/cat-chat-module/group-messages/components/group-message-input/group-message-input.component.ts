import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'group-message-input-component',
    templateUrl: './group-message-input.component.html',
    styleUrls: ['./group-message-input.component.less']
})
export class GroupMessageInputComponent {
    @Output() sendMessage: EventEmitter<any> = new EventEmitter<any>();

    send(content: any) {
        this.sendMessage.emit(content);
    }
}
