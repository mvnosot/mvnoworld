  //요일 조회
  String.prototype.getWeekDay = function(){
    var nStr = this;
    if (nStr != "" && nStr.length == 8) {
      
        var dt = new Date();
        var s_year = nStr.substr(0,4);
        var s_month =Number(nStr.substr(4,2))-1;
        var s_date = Number(nStr.substr(6));
        dt.setFullYear(s_year) ;
        dt.setMonth(s_month);
        dt.setDate(s_date);
        var day = dt.getDay();

        if (day == 0) return "일";
        else if (day == 1) return "월";
        else if (day == 2) return "화";
        else if (day == 3) return "수";
        else if (day == 4) return "목";
        else if (day == 5) return "금";
        else return "토"
    }
    return nStr;
  }
  
  //오늘 일자 구하기
  function getTodayDate(){
    var _date = new Date();
    var _year = _date.getFullYear();
    var _month = ""+(_date.getMonth()+1);
    var _day = ""+_date.getDate();
    if(_month.length == 1) _month = "0"+_month;
    if((_day.length)==1) _day = "0"+_day;
    var tmp = ""+_year+_month+_day;
    return tmp;
  }