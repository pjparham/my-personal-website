section = [...document.getElementsByClassName(`section`)]; //these brackets turn HTML Collection into
for (var i = 0; i <section.length; i++) {
    section[i].addEventListener('click', function() {
        content = this.getElementsByClassName('content');
        for (var j = 0; j < content.length; j++) {
            content[j].classList.toggle('hide');
        }
    });
} 
/*
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript today";
document.querySelector("body").appendChild(h2);
function navBarClick() {
    section = document.getElementsByClassName(`section`);
    for (var i = 0; i <section.length; i++) {
        section[i].addEventListener("click", function() {
            content = this.getElementsByClassName('content');
            for (var j = 0; j < content.length; j++) {
                content[j].classList.toggle('hide');
            }
        });
    }
}
navBarClick() 

section = document.getElementsByClassName(`section`);
console.log(section)
for (var i = 0; i <section.length; i++) {
    section[i].addEventListener('click', function() {
        content = this.getElementsByClassName('content');
        for (var j = 0; j < content.length; j++) {
            content[j].classList.toggle('hide');
        }
    });
}
console.log("content")
*/