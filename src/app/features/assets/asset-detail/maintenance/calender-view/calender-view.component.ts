import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { addDays, addHours, endOfMonth, isSameDay, isSameMonth, startOfDay, startOfWeek, subDays } from 'date-fns';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calender-view',
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule,
    NgSwitch
  ],
  providers: [],
  templateUrl: './calender-view.component.html',
  styleUrl: './calender-view.component.scss'
})
export class CalenderViewComponent {

  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };
  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  activeDayIsOpen: boolean = true;
  refresh: Subject<any> = new Subject();

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  events: CalendarEvent[] = [
    {
      start: new Date('2024-03-03T12:30:00.000Z'), // Start time of the new event
      end: new Date('2024-03-06T12:30:00.000Z'),   // End time of the new event
      title: 'New Event',
      color: this.colors.blue, // Event color
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      allDay: false,
      actions: this.actions,
    }
  ];

  constructor() {
    // Pre-process events to merge multi-day events
    this.events = this.mergeMultiDayEvents(this.events);
  }

  mergeMultiDayEvents(events: CalendarEvent[]): CalendarEvent[] {
    const mergedEvents: CalendarEvent[] = [];
    events.forEach(event => {
      // Calculate the number of days the event spans
      const days = Math.ceil((event.end!.getTime() - event.start.getTime()) / (1000 * 60 * 60 * 24));
      if (days > 1) {
        // Multi-day event, create a single event for each day it spans
        for (let i = 0; i < days; i++) {
          const start = addDays(event.start, i);
          const end = addDays(event.start, i);
          const title = i === 0 ? event.title : ''; // Display title only for the first day
          mergedEvents.push({ start, end, title, color: event.color });
        }
      } else {
        // Single-day event, keep it as is
        mergedEvents.push(event);
      }
    });
    return mergedEvents;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next(event);
  }


}
