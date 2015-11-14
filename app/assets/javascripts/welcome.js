console.log("fuck you");

var dialogLinks = [
  ["help-completion","Just keep trying! They aren’t that hard. Everyone else can do them just fine. You know what I think? You probably aren’t trying hard enough."
],["help-q-math", "What do you mean? Just answer the questions. Didn’t you study?"
],["help-q-read","Try paying more attention to what you are reading. It’s not that hard."
],["help-q-hist","You have plenty of time. We won’t give you more time just because you’re special."
],["help-hard","Here this will help"
],["help-nothing","You’re not actually okay. we know this because our perspective is more
important/accurate than yours."
]
];

$(document).ready(function(){
  // $("#dialog-text").text("suck it");
  for (var i = dialogLinks.length - 1; i >= 0; i--) {
    var id = dialogLinks[i][0];
    var text = dialogLinks[i][1];
    makeClick(id,text);
  }
});

function makeClick(id,text){
  $("#"+id).click(function(){
    $("#dialog-text").text(text);
  });
}