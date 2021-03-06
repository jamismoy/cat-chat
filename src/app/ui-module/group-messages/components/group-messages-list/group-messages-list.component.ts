import { Component, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter, Inject } from '@angular/core';

@Component({
    selector: 'group-messages-list-component',
    templateUrl: './group-messages-list.component.html',
    styleUrls: ['./group-messages-list.component.less']
})
export class GroupMessagesListComponent implements AfterViewInit {
    @Input() userId: string;
    @Output() scrolledToTop: EventEmitter<any> = new EventEmitter<any>();

    private _messagePageList: any[];
    private _selectedGroupChat: any;

    constructor(private elementRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.initializeScroll();
    }

    @Input()
    set messagePageList(list: any[]) {
        this._messagePageList = list;
        const message = document.getElementById('message-0-0');
        if (message) {
            window.requestAnimationFrame(() => {
                message.scrollIntoView(true);
            });
        }
    }

    get messagePageList(): any[] {
        return this._messagePageList;
    }

    @Input()
    set selectedGroupChat(chat: any) {
        this._selectedGroupChat = chat;
        this.scrollToBottom();
    }

    get selectedGroupChat(): any {
        return this._selectedGroupChat;
    }

    private initializeScroll(): void {
        this.elementRef.nativeElement.addEventListener('scroll', () => {
            const nativeElement = this.elementRef.nativeElement;

            if (nativeElement.scrollTop === 0) {
                this.scrolledToTop.emit();
            }
        });
    }

    private scrollToBottom(): void {
        try {
            this.elementRef.nativeElement.scrollTop = this.elementRef.nativeElement.scrollHeight;
        } catch (error) {
            console.error('scroll error', error);
        }
    }
}
