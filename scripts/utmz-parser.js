(function(){
    /* - I believe this is the format that needs to go into the dataLayer
    [domain] => 1
    [timestamp] => 1276242664
    [visits] => 248
    [sources] => 7
    [campaign] => search
    [source] => (organic)
    [medium] => organic
    [keyword] => sticky orange
    */

    //Initialise the dataLayer if one isn't already defined
    window.dataLayer = window.dataLayer || [];
    
    try {
        //get the cookie
        var cookie = Cookies.get('__utmz');

        //Test values for the cookie
        //var cookie = '79104832.1302099445.45.9.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=human%20quality%20management%20eduhub';

        if(cookie){
            //first, split the cookie value by . to separate the initial 4 values
            var z = cookie.split('.');

            window.dataLayer.push({name: 'domain', value: z[0]});
            window.dataLayer.push({name: 'timestamp', value: z[1]});
            window.dataLayer.push({name: 'visits', value: z[2]});
            window.dataLayer.push({name: 'sources', value: z[3]});

            if (z.length >= 4) {
                //now split the latter part of the cookie
                var y = z[4].split('|');
                for (i = 0; i < y.length; i++) {

                    //get the value for each key=value pair
                    var pair = y[i].split("=");

                    switch(pair[0]){

                        case "utmcsr":
                        window.dataLayer.push({name: 'campaign', value: pair[1]});
                        break;

                        case "utmccn":
                        window.dataLayer.push({name: 'source', value: pair[1]});
                        break;

                        case "utmcmd":
                        window.dataLayer.push({name: 'medium', value: pair[1]});
                        break;

                        case "utmctr":
                        window.dataLayer.push({name: 'keyword', value: pair[1]});
                        break;
                    }
                }
            }

            console.log(window.dataLayer);
        }
    } catch(ex){
        console.log(ex);
    }
}());