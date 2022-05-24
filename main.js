
    const date = new Date();

    function calendar()
    {

        var month = date.getMonth();

        const year = date.getFullYear();

        date.setDate(1);
        
        const name_Days = [ "Sun" , "Mon" , "Tues" , "Wed" , "Thurs" , "Fri" , "Sat" ];

        const day_Week = [ 0,1,2,3,4,5,6 ];
        
        var month_number = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 ];
        
        const namesMonth = [ "January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
        
        const lastDay = new Date( date.getFullYear , date.getMonth() + 1 , 0 ).getDate();
        
        const prevLastDay = new Date( date.getFullYear , date.getMonth() , 0 ).getDate();
        
        const firstDayIndex = date.getDay();
        
        const lastDayIndex = new Date( date.getFullYear , date.getMonth() + 1 , 0 ).getDay();
        
        const nextDays = 7 - lastDayIndex - 1;


        //display name of the month and year
        
        const nameofmonth = document.querySelector(".ym")

        for ( var n=0; n<=11; n++ ) {

            if ( month_number[n] === month ) {

                nameofmonth.innerHTML = `<div>
                <h1>
                ${namesMonth[month]} ${year} </h1>
                </div>`

            }
            
        }
        

  
            

    

            let days = "";

            for ( var x = 0; x <= 6; x++ ) {
        
                days += `<div class="prev-date">${ prevLastDay - x + 1 }</div>`;
        
            }



        
            const displayDays = document.querySelector( ".days" )
        
            for ( let i = 1; 1 <= lastDay; i++ ) {
        
                if ( 1 === new Date().getDate() && date.getMonth() === new Date().getMonth() ) {
        
                    days += ` <div> ${i} </div>`;
                    
                    displayDays.innerHTML = days;
        
                } else {
        
                    days += ` <div> ${i} </div>`;
        
                }
        
            }
        


            for ( let j = 1; j <= nextDays; j++ ) {
        
                days += ` <div class = "next-date"> ${j} </div> `
        
            }
            
        }


       
        
        
    

    calendar();

    const prev_btn = document.querySelector( ".prevMonth" );

    prev_btn.addEventListener( "click" , function() {

        date.setMonth( date.getMonth() - 1 )

    } )
    
    const next_btn = document.querySelector( ".nextMonth" );

    next_btn.addEventListener( "click" , function() {

        date.setMonth( date.getMonth() + 1 )

    } )