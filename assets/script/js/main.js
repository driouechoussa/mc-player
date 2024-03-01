
//initial the Nav's Buttons from HTML document and add an event click
var NavButtons = document.querySelectorAll('.navButton');

//directory name inputer
var drcName_Inputer = undefined;
var drcName_NewFolder = undefined;



//directory name
var directoryName = undefined;

//Arrays
//Directories
const Directories = []; 
console.log(LayoutsVisibility());

//Layouts
var MessageBox = undefined; //layout is call when cannot reach to any feather
var DisplayBox = undefined;
//call the div square that will be countain the message when the directory not found
var DisplaySquare = document.getElementById('screen-Displaying');

function LayoutsVisibility() { //control the visibility of page layouts
    var btnIndex = Array.from(NavButtons);
    NavButtons.forEach(e => { e.addEventListener('click', function() {
            if (btnIndex.indexOf(e) == 0) {
            
            }
            if (btnIndex.indexOf(e) == 1) {
                setTimeout(() => browseAudioFiles(), 500);
            }
            if (btnIndex.indexOf(e) == 2) {
                DisplayBox_Visibility();
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



function browseAudioFiles() { //browse the audios
  var browseFilesButton =  document.getElementById('fileHolder');
  browseFilesButton.click();

  DisplayBox_Visibility();
 
  
  browseFilesButton.addEventListener("input", () => {

    var fullPath =  browseFilesButton.files[0].webkitRelativePath
    directoryName = fullPath.split('/')[0];

    this.drcName_Inputer = prompt("do you want to save this directory with name :", directoryName);
     if (drcName_Inputer) {
        var newFolder = document.createElement('div');
        newFolder.setAttribute('id','newFolder');
        Directories.push(newFolder); 
        console.log(Directories.length);

        
     }
  });          
}







function MessageBox_Visibility() {
     //displayBox Feathers
     this.MessageBox = document.createElement('div');
     MessageBox.setAttribute('id','MesssageBox-DrcNotFound');
     DisplaySquare.appendChild(MessageBox);
}


function DisplayBox_Visibility() {
     //displayBox Feathers
     this.DisplayBox = document.createElement('div');
     DisplayBox.setAttribute('id','displayBox');
     DisplaySquare.appendChild(DisplayBox);

     //Button create directory
     var createDirectoryButton = document.createElement('div');
     var createDirection_Icon = document.createElement('img');

     createDirectoryButton.setAttribute('id','Btn-AddDrc');
     createDirectoryButton.setAttribute('class', 'BtnAddDrc');

     createDirection_Icon.setAttribute('class','CreateDrc-icon');
     createDirection_Icon.setAttribute('src','assets/view/images/icons/add-folder.png');
     createDirection_Icon.setAttribute('draggable','false');

     DisplayBox.appendChild(createDirectoryButton);
     createDirectoryButton.appendChild(createDirection_Icon);

     //add elements to array
     Directories.push(createDirectoryButton);

     
     createDirectoryButton.addEventListener('click', () => {
      document.createElement('div').setAttribute('class','cls');
     });

}


