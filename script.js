var audio = new Audio('assets/sentmessage.mp3');
var contactString = `
<div class='social'> 
    <a target='_blank' href='tel:+919931860964'> 
        <div class='socialItem' id='call'>
            <img class='socialItemI' src='images/phone.svg'/>
            <label class='number'>+919931860964</label>
        </div> 
    </a> 
    <a href='mailto:aswinirvm@gmail.com'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/gmail.svg' alt=''>
        </div> 
    </a> 
    <a target='_blank' href='https://github.com/aswini125'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/github.svg' alt=''>
        </div> 
    </a> 
    <a target='_blank' href='https://wa.me/9384631250'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/whatsapp.svg' alt=''>
        </div> 
    </a> 
    <a target='_blank' href='https://www.linkedin.com/in/aswinirvm-65b750300/'> 
        <div class='socialItem'>
            <img class='socialItemI' src='images/linkedin.svg' alt=''>
        </div> 
    </a> 
</div>`;

var resumeString = `
<img src='images/resumeThumbnail.png' class='resumeThumbnail'>
<div class='downloadSpace'>
    <div class='pdfname'>
        <img src='images/pdf.png'>
        <label>Aswini_Rvm_Resume.pdf</label>
    </div>
    <a href='assets/Aswini_Rvm_Resume.pdf' download='Aswini_Rvm_Resume.pdf'>
        <img class='download' src='images/downloadIcon.svg'>
    </a>
</div>`;

var addressString = `
<div class='mapview'>
    <iframe src='https://www.google.com/maps/embed?...' class='map'></iframe>
</div>
<label class='add'>
    <address>
        Chennai, Tamil Nadu, India
    </address>
</label>`;

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes();
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti); }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Aswini Rvm</a>.</span><br><br>I am a Data Analytics enthusiast currently pursuing B.Tech in IT at Dhanalakshmi Srinivasan College of Engineering and Technology 👩🏻‍💻📚<br><br>Send <span class='bold'>'help'</span> to know more about me.");
            }, 2000);
            break;
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to connect with me<br><span class='bold'>'clear'</span> - to clear the conversation.</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I have expertise in:<br><span class='bold'>Python<br>SQL<br>Power BI<br>Data Analysis<br>Data Entry<br>Sales</span></span>");
            break;
        case "education":
            sendTextMessage("Currently pursuing B.Tech in IT (2023-2027) at Dhanalakshmi Srinivasan College of Engineering and Technology.");
            break;
        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey, I couldn't catch that...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
