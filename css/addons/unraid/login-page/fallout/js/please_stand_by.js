// Adds a video background
// Source: https://www.youtube.com/watch?v=ehvduomE0AU

let video = `
<div class="background-wrap"><video id="video-bg-elem" preload="auto" autoplay="true" loop="loop" muted="muted"> <source src="https:\/\/rayderr.github.io\/theme.park\/css\/addons\/unraid\/login-page\/fallout\/video\/please_stand_by.mp4" type="video\/mp4">Video not supported</video></div>
`
document.body.innerHTML += video
