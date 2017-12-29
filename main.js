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
  
  var text1 = new Text('Hello woooorld!!!', 2);
  var newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.innerHTML = text1.writeText();
  newDiv.style.fontSize = text1.size + 'em';