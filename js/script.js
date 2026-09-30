const editor = document.getElementById('editor');
const btnBold = document.getElementById('btnBold');
const btnItalic = document.getElementById('btnItalic');
const btnNormal = document.getElementById('btnNormal');
const selectSize = document.getElementById('selectSize');
const colorPicker = document.getElementById('colorPicker');

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
