import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorsReducers from "./errorsReducers";
import profilesReducers from "./profilesReducers";


export default combineReducers({
    auth : authReducers,
    errors: errorsReducers, 
    profiles: profilesReducers
    

})