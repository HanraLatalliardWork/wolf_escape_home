function TableOfContents(ID,page="") {
    var home = "https://hanralatalliardwork.github.io/wolf_escape_home/",
        content = [],
        e = document.getElementById(ID).innerHTML,
        ad="files/level_creators/available_decorations";
    content.push("  <nav>");
    content.push("      <ul>");
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Home</a></li>");
    if (page==="home"){
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#About\">About wolf Escape</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#supported\">Supported systems</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Download\">Download wolf Escape</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Discord\">The wolf Escape Discord server</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Controls\">How to play Wolf Escape</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#licence\">Wolf Escape's licence</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Hosts\">Hosted by</a></ol>");
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#ToCome\">To come</a></ol>");
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Create Levels</a></li>");
    if (page==="available_decorations"){
        content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'ends-content\',\'endsButtonToggle\')\"  href=\"" + home + ad + "#ends\">Ends</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'social-content\',\'socialButtonToggle\')\"  href=\"" + home + ad + "#social\">Social</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'start-content\',\'startButtonToggle\')\"  href=\"" + home + ad + "#start\">Start</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'walls-content\',\'wallsButtonToggle\')\"  href=\"" + home + ad + "#walls\">Walls</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'backgrounds-content\',\'backgroundsButtonToggle\')\"  href=\"" + home + ad + "#backgrounds\">Backgrounds</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'gameicon-content\',\'gameiconButtonToggle\')\"  href=\"" + home + ad + "#gameicon\">GameIcon</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'wolf-content\',\'wolfButtonToggle\')\"  href=\"" + home + ad + "#wolf\">Wolf</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'guard-content\',\'guardButtonToggle\')\"  href=\"" + home + ad + "#guard\">Guard</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'caps-content\',\'capsButtonToggle\')\"  href=\"" + home + ad + "#caps\">Caps</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'lowercases-content\',\'lowercasesButtonToggle\')\"  href=\"" + home + ad + "#lowercases\">Lowercases</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'accents-content\',\'accentsButtonToggle\')\"  href=\"" + home + ad + "#accents\">Accents</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'digits-content\',\'digitsButtonToggle\')\"  href=\"" + home + ad + "#digits\">Digits</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'temperature-content\',\'temperatureButtonToggle\')\"  href=\"" + home + ad + "#temperature\">Temperature</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'arrows-content\',\'arrowsButtonToggle\')\"  href=\"" + home + ad + "#arrows\">Arrows</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'currency-content\',\'currencyButtonToggle\')\"  href=\"" + home + ad + "#currency\">Currency</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'hearts-content\',\'heartsButtonToggle\')\"  href=\"" + home + ad + "#hearts\">Hearts</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'common symbols-content\',\'common symbolsButtonToggle\')\"  href=\"" + home + ad + "#common symbols\">Common symbols</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'maths-content\',\'mathsButtonToggle\')\"  href=\"" + home + ad + "#maths\">Maths</a></ol>")
content.push("          <ol class=\"ContentsListol\"><a class=\"link\" onclick=\"showContent(\'micelanicious_(not_places)-content\',\'micelanicious_(not_places)ButtonToggle\')\"  href=\"" + home + ad + "#micelanicious (not placed)\">Micelanicious (not placed)</a></ol>")
    }
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "files/level_creators/available_decorations/\">All the sprites of the game</a></li>");
    if (page===""){}
    content.push("      </ul>");
    content.push("  <nav>");
    for (var i = 0; i < content.length; i++) {
        e += content[i] + "\n";
    }
    // console.log("e=" + e);
    document.getElementById(ID).innerHTML = e;
}