const editor = document.querySelector('#editor');
const btnBold = document.querySelector('#btnBold');
const btnItalic = document.querySelector('#btnItalic');
const btnNormal = document.querySelector('#btnNormal');
const selectSize = document.querySelector('#selectSize');
const colorPicker = document.querySelector('#colorPicker');
const selectAlign = document.querySelector('#selectAlign');

function focusEditor() {
    editor.focus();
}

btnBold.addEventListener('click', function() {
    focusEditor();
    document.execCommand('bold', false, null);
});

btnItalic.addEventListener('click', function() {
    focusEditor();
    document.execCommand('italic', false, null);
});

btnNormal.addEventListener('click', function() {
    focusEditor();
    document.execCommand('removeFormat', false, null);
});

selectSize.addEventListener('change', function() {
    focusEditor();
    document.execCommand('fontSize', false, selectSize.value);
});

colorPicker.addEventListener('change', function() {
    focusEditor();
    document.execCommand('foreColor', false, colorPicker.value);
});

selectAlign.addEventListener('change', function() { 
  focusEditor(); 
  document.execCommand(selectAlign.value, false, null); 
});