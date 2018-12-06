$(document).ready(function(){
    var code = $("#codeEditor")[0];
    var editor = CodeMirror.fromTextArea(code, {
        theme: "monokai",
        lineNumbers : true,
        autoCloseTags : true,
        mode: "xml"
    })

    var cssCode = $("#cssEditor")[0];
    var editorCSS = CodeMirror.fromTextArea(cssCode, {
        theme: "monokai",
        lineNumbers : true,
        autoCloseTags : true,
        mode: "css"
    })

    var jsCode = $("#jsEditor")[0];
    var editorJS = CodeMirror.fromTextArea(jsCode, {
        theme: "monokai",
        lineNumbers : true,
        autoCloseTags : true,
        mode: "javascript"
    })
})

