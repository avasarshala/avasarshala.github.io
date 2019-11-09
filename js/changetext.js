var texts = ["Mom", "Dad", "Uncle", "Aunt", "Sis", "Bro"];
var count = 0;
function changeText() {
    $("#example").text(texts[count]);
    count < 6 ? count++ : count = 0;
}
setInterval(changeText, 750);