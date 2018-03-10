var dom = (document.getElementsByTagName) ? true : false;
var ie5 = (document.getElementsByTagName && document.all) ? true : false;

var CurrentWindow=null;

function getRandom(min,max)
{
   return (Math.round(Math.random()*(max-min)))+min;
}

function selectItem(teamcount, category, row, dd)
{
	var wager=0;
	var id = "b" + category + "" + row;
	var el = document.getElementById(id);
	if (el == null) { alert(id + " not found"); return; }
	// wager = el.firstChild.nodeValue;
	wager = SQV * row;	// TLW -- This value needs to be calculated so a node can be "revisited"
	if (DailyDouble && dd==1)
		wager = prompt('DAILY DOUBLE!!!\nHow much would you like to wager?', wager);

    // TLW -- Changed 800 to 600 to fit in 640x480 for projectors.
    openWindow("QandA.html?teamcount=" + teamcount + "&cat=" + category + "&row="+row + "&amt="+wager, PopupWidth, PopupHeight, 0, 0, 0, 1, 1, 1, 10, 10);
    removeLink(category, row);
}

function finalQuestion(teamcount)
{
    // TLW -- Changed 800 to 600 to fit in 640x480 for projectors.
    openWindow("final.html?teamcount=" + teamcount, PopupWidth, PopupHeight, 0, 0, 0, 1, 1, 1, 10, 10);
}

function incScore(team, amount)
{
	var id = "team" + team;
	var el = document.getElementById(id);
	if (el == null) { alert(id + " not found"); return; }
	var val = parseInt(getInnerText(el));
	el.firstChild.nodeValue = (val + amount);
}

function decScore(team, amount)
{
	incScore(team, 0-amount);	
}


function setScore(team, amount)
{
	var id = "team" + team;
	var el = document.getElementById(id);
	if (el == null) { alert(id + " not found"); return; }
	//var val = parseInt(getInnerText(el));
	el.firstChild.nodeValue = (amount);
}

var MissingLink = "___";

function removeLink(cat, val)
{
	var id = "b" + cat + "" + val;
	var el = document.getElementById(id);
	if (el == null) { alert(id + " not found"); return; }
	el.firstChild.nodeValue=MissingLink;
}

function getInnerText(el) {
	if (ie5) return el.innerText;	//Not needed but it is faster
	
	var str = "";
	
	for (var i=0; i<el.childNodes.length; i++) {
		switch (el.childNodes.item(i).nodeType) {
			case 1: //ELEMENT_NODE
				str += getInnerText(el.childNodes.item(i));
				break;
			case 3:	//TEXT_NODE
				str += el.childNodes.item(i).nodeValue;
				break;
		}
		
	}
	
	return str;
}

function getParent(el, pTagName) {
	if (el == null) return null;
	else if (el.nodeType == 1 && el.tagName.toLowerCase() == pTagName.toLowerCase())	// Gecko bug, supposed to be uppercase
		return el;
	else
		return getParent(el.parentNode, pTagName);
}

function closeWindow()
{
    if (CurrentWindow != null) 
    {
     	CurrentWindow.close();
        CurrentWindow = null;
    }
}

// While this appears to be a function, it is actually a javascript object.
// value, answer and question are it's member variables.
function qAndA(value, a, q)
{
    // Set instance variables for this object.
    this.value = value;
    this.answer = a;
    this.question = q;

    // Add methods to this object.
    this.getValue = getValue;
    this.getQuestion = getQuestion;
    this.getAnswer = getAnswer;
}
function getValue() { return this.value; }
function getQuestion() { return this.question; }
function getAnswer() { return this.answer; }

function newRound(url)
{
	closeWindow();
	//adding parameter into url
	url += "?teamCount=" + teamCount;
	for (var team=1; team <=teamCount; team++)
	{
		var id = "team" + team;
		var el = document.getElementById(id);
		if (el == null) { alert(id + " not found"); return; }
		var val = parseInt(getInnerText(el));
		url += "&team" + team + "=" + val;
	}
	CurrentWindow=window.open(url);
	CurrentWindow.focus();
}


/************************************************************************
// url - The URL of the page to open. Example: "http://scriptasylum.com". 
// w - The width of the window in pixels. 
// h - The height of the window in pixels (doesn't include menubars). 
// tb - Toolbar visible? 1 = yes, 0 = no. 
// stb - Status bar visible? 1 = yes, 0 = no. 
// L - Linkbar visible? 1 = yes, 0 = no. 
// mb - Menubar visible? 1 = yes, 0 = no. 
// sb - Scrollbars visible? 1 = yes, 0 = no. 
// rs - Resizable window? 1 = yes, 0 = no. 
// x - The horizontal position of the window from the left of the screen. 
// y - The vertical position of the window from the top of the screen. 
************************************************************************/
function openWindow(url,w,h,tb,stb,l,mb,sb,rs,x,y)
{
    closeWindow();
    var t=(document.layers)? ',screenX='+x+',screenY='+y: ',left='+x+',top='+y; //A LITTLE CROSS-BROWSER CODE FOR WINDOW POSITIONING
    tb=(tb)?'yes':'no'; stb=(stb)?'yes':'no'; l=(l)?'yes':'no'; mb=(mb)?'yes':'no'; sb=(sb)?'yes':'no'; rs=(rs)?'yes':'no';
    CurrentWindow=window.open(url, 'newWin'+new Date().getTime(), 'scrollbars='+sb+',width='+w+',height='+h+',toolbar='+tb+',status='+stb+',menubar='+mb+',links='+l+',resizable='+rs+t);
    CurrentWindow.focus();
}

function qAndANew(value, desc, aArray, qIdx)
{
    // Set instance variables for this object.
    this.value = value;
    var count = 1;
    for (i = 0; i < aArray.length; ++i) {
    	aArray[i] = count + ". " + aArray[i];
    	count = count + 1;
    }
    this.answer = desc + "<br><br>" + aArray.join("<br>");
    this.question = aArray[qIdx-1];

    // Add methods to this object.
    this.getValue = getValue;
    this.getQuestion = getQuestion;
    this.getAnswer = getAnswer;
}
function qAndACloze(value, a, aArray, ref)
{
    // Set instance variables for this object.
    this.value = value;
    this.answer = a;

    var vec = a.replace(/_+/g,"_");
    this.question = "";
    var used = 0;
    for (i = 0; i < vec.length; ++i) {
    	if (vec[i] == "_" && used < aArray.length) {
    		this.question += "<u>" + aArray[used] + "</u>";
    		used += 1;
    	} else {
    		this.question += vec[i];
    	}
    }
    this.question += "<br>" + ref;
    // Add methods to this object.
    this.getValue = getValue;
    this.getQuestion = getQuestion;
    this.getAnswer = getAnswer;
}

