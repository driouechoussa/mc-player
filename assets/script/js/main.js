
//initial the Nav's Buttons from HTML document and add an event click
var NavButtons = document.querySelectorAll('.navButton');

console.log(LayoutsVisibility());

function LayoutsVisibility() {
    var btnIndex = Array.from(NavButtons);
    NavButtons.forEach(e => { e.addEventListener('click', function() {
            if (btnIndex.indexOf(e) == 0) {
                console.log('its me');
            }
            if (btnIndex.indexOf(e) == 1) {
                setTimeout(() => browseAudioFiles(), 2000);
                browseAudioFiles();
            }
            if (btnIndex.indexOf(e) == 2) {
                
            }
            if (btnIndex.indexOf(e) == 3) {
                
            }
            if (btnIndex.indexOf(e) == 4) {
                
            }
            if (btnIndex.indexOf(e) == 5) {
                
            }
        });
    });
}



function browseAudioFiles() {
    document.getElementById('fileHolder').click();
    
}


