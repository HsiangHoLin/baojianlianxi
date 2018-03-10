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
    new qAndANew(SQV*1, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*2, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*3, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*4, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*5, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
);

// 讀經大考察
var cat2 = new Array(
    new qAndANew(SQV*1, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*2, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*3, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*4, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
    new qAndANew(SQV*5, "聖經居中的書卷是？", ["約拿書", "箴言", "馬拉基書", "彌迦書"], 4),
);

// 3)	songs
var cat3 = new Array(
    new qAndA(SQV*1, "<embed src=\"niftyplayer.swf?file=1.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "凡事都能做"),
    new qAndA(SQV*2, "<embed src=\"niftyplayer.swf?file=2.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "全然為你"),
    new qAndA(SQV*3, "<embed src=\"niftyplayer.swf?file=3.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "盡情的敬拜"),
    new qAndA(SQV*4, "<embed src=\"niftyplayer.swf?file=4.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "耶和華神已掌權"),
    new qAndA(SQV*5, "<embed src=\"niftyplayer.swf?file=5.mp3&as=1\" width=\"165\" height=\"38\" type=\"application/x-shockwave-flash\"\\><br>", "神羔羊配得")
);

// 4)	金句比一比
var cat4 = new Array(
    new qAndACloze(SQV*1, "_____沒有_____是死的，_____沒有_____也是死的。", ["身體", "靈魂", "信心", "行為"], "---雅2:26"),
    new qAndACloze(SQV*2, "_____是活潑的，是有_____的，比一切_____更快，甚至魂與靈，骨節與骨髓，都能_____，連心中的思念和主意，都能_____。", ["神的道", "功效", "兩刃的劍", "刺入剖開", "辨明"], "---來 4:12"),
    new qAndA(SQV*3, "凡勞苦____的人可以到我這裡來，我就使你們____。我心裡_____，你們當負我的軛，學____；這樣，你們心裡就必_____。因為我的軛是____的，我的擔子是____的。", "凡勞苦<u>擔重擔</u>的人可以到我這裡來，我就使你們<u>得安息</u>。我心裡<u>柔和謙卑</u>，你們當負我的軛，學<u>我的樣式</u>；這樣，你們心裡就必<u>得享安息</u>。因為我的軛是<u>容易</u>的，我的擔子是<u>輕省</u>的。<br>--- 馬太福音11:28-30 "),
    new qAndA(SQV*4, "不要___這個世界，只要______而___，叫你們___何為神的_____、_____、____的旨意。", "不要<u>效法</u>這個世界，只要<u>心意更新</u>而<u>變化</u>，叫你們<u>察驗</u>何為神的<u>善良</u>、<u>純全</u>、<u>可喜悅</u>的旨意。 <br>---羅馬書 12:2  "),
    new qAndA(SQV*5, "就是少年人也要_________，強壯的也必_________，但那等候耶和華的，必_________，他們必_________。他們_____卻不_____，_____卻不_____。", "就是少年人也要<u>疲乏困倦</u>，強壯的也必<u>全然跌倒</u>，但那等候耶和華的，必<u>重新得力</u>。他們必<u>如鷹展翅上騰</u>，他們<u>奔跑</u>卻不<u>困倦</u>，<u>行走</u>卻不<u>疲乏</u>。<br>---以賽亞書40:30  ")
                           
);

// 5)   腦筋急轉彎
var cat5 = new Array(
	new qAndA(SQV*1, "怎樣使一隻麻雀安靜下來？<br><br>", "壓它一下<br>因為:鴉雀無聲"),
	new qAndA(SQV*2, "因為有心，寶貝易得（打一詞語）<br><br>", "恩賜"),
	new qAndA(SQV*3, "哪個數位最勤快，哪個數位最懶？ <br><br>", "一不做,二不休"),
	new qAndA(SQV*4, "一隻烏龜，因背著十字架而出了名（打一成語） <br><br>", "實至名歸（十字名龜）"),
	new qAndA(SQV*5, "來了一隻熊（打一成語） <br><br>", "有備而(bear)來")
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

var FinalJeopardyA = "背誦 愛的真諦";
var FinalJeopardyQ = "愛是恒久忍耐，又有恩慈。愛是不嫉妒，不自誇，不張狂，不做害羞的事。不求自己益處，不輕易發怒，不計算別人的惡，不喜歡不義，只喜歡真理。凡事包容，凡事相信，凡事盼望，凡事忍耐。愛是永不止息。<br>---哥林多前書第13:4-8 ";


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
