//**************************************************
// These are the questions and answers for the game.
// This file should be included AFTER the utility.js
// file, which is where the qAndA object is defined.
//**************************************************

// Define the title of the game.
var Title = "寶 劍 練 習 II";

// (Starting Question Value) How much more each question is worth than the previous.
// e.g. if the first question is 100, the next is 200 then 300 then 400...
var SQV = 100;

// The height and width of the answer popup windows.
var PopupWidth = 1280;
var PopupHeight = 800;

// 聖經知多少
var cat1 = new Array(
    new qAndANew(SQV*1, "主禱文記在聖經哪卷?", ["馬可福音", "馬太福音", "約翰福音", "路加福音"], 2),
    new qAndANew(SQV*2, "以下不屬於先知書的是?", ["瑪拉基書", "以西節書", "歌羅西書", "何西阿書"], 3),
    new qAndANew(SQV*3, "保羅寫的第一封書信是哪一封?", ["腓利比書", "加拉太書", "羅馬書", "以弗所書"], 2),
    new qAndANew(SQV*4, "以色列的由來是?", ["亞伯拉罕受割禮", "雅各與神摔跤", "亞伯拉罕獻以撒", "亞伯拉罕獻以撒"], 2),
    new qAndANew(SQV*5, "門徒稱為基督徒，是從哪裡起首？", ["大馬士革", "以哥念", "安提阿", "耶路撒冷"], 3),
);

// 讀經大考察
var cat2 = new Array(
    new qAndANew(SQV*1, "耶和華以勒是什麼意思？", ["得勝", "保護", "預備", "拯救"], 3),
    new qAndANew(SQV*2, "以下不屬於十誡的是？", ["不可做假見證", "不可在第七天工作", "不可貪奪鄰人財物", "不可交鬼占卜"], 4),
    new qAndANew(SQV*3, "光明所結的3個果子是什麼？", ["仁愛，恩慈，和平", "良善，公義，誠實", "信實，良善，恩慈", "和平，仁愛，公義"], 2),
    new qAndANew(SQV*4, "哪位先知說得著上帝的話語就當食物吃了？", ["但以理", "以利沙", "耶利米", "以賽亞"], 3),
    new qAndANew(SQV*5, "主耶穌說：“我就是道路、真理、生命，若不藉著我，沒有人能到父那麼去”。記載在哪一卷聖經？", ["馬太福音", "馬可福音", "路加福音", "約翰福音"], 4),
);

// 3)	 聖經猜猜猜
var cat3 = new Array(
    new qAndA(SQV*1, "風吹試卷（打聖經一人名） <br><br>", "司提反（試題翻）"),
    new qAndA(SQV*2, "不用權利服人（打聖經一人名）<br><br>", "但以理"),
    new qAndA(SQV*3, "盡全力守護（打聖經一人名）<br><br>", "大卫"),
    new qAndA(SQV*4, "拔河比賽對方勝出（打聖經一人名）<br><br>", "彼拉多"),
    new qAndA(SQV*5, "耶穌現身趕邪靈（打一成語）<br><br>", "神出鬼沒")
);

// 4)	金句比一比
var cat4 = new Array(
    new qAndACloze(SQV*1, "就是在_____中也是______的。因為知道_____生____；____生____；____生____；", ["患難", "歡歡喜喜", "患難", "忍耐", "忍耐", "老練", "老練", "盼望"], "---羅5:3-4"),
    new qAndA(SQV*2, "凡事____、____、____，用愛心____，用和平____，竭力____聖靈所賜________的心", "“凡事<u>謙虛</u>、<u>溫柔</u>、<u>忍耐</u>，用愛心<u>互相寬容</u>，用和平<u>彼此聯絡</u>，竭力<u>保守</u>聖靈所賜<u>合而為一</u>的心。<br>---弗 4:2-3 "),
    new qAndA(SQV*3, "我將這些事告訴你們，是要叫你們______。在世上____；但你們可以___，我們已經_________。", "我將這些事告訴你們，是要叫你們<u>在我裡面有平安</u>。在世上有<u>苦難</u>；但你們可以<u>放心</u>，我們已經<u>勝了世界</u>。<br>---約翰福音16:33 "),
    new qAndA(SQV*4, "就是少年人也要_________，強壯的也必_________，但那_____耶和華的，必_________。他們必_________，他們_____卻不____，_____卻不_____。", "就是少年人也要<u>疲乏困倦</u>，強壯的也必<u>全然跌倒</u>，但那<u>等候</u>耶和華的，必<u>重新得力</u>。他們必<u>如鷹展翅上騰</u>，他們<u>奔跑</u>卻<u>不困倦</u>，<u>行走</u>卻<u>不疲乏</u>。 <br>---以賽亞書40:30"),
    new qAndA(SQV*5, "因有_____為我們而生，有_____賜給我們，_____必擔在他的肩頭上。他名稱為______、_____的神、_____的父、____的君。", "因有<u>一嬰孩</u>為我們而生，有<u>一子</u>賜給我們，<u>政權</u>必擔在他的肩頭上。他名稱為<u>奇妙策士</u>、<u>全能</u>的神、<u>永在</u>的父、<u>和平</u>的君。<br>---以賽亞是9:6 ")
                           
);

// 5)   知識競答題
var cat5 = new Array(
    new qAndANew(SQV*1, "金庸小說《射雕英雄傳》中第一次華山論劍的勝利者是哪一位？", ["王重陽", "黃藥師", "郭靖", "洪七公"], 1),
    new qAndANew(SQV*2, "耶穌誕生時中國處於哪個時代？", ["東周時期", "西漢時期", "秦朝時期", "商朝時期"], 2),
    new qAndANew(SQV*3, "從地球至太陽的距離，光需要走多長時間？", ["6分鐘", "7分鐘", "8分鐘", "9分鐘"], 3),
    new qAndANew(SQV*4, "古人有拼死吃河豚一說，河豚的毒素主要在哪個部分？", ["肝臟", "魚鰭", "大腦", "魚皮"], 3),
    new qAndANew(SQV*5, "請觀察下面數字，找出其中的規律，並填出問號處的數字。<br><br>1 10 3 9 5 8 7 7 9 6 ？", ["13和8", "12和7", "11和5", "10和6"], 3),
);



// Define an array that contains the arrays of questions and answers.
// Don't change this unless you need to add more categories.
var QuestionsAndAnswers = new Array(cat1, cat2, cat3, cat4, cat5);  

// Define the category titles.
var Titles = new Array( "聖經知多少",
						"讀經大考察",
                        "聖經猜猜猜",
						"金句比一比",				
                        "知識競答題"
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
