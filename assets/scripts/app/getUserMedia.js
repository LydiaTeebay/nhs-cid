/*
*  Copyright (c) 2015 The WebRTC project authors. All Rights Reserved.
*
*  Use of this source code is governed by a BSD-style license
*  that can be found in the LICENSE file in the root of the source
*  tree.
*/

// This code is adapted from
// https://rawgit.com/Miguelao/demos/master/mediarecorder.html

'use strict';

/* globals MediaRecorder */

var mediaSource = new MediaSource();
mediaSource.addEventListener('sourceopen', handleSourceOpen, false);
var mediaRecorder;
var recordedBlobs;
var sourceBuffer;
var gumVideo = document.querySelector('video#gum');
var recordedVideo = document.querySelector('video#recorded');
var instructions = document.querySelector('div#instructions');
var instructionsRecordingStarted = document.querySelector('div#instructions-recording-started');
const dot = document.getElementById ("dot");
var recordButton = document.querySelector('button#record');
var playButton = document.querySelector('button#play');
var downloadButton = document.querySelector('button#download');
var submitButton = document.querySelector('button#submitvideo');
var retakeButton = document.querySelector('a#retakevideo');
// var signInstructions = document.querySelector('div#signinstructions');
recordButton.onclick = startStop;
recordButton.onclick = toggleRecording;
playButton.onclick = play;
downloadButton.onclick = download;
submitButton.onclick = showUploader;
retakeButton.onclick = resetVideo;

// window.isSecureContext could be used for Chrome
var isSecureOrigin = location.protocol === 'https:' ||
    location.hostname === 'localhost';
if (!isSecureOrigin) {
    alert('getUserMedia() must be run from a secure origin: HTTPS or localhost.' +
        '\n\nChanging protocol to HTTPS');
    location.protocol = 'HTTPS';
}

var constraints = {
    audio: true,
    video: {
        width: 640,
        height:480,
        frameRate: {ideal: 30, min:20}
    }
};

function handleSuccess(stream) {
    recordButton.disabled = false;
    window.stream = stream;
    gumVideo.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).
then(handleSuccess).catch(handleError);

function handleSourceOpen(event) {
    console.log('MediaSource opened');
    sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
    console.log('Source buffer: ', sourceBuffer);
}

recordedVideo.addEventListener('error', function(ev) {
    console.error('MediaRecording.recordedMedia.error()');
    alert('Your browser can not play\n\n' + recordedVideo.src
        + '\n\n media clip. event: ' + JSON.stringify(ev));
}, true);

function handleDataAvailable(event) {
    if (event.data && event.data.size > 0) {
        recordedBlobs.push(event.data);
    }
}


function handleStop(event) {
    console.log('Recorder stopped: ', event);
}

function toggleRecording() {
    if (recordButton.textContent === 'Start recording') {
        playSound();
        setTimeout(function(){
            startRecording();
        }, 500)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("record");
        status = "started";
        dot.style.visibility="visible";


    } else {
        stopRecording();
        recordButton.textContent = 'Start recording';
        playButton.disabled = false;
        downloadButton.disabled = false;
        playSound();
        window.clearInterval(interval);
        document.getElementById("record");
        status = "stopped";
        dot.style.visibility="hidden";

    }
}

function startRecording() {
    recordedBlobs = [];
    var options = {mimeType: 'video/mp4'};
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.log(options.mimeType + ' is not Supported');
        options = {mimeType: 'video/webm;codecs=vp8'};
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
            console.log(options.mimeType + ' is not Supported');
            options = {mimeType: 'video/webm'};
            if (!MediaRecorder.isTypeSupported(options.mimeType)) {
                console.log(options.mimeType + ' is not Supported');
                options = {mimeType: ''};
            }
        }
    }
    try {
        mediaRecorder = new MediaRecorder(window.stream, options);
    } catch (e) {
        console.error('Exception while creating MediaRecorder: ' + e);
        alert('Exception while creating MediaRecorder: '
            + e + '. mimeType: ' + options.mimeType);
        return;
    }
    console.log('Created MediaRecorder', mediaRecorder, 'with options', options);
    recordButton.textContent = 'Stop recording';
    instructions.style.display = "none";
    instructionsRecordingStarted.style.display = "table-cell";
    recordButton.className += " button--recording";
    playButton.disabled = true;
    downloadButton.disabled = true;
    mediaRecorder.onstop = handleStop;
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start(10); // collect 10ms of data
    console.log('MediaRecorder started', mediaRecorder);
  

}




function stopRecording() {
    mediaRecorder.stop();
    recordButton.className = "button";
    showPrep();
    console.log('Recorded Blobs: ', recordedBlobs);
    recordedVideo.controls = false;
    dot.style.visibility="visible";

}

function playSound() {
    var sound = document.getElementById("audio");
    sound.volume = 0.2;
    sound.play();
}

function showPrep() {
    activateLoader(1);
    document.getElementById('camera-container').style.display = "none";
    document.getElementById('scan-id-3').style.display = "block";
    setTimeout(function(){
        playButton.click();
    }, 2000)
}

function showUploader() {
    mute();
    uploadLoader2(2);
    document.getElementById("spinner-heading").innerHTML = "Uploading your video";
    document.getElementById("progressbar-heading").innerHTML = "Uploading your video";
    document.getElementById('scan-id-5').style.display = "none";
    document.getElementById('scan-id-3').style.display = "block";
}

function resetVideo() {
    mute();
    console.log("reset");
    document.getElementById('scan-id-5').style.display = "none";
    document.getElementById('camera-container').style.display = "block";
}

function mute() {
    console.log(recordedVideo)
    recordedVideo.ontimeupdate = function() {
        recordedVideo.currentTime = 0;
        recordedVideo.ontimeupdate = function() {
            delete recordedVideo.ontimeupdate;
            recordedVideo.pause();
        };
    };
}

function play() {
    var superBuffer = new Blob(recordedBlobs, {type: 'video/webm'});
    recordedVideo.src = window.URL.createObjectURL(superBuffer);
    // workaround for non-seekable video taken from
    // https://bugs.chromium.org/p/chromium/issues/detail?id=642012#c23
    recordedVideo.addEventListener('loadedmetadata', function() {
        if (recordedVideo.duration === Infinity) {
            recordedVideo.currentTime = 1e101;
            recordedVideo.ontimeupdate = function() {
                recordedVideo.currentTime = 0;
                recordedVideo.ontimeupdate = function() {
                    delete recordedVideo.ontimeupdate;
                    recordedVideo.play();
                };
            };
        }
    });
}

function download() {
    var blob = new Blob(recordedBlobs, {type: 'video/webm'});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'test.webm';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 100);
}

// Logging utility function.
function trace(arg) {
    var now = (window.performance.now() / 1000).toFixed(3);
    console.log(now + ': ', arg);
}




//Stopwatch JS 

//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("time").textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}



function startStop(){

const dot = document.getElementById ("dot")

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("record");
        status = "started";
        toggleRecording()



    }
    else{

        window.clearInterval(interval);
        document.getElementById("record");
        status = "stopped";
        toggleRecording()
        
    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("record").innerHTML = "Start";

}
