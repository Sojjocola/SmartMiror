

    function checkIsNeededToDisplay(daysOfWeek,startTime,endTime){

        var result = false;
        var dateNow = new Date();

        var daysOfWeekSplitted = daysOfWeek.split(',');
        if(jQuery.inArray(dateNow.getDay().toString(),daysOfWeekSplitted) > -1){
            result = true;
        }

        if(result && isHourLessOrGreat(startTime,dateNow,true) && isHourLessOrGreat(endTime,dateNow,false)){
            result = true;
        }else {
            result = false;
        }


        return result;
    }


    function isHourLessOrGreat(hourToCompare,dateNow,isLess){
        var result = false;
        var dateToCompare = new Date();
        var splittedHour = hourToCompare.split(':');
        dateToCompare.setHours(splittedHour[0]);
        dateToCompare.setMinutes(splittedHour[1]);
        dateToCompare.setSeconds(splittedHour[2]);

        if(isLess){
            result = dateToCompare < dateNow;
        } else {
            result = dateToCompare > dateNow;
        }
        return result;
    }
