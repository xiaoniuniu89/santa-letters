// script handling the letter typing / sending

var letterParts = $('.letter-part');
var paper = $('#paper')
var custom_text = $('#custom_text')
var addTextButton = $('#add-text')

function addWord(newText) {
    lastP = $('#paper p:last-child')
    text = lastP.text()
    addString = text.trim() + ' ' + newText.trim()
    lastP.text(addString)
}

function addText() {
    lastP = $('#paper p:last-child')
    text = lastP.text()
    newText = custom_text.val()
    console.log(text)
    console.log(newText)
    addString = text.trim() + ' ' + newText.trim()
    console.log(addString)
    lastP.text(addString)
    custom_text.val('')

}

letterParts.click(function(e) {
    var clickedValue = $(e.target).text()
    console.log(clickedValue)
    addWord(clickedValue)
});

addTextButton.click(function(event) {
    event.preventDefault();
    addText();
})

// console.log(letterParts[0].innerText)