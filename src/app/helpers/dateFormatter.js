import moment from "moment";
import { DATE_FORMATES } from "./Constants"

export const dateFormatter = (value, currentFormat, newFormat = `${DATE_FORMATES.DATE_DISPLAY_FORMAT} ${DATE_FORMATES.TIME_DISPLAY_FORMAT}`) => {
    if(value && value.length>0){
        return moment(value, currentFormat).format(newFormat);
    }else{
        return value;
    }
}