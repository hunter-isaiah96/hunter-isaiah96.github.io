var xmlCode;
var cssCode;
$('input[name=MagicPicker]').change(function() {
	if($(this).get(0).files.length < 1){
		return;
	}
	$('#xml').remove();
	$('#css').remove();
	// var textArea = $('<textarea id="code"/>');  
	$('#codeBox').html('<h5>XML</h5><textarea id="xml"/><h5>CSS</h5><textarea id="css"/>');
	xmlCode = $('#xml');
	cssCode = $('#css');
	var xmlString = '';
	var cssString = '';
    for (var i = 0; i < $(this).get(0).files.length; ++i) {
    	var file = $(this).get(0).files[i].name;
        var name = file.substr(0, file.indexOf('.'))
        xmlString += '<string name="' + name.toLocaleLowerCase().replace(/ /g, '_') + '">' + 'fonts/' + file + '</string> \n';
        cssString += '@font-face { \n font-family: ' + name.replace(/ /g, '') + '; \n src: url(' + '../fonts/' + file + ');\n} \n \n';
    }
    xmlCode.val(xmlString);
    cssCode.val(cssString);
    CodeMirror.fromTextArea(document.getElementById('xml'), {
	    lineNumbers: false,
	    mode: 'xml',
	    theme: 'base16-dark',
	    readOnly: true
	});

	CodeMirror.fromTextArea(document.getElementById('css'), {
	    lineNumbers: false,
	    mode: 'css',
	    theme: 'base16-dark',
	    readOnly: true
	});

})