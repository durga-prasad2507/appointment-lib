import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentLibService {

  constructor() { }

  createAppointment(data:any) {
    console.log('Appointment created:',data);
  }
}

// Explicitly export the function
export const createAppointment = (data:any) => {
  const service = new AppointmentLibService();
  service.createAppointment(data);
};
