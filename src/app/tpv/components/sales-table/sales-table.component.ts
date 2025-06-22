import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sales-table',
  imports: [],
  templateUrl: './sales-table.component.html',
})
export class SalesTableComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      this.scrollContainer.nativeElement.scrollTop =
        this.scrollContainer.nativeElement.scrollHeight;
    });
  }

  ngOnInit() {
    this.scrollToBottom();
  }
}
