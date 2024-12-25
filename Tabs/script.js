function tabClick(choice,idname) {
    let content = document.getElementsByClassName("actual");
    let buttons = document.getElementsByClassName("buttons");
    for (let i = 0; i < content.length; i++) {
        buttons[i].style.color= "gray";
        buttons[i].style.textDecoration="none";
        content[i].style.display = "none";
    }
    document.getElementById(idname).style.color = 'black';
    document.getElementById(idname).style.textDecoration='underline';
    document.getElementById(choice).style.display = "block";
    console.log(choice);
    
}
