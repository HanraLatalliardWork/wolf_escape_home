
i=["Ends","Social","Start","Walls","Backgrounds","GameIcon","Wolf","Guard","Caps","Lowercases","Accents","Digits","Temperature","Arrows","Currency","Hearts","Common symbols","Maths","Micelanicious (not placed)"]
for usee in i:
    use=usee.lower()
    print(f"content.push(\"          <ol class=\\\"ContentsListol\\\"><a class=\\\"link\\\" onclick=\\\"showContent(\\\'{use}-content\\\',\\\'{use}ButtonToggle\\\')\\\"  href=\\\"\" + home + ad + \"#{use}\\\">{usee}</a></ol>\")")