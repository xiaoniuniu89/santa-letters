// script handling the letter typing / sending

var letterParts = $('.letter-part');
var paper = $('#paper')
var custom_text = $('#custom_text')
var addTextButton = $('#add-text')
var removeButton = $('#remove')
var addPButton = $('#newP')

function addWord(newText) {
    lastP = $('#paper p:last-child')
    text = lastP.text()
    addString = text.trim() + ' ' + newText.trim()
    lastP.text(addString)
}

function addText() {
    lastP = $('#paper p:last-child');
    text = lastP.text();
    newText = custom_text.val();
    addString = text.trim() + ' ' + newText.trim();
    lastP.text(addString);
    custom_text.val('');
}

function remove() {
    lastP = $('#paper p:last-child')
    text = lastP.text()
    if (text.length) {
        reducedText = text.slice(0,-1)
        lastP.text(reducedText);
    } else {
        lastP.remove();
    }
}

function addP() {
    newP = `<p class="text"></p>`
    paper.append(newP);
}

letterParts.click(function(e) {
    var clickedValue = $(e.target).text()
    addWord(clickedValue)
});

addTextButton.click(function(event) {
    event.preventDefault();
    addText();
})

removeButton.click(remove)
addPButton.click(addP)

