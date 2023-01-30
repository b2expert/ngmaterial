import { Injectable } from '@angular/core';
import { Subject, fromEvent, Subscription } from 'rxjs'

import { map, filter, tap } from 'rxjs/operators'
@Injectable({
    providedIn: 'root',
})
export class KeyBoardService {
    keyBoard: Subject<any> = new Subject<any>();
    subscription!: Subscription;

    sendMessage(message: any) {
        this.keyBoard.next(message)
    }
    init() {
        if (!this.subscription)
            this.subscription = fromEvent(document, 'keydown').pipe(
                filter((e: Event) => {
                    const el: any = document.activeElement
                    const ev: any = (e as KeyboardEvent)
                    const isArrow = ev.keyCode >= 37 && ev.keyCode <= 40
                    return (isArrow && (el.tagName == 'body' || (ev.keyCode == 40 && el.tagName != 'SELECT') || el.getAttribute('arrow-el') === '')) || ev.keyCode === 13;
                }),
                map(e => {
                    const obj: any = { element: document.activeElement, action: null }
                    switch ((e as KeyboardEvent).keyCode) {
                        case 38:
                            obj.action = 'UP'
                            break;
                        case 37:
                            obj.action = 'LEFT'
                            break;
                        case 40:
                            obj.action = 'DOWN'
                            break;
                        case 39:
                            obj.action = 'RIGTH'
                            break;
                        case 13:
                            obj.action = 'ENTER'
                            break;
                    }
                    return obj
                })).subscribe(res => {
                    this.sendMessage(res)
                })
    }
    destroy() {
        this.subscription.unsubscribe()
    }
}