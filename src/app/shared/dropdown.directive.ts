import { Directive, OnInit, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective implements OnInit {
    @HostBinding('class.open') isOpen: boolean;
    @Input() appDropdown: boolean;

    ngOnInit() {
        this.isOpen = false;
    }

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen
    }
}