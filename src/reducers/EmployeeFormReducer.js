/**
 * Created by Ori on 04/01/2017.
 */
import { EMPLOYEE_UPDATE } from './../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case EMPLOYEE_UPDATE:
          return { ...state, [action.payload.prop]: action.payload.value }; //es6 key interpolation
      default:
          return state;
  }
};