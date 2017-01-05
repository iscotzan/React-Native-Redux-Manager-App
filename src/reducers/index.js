/**
 * Created by Ori on 02/01/2017.
 */
import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';



export default combineReducers({
   auth: AuthReducer,
   employeeForm: EmployeeFormReducer
});