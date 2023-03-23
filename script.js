
const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media screen, pass to video element, then play
async function selectMediaStream() {
    try {
       const mediaStream = await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject = mediaStream;
       videoElement.onloadedmetadata = () => {
        videoElement.play();
       }
    } catch(err) {
        return err;
    }
} 

button.addEventListener('click', async () => {
    //  Disable button
     button.disabled = true;
    //  Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;

});

// On load
selectMediaStream();
