// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
var id = document.getElementById('player').innerText;

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        //    height: '100%',
        width: '100%',
        videoId: id,

        events: {
            'onReady': onPlayerReady,
            //    'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    //    if (event.data == YT.PlayerState.PLAYING && !done) {
    //        setTimeout(stopVideo, 6000);
    //        done = true;
    //    }
    event.target.playVideo();
}
function stopVideo() {
    player.stopVideo();
}



function timeToMin(time) {
    time_list = time.split(':')
    if (time_list.length == 1) {
        time = Number(time_list[0])
    } else if (time_list.length == 2) {
        time = Number(time_list[0]) * 60 + Number(time_list[1])
    } else {
        time = Number(time_list[0]) * 60 * 60 + Number(time_list[1]) * 60 + Number(time_list[2])
    }

    return time;
}

function formatTime(time) {
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
        seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}



function play(time) {
    let time1 = timeToMin(time);
    player.seekTo(time1);
}