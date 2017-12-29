class Text {
    constructor(text, size) {
      this.text = text;
      this.size = size;
    }
  
    writeText() {
      var myHtml = `<p>${this.text}</p>`;
      return myHtml;
    }
  }
  
  var text1 = new Text('Create object and get html text tag with size (ES6 examples)', 2);
  var newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.innerHTML = text1.writeText();
  newDiv.style.fontSize = text1.size + 'em';