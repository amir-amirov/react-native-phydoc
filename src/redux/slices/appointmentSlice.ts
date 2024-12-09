import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  appointmentType: null,
  forWhom: null,
  timeSlot: null,
  price: null,
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setAppointmentType: (state, action) => {
      state.appointmentType = action.payload;
    },
    setForWhom: (state, action) => {
      state.forWhom = action.payload;
    },
    setTimeSlotAndPrice: (state, action) => {
      state.timeSlot = action.payload.timeSlot;
      state.price = action.payload.price;
    },
    resetAppointmentType: state => {
      state.appointmentType = null;
    },
    resetForWhom: state => {
      state.forWhom = null;
    },
    resetTimeSlotAndPrice: state => {
      state.timeSlot = null;
      state.price = null;
    },
    resetAppointment: state => {
      state.appointmentType = null;
      state.forWhom = null;
      state.timeSlot = null;
      state.price = null;
    },
  },
});

export const {
  setAppointmentType,
  setForWhom,
  setTimeSlotAndPrice,
  resetAppointmentType,
  resetForWhom,
  resetTimeSlotAndPrice,
  resetAppointment,
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
