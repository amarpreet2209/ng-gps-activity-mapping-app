import { SAVED_ACTIVITIES } from './../shared/activities';
import { IActivity } from './../shared/activity.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(allActivities: IActivity[]) {
    return allActivities.length;
  }

  getTotalDistance(allActivities: IActivity[]) {
    let totalDistance = 0;
    for (let i = 0; i < allActivities.length; i++) {
      totalDistance += allActivities[i].distance;
    }
    return totalDistance;
  }

  getFirstDate(allActivities: IActivity[]) {
    let earliestDate = new Date('01/01/9999');
    for ( let i = 0; i < allActivities.length; i++) {
      let currentDate = allActivities[i].date;
      if (currentDate < earliestDate) {
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }
}
