function add(sec, art){
    countMatrix[sec][art]++;
  document.getElementById(sec+"C"+art).textContent++;
}
function remove(sec, art){
    if(document.getElementById(sec+"C"+art).textContent>0)
    document.getElementById(sec+"C"+art).textContent--;
}

var maxSections = 5;
var maxArticles = 3;
var nameMatrix=[["00","01","02"],["10","11","12"],["20","21","22"],["30","31","32"],["40","41","42"]];
var countMatrix = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];
for(var section=0; section<maxSections; section++){
    document.write("<section>");
    for(var article = 0; article<maxArticles; article++){
        document.write("<article>");
        document.write("<center><h4>"+nameMatrix[section][article]+"</h4></center>");
        document.write("<img src=\"img/"+section+"i"+article+".jpg\" class=\"titleImage\">");               
        document.write("<img src=\img/plus.jpg\" class=\"buttonPlus\"onclick=\"add("+section+","+article+")\">");
        document.write("<span id="+section+"C"+article+">"+countMatrix[section][article]+"</span>");
        document.write("<img src=\img/minus.jpg\" class=\"buttonMinus\"onclick=\"remove("+section+","+article+")\">");
        document.write("</article>");
    }
    document.write("</section>");
}