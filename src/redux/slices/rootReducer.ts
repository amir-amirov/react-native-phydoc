import {combineReducers} from 'redux';
import appointmentReducer from './appointmentSlice';

const rootReducer = combineReducers({
  appointment: appointmentReducer,
});

export default rootReducer;
