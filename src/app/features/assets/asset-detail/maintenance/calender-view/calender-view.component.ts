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

  days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  hours = Array.from({ length: 24 }, (_, i) => ('0' + i).slice(-2) + ':00');
  events = [
    { startTime: '05:10', endTime: '06:00', days: ['Mon', 'Tue', 'Wed'] },
    { startTime: '12:00', endTime: '13:00', days: ['Mon', 'Tue'] },
    // Add more events as needed
  ];

  constructor() {}

  calculateEventPosition(event: any): any {
    if (!event || !event.startTime || !event.endTime || !event.days || event.days.length === 0) {
      return {};
    }

    const firstDayIndex = this.days.findIndex(day => day === event.days[0]);
    const lastDayIndex = this.days.findIndex(day => day === event.days[event.days.length - 1]);
    const startTimeSplit = event.startTime.split(':');
    const endTimeSplit = event.endTime.split(':');
    const startHourIndex = parseInt(startTimeSplit[0]);
    const startMinuteIndex = parseInt(startTimeSplit[1]);
    const endHourIndex = parseInt(endTimeSplit[0]);
    const endMinuteIndex = parseInt(endTimeSplit[1]);

    const paddingLeft = 10; // Adjust padding as needed
    const eventHeight = 40; // Fixed height for each event

    // Calculate top position based on start time
    const topPosition = startHourIndex * 60 + startMinuteIndex;

    return {
      top: `${topPosition}px`,
      left: `${firstDayIndex * 100 + paddingLeft}px`,
      width: `${(lastDayIndex - firstDayIndex + 1) * 100 - paddingLeft}px`,
      height: `${eventHeight}px`
    };
  }


  getTimePosition(time: string): number {
    const [hours, minutes] = time.split(':');
    const hourPosition = this.hours.findIndex(hour => hour === `${hours}:${minutes}`);
    return hourPosition * 30; // Assuming each hour cell height is 30px
  }


}
