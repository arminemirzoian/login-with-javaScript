function loadFunction() {
    var newDiv = document.createElement("div");
    newDiv.id = "box";
    var position = document.getElementsByTagName("body")[0];
    position.appendChild(newDiv);
    position.style.backgroundColor = '#364b56';
    position.style.minHeight = "700px";
    console.log(newDiv);
}
function load() {
    var mainDiv = document.createElement("div");
    mainDiv.id = "main-box";
    var position = document.getElementsByTagName("body")[0];
    position.appendChild(mainDiv);

    var logo = document.createElement("div");
    logo.id = "logo-box";
    var home = document.getElementById("main-box");
    home.appendChild(logo);

    var logopic = document.createElement("div");
    logopic.id = "logo";
    var pic = document.getElementById("logo-box");
    pic.appendChild(logopic);

    var logotext1 = document.createElement("div");
    logotext1.id = "logo-text1";
    var text1 = document.getElementById("logo-box");
    text1.appendChild(logotext1);

    var new1 = document.createTextNode("ServiceCamp");
    logotext1.appendChild(new1);

    var logotext2 = document.createElement("div");
    logotext2.id = "logo-text2";
    var text2 = document.getElementById("logo-box");
    text2.appendChild(logotext2);

    var new2 = document.createTextNode("by Teamviewer");
    logotext2.appendChild(new2);

    var logobox2 = document.createElement("div");
    logobox2.id = "login-register";
    var login = document.getElementById("main-box");
    login.appendChild(logobox2);

    var ulist = document.createElement("ul");
    var listPosition = document.getElementById("login-register");
    listPosition.appendChild(ulist);

    var newLi1 = document.createElement("li");
    newLi1.setAttribute("class", "login");
    ulist.appendChild(newLi1);

    var ahref = document.createElement("a");
    ahref.setAttribute("href", "#");
    var ax = document.createTextNode("Login");
    ahref.appendChild(ax);
    newLi1.appendChild(ahref);

    var ahref1 = document.createElement("a");
    ahref.setAttribute("href", "#");
    var ax1 = document.createTextNode("Register");
    ahref1.appendChild(ax1);
    newLi1.appendChild(ahref1);

    var logobox3 = document.createElement("div");
    logobox3.id = "inputs";
    var log3 = document.getElementById("main-box");
    log3.appendChild(logobox3);

    var inp = document.createElement("div");
    var inpText = document.createTextNode("Username");
    inp.appendChild(inpText);
    inp.className = "username-pwd";
    logobox3.appendChild(inp);

    var inpBox = document.createElement("div");
    inpBox.className = "input-boxes";
    logobox3.appendChild(inpBox);

    var input = document.createElement("input");
    input.type = "text";
    input.name = "username";
    input.placeholder = "Your Teamviewer Username";
    input.className = "placeholder"; // set the CSS class
    inpBox.appendChild(input);

    var inp2 = document.createElement("div");
    var inpText2 = document.createTextNode("Password");
    inp2.appendChild(inpText2);
    inp2.className = "username-pwd";
    logobox3.appendChild(inp2);

    var inpBox2 = document.createElement("div");
    inpBox2.className = "input-boxes";
    logobox3.appendChild(inpBox2);
   var input2 = document.createElement("input");
    input2.type = "text";
    input2.name = "username";
    input2.placeholder = "Your Teamviewer Password";
    input2.className = "placeholder"; // set the CSS class
    inpBox2.appendChild(input2);

    var check = document.createElement("div");
    check.className = "checkbox";
    logobox3.appendChild(check);
    var inputCheck = document.createElement("input");
    inputCheck.type = "checkbox";
    inputCheck.checked ="checked";
    inputCheck.name = "keepme";
    check.appendChild(inputCheck);
    var checkText = document.createTextNode("Keep me signed in");
    check.appendChild(checkText);

    var sub = document.createElement("div");
    logobox3.appendChild(sub);
    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Login with Teamviewer";
    sub.appendChild(submit);

    var forgot = document.createElement("div");
    forgot.id = "forgot";
    logobox3.appendChild(forgot);

    var ref = document.createElement("a");
    ref.setAttribute("href", "#");
    var refText = document.createTextNode("Forgot password?");
    ref.appendChild(refText);
    forgot.appendChild(ref);

    console.log(mainDiv);
    console.log(logo);
    console.log(logopic);
    console.log(logotext1);
    console.log(logotext2);
}
load();
function foot() {
    var text = document.createElement("div");
    text.id = "last";
    var newText = document.createTextNode("Teamviewer GmbH Contact Support");
    text.appendChild(newText);
    var position = document.getElementsByTagName("body")[0];
    position.appendChild(text);
    console.log(text);
}
foot();
