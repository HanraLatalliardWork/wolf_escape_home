function TableOfContents(ID) {
    var home = "https://hanralatalliardwork.github.io/wolf_escape_home/",
        content = [],
        e = document.getElementById(ID).innerHTML;
    content.push("  <nav>");
    content.push("      <ul>");
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Home</a></li>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#About\">About wolf Escape</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#supported\">Supported systems</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Download\">Download wolf Escape</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Discord\">The wolf Escape Discord server</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Controls\">How to play Wolf Escape</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#licence\">Wolf Escape's licence</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#Hosts\">Hosted by</a></ol>");
    content.push("          <ol class=\"ContentsListol\"><a class=\"link\"  href=\"" + home + "#ToCome\">To come</a></ol>");
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "\">Create Levels</a></li>");
    content.push("          <li class=\"ContentsListli\"><a class=\"link\"  href=\"" + home + "files/level_creators/available_decorations/\">All the sprites of the game</a></li>");
    content.push("      </ul>");
    content.push("  <nav>");
    for (var i = 0; i < content.length; i++) {
        e += content[i] + "\n";
    }
    // console.log("e=" + e);
    document.getElementById(ID).innerHTML = e;
}