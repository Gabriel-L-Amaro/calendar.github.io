
    const date = new Date();

    var month = date.getMonth();

    const year = date.getFullYear();

    const day = date.getDay();

    const name_Days = [ "Sun" , "Mon" , "Tues" , "Wed" , "Thurs" , "Fri" , "Sat" ];

    const day_Week = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 ];

    const namesMonth = [ "January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];

    var month_number = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11];

    const nameofmonth = document.querySelector(".ym")

    for ( var n=0; n<=11; n++ ) {

        if ( month_number[n] === month ) {

            nameofmonth.innerHTML = `<div>
            <h1>
            ${namesMonth[month]} ${year} </h1>
            </div>`

        }
        
    }

    const nameofdays = document.querySelector('.dw');

    let nod = "";

    for ( var j = 0; j <= 6; j++) {

        nod += `<div> ${name_Days[j]} </div`

        nameofdays.innerHTML = nod;
        
    }

    var febDays = 0;

    var y = year;

    if ( ( y % 4 === 0 ) && ( y % 100 !== 0 ) || ( y % 400 === 0) ) {

        febDays = 29;

    } else {

        febDays = 28;

    }

    const displayDays = document.querySelector(".days");
    
    var days = " ";

    const dt = date.getDate();

    if ( ( month === 0 ) || ( month === 2 ) || ( month === 4 ) || ( month === 6 ) || ( month === 7 ) || ( month === 9 ) || ( month === 11 ) ) {

        for ( var j = 1; j <= 31; j++ ) {

            if ( j === dt ) {

                days += `<div style='color:blue; font-weight:bold'> ${j} </div>`

                displayDays.innerHTML = days;

            } else {

                days += `<div> ${j} </div`

                displayDays.innerHTML = days;

            }

        }

    } else if ( ( month === 3 ) || ( month === 5 ) || ( month === 8 ) || ( month === 10 ) ) {

        for ( var j = 1; j <= 30; j++ ) {

            if ( j === dt ) {

                days += `<div style='color:blue; font-weight:bold'> ${j} </div>`

                displayDays.innerHTML = days;

            } else {

                days += `<div> ${j} </div`

                displayDays.innerHTML = days;

            }

        }

    } else if ( month === 1 ) {

        for ( var j = 1; j <= febDays; j++ ) {

            if ( j === dt ) {

                days += `<div style='color:blue; font-weight:bold'> ${j} </div>`

                displayDays.innerHTML = days;

            }

        }

    } else {

        "Incorrect Year";

    }