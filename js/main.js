
// Just showing you how your javascript can manipulate your HTML. Look for javascriptTest in your index.html file
// If you want to stop the functionality simply comment out ALL the code below. 

let i = 0;
function change() {
  const doc = document.getElementById("javascriptTest");
  const color = ["white", "blue", "brown", "green"];
  doc.style.color = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000); 
