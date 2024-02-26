
//initial the Nav's Buttons from HTML document and add an event click
var NavButtons = document.querySelectorAll('.navButton');

//call the div square that will be countain the message when the directory not found
var DisplaySquare = document.getElementById('screen-Displaying');

//directory name
var directoryName = undefined;

//directories
const Directories = [];

console.log(LayoutsVisibility());

function LayoutsVisibility() {
    var btnIndex = Array.from(NavButtons);
    NavButtons.forEach(e => { e.addEventListener('click', function() {
            if (btnIndex.indexOf(e) == 0) {
                ShowMessagesBox();
            }
            if (btnIndex.indexOf(e) == 1) {
                setTimeout(() => browseAudioFiles(), 500);
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
  var browseFilesButton =  document.getElementById('fileHolder');
  browseFilesButton.click();
 
  
  browseFilesButton.addEventListener("input", () => {
    
    var fullPath =  browseFilesButton.files[0].webkitRelativePath
    directoryName = fullPath.split('/')[0];

    let drcName_Inputer = prompt("do you want to save this directory with name :", directoryName);
     if (drcName_Inputer) {
        
     }
  });          
}


/*function CreateNewDirectory() {
    var directoryFolder = document.createElement('div');
    directoryFolder.setAttribute('class','Drc-Folder');

}*/


function ShowMessagesBox() {

    const MessageBox_drcNotFound = document.createElement('div');
    MessageBox_drcNotFound.setAttribute('id','MesssageBox-DrcNotFound');


    //create image tag and set attribute for it (1)
    //declaration of tag
    var MessageBox_Icon = document.createElement('img');
    //its attribute
    MessageBox_Icon.setAttribute('src','assets/view/images/patterns/Brocken-cd.png');
    MessageBox_Icon.setAttribute('class' , 'messagebox-image');
    MessageBox_Icon.setAttribute('draggable' , 'false');

    //create tag and set attribute for it (2)
    //declaration of tag
    var MessageBox_text = document.createElement('h2');
    //its attribute
    MessageBox_text.innerText = "there is not any item yet";
    MessageBox_text.setAttribute('class' , 'messagebox-text');

    //
    DisplaySquare.appendChild(MessageBox_drcNotFound);
    MessageBox_drcNotFound.appendChild(MessageBox_Icon);
    MessageBox_drcNotFound.appendChild(MessageBox_text);
    
}



