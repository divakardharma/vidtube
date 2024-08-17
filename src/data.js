export const API_KEY ='AIzaSyBGqwmugwjeV7jg5IbqnM7kdRdidu7nvWg';

export const VALUE_CONVENTER = (value)=>{
    if(value >=1000000)
        {
        return Math.floor(value/1000000) + 'M';
    }
    else if(value>=1000)
        {
        return Math.floor(value/1000) +'K';
    }
    
    else {
        return value;
    }
}