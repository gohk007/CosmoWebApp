export const environment = {
  production: true,
  ProductionUrl: 'http://example.com/api',
  LocalUrl: 'http://localhost:3000',
  postal: 'https://api.postalpincode.in/',
};

export enum Admin {
  DashBoard = '/AdminDashBoard',
  Event = '/INITIAL_EVENTS',
}

export enum Patient {
  PatientBookedAppointment = '/PatientBookedAppointment',
  Appointment = '/AppointmentData',
}