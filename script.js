//your JS code here. If required.
function myFunction(){
    var para = document.getElementById("status");
    var newH1 = document.createElement("h1");
    newH1.textContent="Entered Metaverse";
    para.parentNode.replaceChild(newH1, para);
}