var code;;
$('input[name=MagicPicker]').change(function() {
	if($(this).get(0).files.length < 1){
		return;
	}
	$("#code").remove();
	// var textArea = $('<textarea id="code"/>');  
	$("#codeBox").html($("<textarea>", {id:"code"}));
	code = $('#code');
	var finalString = '';
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
    	var name = $(this).get(0).files[i].name;
    	// console.log(name)
        // names.push(name);
        var newName = name.substr(0, name.indexOf('.')).toLocaleLowerCase().replace(/ /g, '_');
        finalString += '<string name="' + newName + '">' + 'fonts/' + name + '</string> \n';
    }
    code.val(finalString);
    CodeMirror.fromTextArea(document.getElementById('code'), {
	    lineNumbers: false,
	    mode: "xml",
	    theme: 'base16-dark',
	    readOnly: true
		});
})