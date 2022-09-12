import { Directive, ElementRef, HostListener, Input, OnInit } from "@angular/core";

@Directive({ selector: "[buttoncostume]" })
export class ButtonDirective implements OnInit {
    @Input() likes;
    constructor(private element: ElementRef) {
    }

    @HostListener('click', ['$event.target'])
    click(btn) {
        this.aplicaRegra();
    }

    aplicaRegra() {
        if (this.likes > 9) {
            this.element.nativeElement.style.backgroundColor = "green";
        }

        else if (this.likes >= 4) {
            this.element.nativeElement.style.backgroundColor = "blue";
        }
       
    }

    ngOnInit(): void {
        this.aplicaRegra();
    }
}