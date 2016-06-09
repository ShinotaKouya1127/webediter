var file = document.querySelector('#getfile');
file.onchange = function FileLoad(){
	var fileList = file.files;
	//loading
	var reader = new FileReader();
	reader.readAsText(fileList[0]);

	//read end
	reader.onload = function  FileLoad() {
		document.querySelector('#input').textContent = reader.result;
	};
};
