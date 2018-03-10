//**************************************************
// These are the questions and answers for the game.
// This file should be included AFTER the utility.js
// file, which is where the qAndA object is defined.
//**************************************************

// Define the title of the game.
var Title = "寶 劍 練 習 I";

// (Starting Question Value) How much more each question is worth than the previous.
// e.g. if the first question is 100, the next is 200 then 300 then 400...
var SQV = 50;

// The height and width of the answer popup windows.
var PopupWidth = 1280;
var PopupHeight = 800;

// 聖經知多少
var cat1 = new Array(
    new qAndANew(SQV*1, "羅馬書之後的一卷書是什麼？", ["加拉太書", "哥林多前書", "以弗所書", "腓利比書"], 2),
    new qAndANew(SQV*2, "哪卷書被新約作者引用的最多？", ["以賽亞書", "箴言", "詩篇", "但以理書"], 3),
    new qAndANew(SQV*3, "哪一本書最“短氣”，全書不及四百字？", ["約拿書", "約翰二書", "馬拉基書", "彌迦書"], 2),
    new qAndANew(SQV*4, "哪一本書記錄耶穌的比喻最多？", ["路加福音", "馬太福音", "約翰福音", "馬可福音"], 1),
    new qAndANew(SQV*5, "替保羅代筆寫羅馬書的是誰？", ["路加", "該猶", "馬可", "德丟"], 4)
);

// 讀經大考察
var cat2 = new Array(
    new qAndANew(SQV*1, "保羅說凡是被神的靈引導的，都是神的什麽？", ["器皿", "僕人", "朋友", "兒子"], 4),
    new qAndANew(SQV*2, "箴言說：不輕易發怒的，勝過什麽？", ["己心", "勇士", "仇敵", "取城"], 2),
    new qAndANew(SQV*3, "保羅說若順著什麽而行，就不放縱肉體的情欲了？", ["智慧", "聖靈", "真理", "律法"], 2),
    new qAndANew(SQV*4, "耶穌說：“這就是律法和先知的道理。” “這”是什麽？", ["盡心，盡力，盡性愛神", "不要論斷人，免得被論斷", "好樹不能結坏果子；坏樹不能結好果子", "願意人怎樣待你，就要怎樣待人"], 4),
    new qAndANew(SQV*5, "提到人類的罪，保羅說：罪是從一人入了世界，死又是從罪來的，於是死就臨到眾人，因為眾人都犯了罪。這節經文出於: ", [" 哥林多前書4:9", "羅馬書5:12", "以弗所書2:3", "歌羅西書3:15"], 2)
);

// 3)	songs
var cat3 = new Array(
    new qAndA(SQV*1, "<embed src=\"niftyplayer.swf?file=1.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "愛中相遇"),
    new qAndA(SQV*2, "<embed src=\"niftyplayer.swf?file=2.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "每一天我需要你"),
    new qAndA(SQV*3, "<embed src=\"niftyplayer.swf?file=3.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "醫治的愛"),
    new qAndA(SQV*4, "<embed src=\"niftyplayer.swf?file=4.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "日日夜夜"),
    new qAndA(SQV*5, "<embed src=\"niftyplayer.swf?file=5.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "再次將我更新")
);

// 4)	金句比一比
var cat4 = new Array(
    new qAndACloze(SQV*1, "求你_____我們怎樣_____自己的日子，好叫我們得著_________。", ["指教", "數算", "智慧的心"], "---詩篇90:12 "),
    new qAndACloze(SQV*2, "我若能說_____的_____，並_____的_____，卻沒有___，我就成了_____、_____一般。",["萬人", "方言", "天使", "話語", "愛", "鳴的鑼", "響的鈸"], "---哥林多前書 13:1"),
    new qAndACloze(SQV*3, "原來我們不是顧念_____，乃是顧念_____，因為_____的是_____的，_____的是_____的。", ["所見的", "所不見的", "所見的", "暫時", "所不見的", "永遠"], "---哥林多後書 4:18"),
    new qAndACloze(SQV*4, "凡事都不可_____人，唯有_________，要常以為_____。因為_____的，就完全了_____。", ["虧欠", "彼此相愛", "虧欠", "愛人", "律法"], "---羅馬書13:8"),
    new qAndACloze(SQV*5, "因為_____而不_____的，就像_________看自己_________，走後，隨即_____他的_________。", ["聽道", "行道", "人對著鏡子", "本來的面目", "忘了", "相貌如何"], "---雅1:23-24")
                           
);

// 5)   腦筋急轉彎
var cat5 = new Array(
	new qAndA(SQV*1, "世界上除了火車啥車最長？", "塞車"),
	new qAndA(SQV*2, "什麼東西明明是你的，別人卻用的比你多得多？", "你的名字"),
	new qAndA(SQV*3, "兩對父子去買帽子，為什麼只買了三頂？", "三代人"),
	new qAndA(SQV*4, "為什麼關羽比張飛死的早？（四字成語）", "紅顏薄命"),
	new qAndA(SQV*5, "第十一本書（打一成語）", "不可思議（BOOK11）")
);


// Define an array that contains the arrays of questions and answers.
// Don't change this unless you need to add more categories.
var QuestionsAndAnswers = new Array(cat1, cat2, cat3, cat4, cat5);  

// Define the category titles.
var Titles = new Array( "聖經知多少",
						"讀經大考察",
                        "聽曲辨詩歌",
						"金句比一比",				
                        "腦筋急轉彎"
						);

var FinalJeopardyA = "以畫服人----每組派出一個代表上臺接受主持人的命題，再回到組裡用紙筆劃出，讓組員猜出是什麼命題，用時最短的小組獲勝";
var FinalJeopardyQ = "五體投地";


// Define the amount of time given to answer each question.
var TimePerQuestion = 30;

// Define the amount of time given to answer the Final Question.
var TimeForFinalQuestion = 100;

// This will control how many categories and questions 
// per category are displayed on the main page.
var NumCategories = 5;				// How many categories to show.
var NumQuestionsPerCategory = 5;	// How many rows to show.

var DailyDouble = false; 	// If false the DailyDouble question won't be included.
var FinalQuestion = true;	// If false the "Final Question" button won't be displayed.
