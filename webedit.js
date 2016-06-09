//Configuring your Keyboard
document.onkeydown = function (e){
	if(!e) e = window.event;

	//browser  operation cancel (tab,F5)
	if((e.keyCode == 9) || (e.keyCode == 116) || (e.ctrlKey && (e.keyCode == 83 )) || (e.ctrlKey && (e.keyCode == 79))){
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.keyCode=0;
			return false;
		}
	}
	
	//The operation of the tab
	if(e.keyCode == 9){
		console.log("TAB");
		InsertString();
	}
	
	if(e.keyCode == 32){
		console.log("space key");
	}

	//shortcut key
	//Ctr + s (file download)
	if((e.ctrlKey && (e.keyCode == 83 ))){
		TextSave();
	}
	//Ctr + o (file open)
	if((e.ctrlKey && (e.keyCode == 79))){

	}
};



function InsertString(){
	//insert string
	var indent ="\t";

	//textarea data
	var inputtext = document.getElementById('input').value;
	
	//cursole data acquisition 
	var posCursole = document.getElementById('input').selectionStart;
	var leftPart = inputtext.substr(0,posCursole);
	var rightPart = inputtext.substr(posCursole,inputtext.length);
	
	//contact two strings output to textarea
	document.getElementById('input').value = leftPart + indent +rightPart;	
}

//save function 
function TextSave() {
	//text data acquisition
	var text = document.getElementById('input').value
	//filename acquisition default(webedit)
	var name = document.getElementById('name').value || 'webedit'

	//make text file
	var blob = new Blob( [text], {type: 'text/plain'} )

	//get link
	var link = document.getElementById('DL_link') 
	//link data set the url 
	link.href = window.URL.createObjectURL(blob)

	//if download property supported
	if ('download' in link){
		//file name set link
		link.download = name;//+ '.txt'
		//downloads
		link.click()

		//if download property unsupported
	} else {		
		link.textContent = 'Right click the target. Choose Save As'
	}

}
