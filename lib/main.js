var contextMenu = require("context-menu");
var tabs = require("tabs")

var menuItem = contextMenu.Item({
  label: "Phrase Examiner",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    tabs.open("https://www.google.co.jp/search?q=\"" + selectionText + "\"");
    tabs.open("http://ejje.weblio.jp/content/" + selectionText);
  }
});
