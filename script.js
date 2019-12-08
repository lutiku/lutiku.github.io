



/*_______________________________________*/

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            const artist = data.items[0].artists[0].name


            const artistSecond = data.items[0].artists[0].name


            const artists = artist+' feat '+artistSecond
            console.log(artists)



            const date= data.items[0].release_date
            console.log(date)


            /*Boucle for qui récupère toutes les images*/
/*
            const nbitems = data.items.length

            for(let i=0; i< nbitems ; i++)
            {
                const nbimages = data.items[i]


                const itemsimage= data.items[i].images.length

                for(let j= 0 ; j< itemsimage ; j++)
                {
                    const resultimages = data.items[i].images[j].url
                    console.log(resultimages)
                }
            }
*/

            /*Boucle qui récupère Les images de taille moyenne + titre des chansons qui corespond à chaque image*/

            const nbitems_moyen = data.items.length

            for(let i=0; i< nbitems_moyen ; i++)
            {
                const nbimages_moyen = data.items[i].images[1].url
                console.log(nbimages_moyen)


                const single_name = data.items[i].name
                console.log(single_name)


                document.querySelector('.img'+[i]).innerHTML = '<img src='+nbimages_moyen+'  alt="image_single">'




            } /*fin boucle*/

            /*Boucle for qui récupère le titre des chansons
            const nbitems_name = data.items.length

            for(let n=0; n< nbitems_name ; n++) {
                const nbsingles = data.items[n]


                const single_name = data.items[n].name


                console.log(single_name)
                document.querySelector('.title'+[n]).innerHTML = single_name


            }/*Fin boucle*/



        }

    }




    xhr.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd/albums?include_groups=single&market=FR&limit=17')


    xhr.send()
}



getApiData()




/*Récupérer le titre des tracks*/


function getTracksData() {
    const xhrTracksData = new XMLHttpRequest()
    xhrTracksData.onreadystatechange = function () {
        if (xhrTracksData.readyState === 4) {
            const data = JSON.parse(xhrTracksData.responseText)
            console.log(data)



            for(i=0 ; i<5 ; i++) {

                const tracks = data.tracks[i].name
                console.log(tracks)

                document.querySelector('.tracks'+[i]).innerHTML = tracks


            }

        }
    }


    window.onload = function jorja() {
        document.getElementById("jorja").onclick = function(){
            xhrTracksData.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd/top-tracks?country=FR')
            xhrTracksData.send()
        }
    }

}

getTracksData()





/* ______________Artist_data*____________________________________*/

function getTracksData() {
    const xhrTracksData = new XMLHttpRequest()
    xhrTracksData.onreadystatechange = function () {
        if (xhrTracksData.readyState === 4) {
            const data = JSON.parse(xhrTracksData.responseText)
            console.log(data)

            const img = data.images[1].url
            console.log(img)




            for(i=0 ; i<5 ; i++) {

                const tracks = data.tracks[i].name
                console.log(tracks)

                document.querySelector('.tracks'+[i]).innerHTML = tracks


            }

        }
    }


    xhrTracksData.open('GET', 'https://api.spotify.com/v1/artists/1CoZyIx7UvdxT5c8UkMzHd')


    xhrTracksData.send()

}

getTracksData()






/*_______________________________________CAROUSSEL_________________________*/


function moveToSelected(element)
{
    if (element == "next") {
        var selected = $(".selected").next();
    }
    else if (element == "prev")
    {
        var selected = $(".selected").prev();
    }
    else
    {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e)
{
    switch(e.which)
    {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
});

$('#next').click(function() {
    moveToSelected('next');
});


/*____________________________________SEARCH___________________*/




function getSearchData() {
    const xhrSearchData = new XMLHttpRequest()
    xhrSearchData.onreadystatechange = function () {
        if (xhrSearchData.readyState === 4) {
            const data = JSON.parse(xhrSearchData.responseText)
            console.log(data)









        }
    }

   /* function search() {
        const artist = document.getElementById("artist").value;
        console.log(artist);
    }

    xhrSearchData.open('GET', 'https://api.spotify.com/v1/search?q='+artist+'&type=artist')


    xhrSearchData.send()

}*/

getSearchData()

// API YOUTUBE

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)

            const channel= data.items[0].channel[0].name.length
            console.log(channel)

        }
    }

    xhr.open('GET', ' https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=vevo&key=AIzaSyDnqB0BPgDul4yHWQIiJNkW4Ok4uQ5O4DA')
    xhr.send()
}


/*
function getChannels (){
    var url = "https://www.googleapis.com/youtube/v3/channels"

    $.get(url, )
}





/*

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
            function(err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("AIzaSyDnqB0BPgDul4yHWQIiJNkW4Ok4uQ5O4DA\n");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
    return gapi.client.youtube.channels.list({
        "part": "snippet,contentDetails,statistics",
        "forUsername": "GoogleDevelopers"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "52353213905-n4vgqaoi94rqkmb2mrvvu2s8eld5enk1.apps.googleusercontent.com"});
});
*/

/*

/*






*/