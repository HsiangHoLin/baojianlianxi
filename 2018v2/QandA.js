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

// 1)	 聖經知多少
var cat1 = new Array(
    new qAndANew(SQV*1, "以色列人住在埃及共多少年才由摩西帶領離開？", ["400", "410", "420", "430"], 4),
    new qAndANew(SQV*2, "聖經第二長是哪卷書？", ["以賽亞書", "以西結書", "馬拉基書", "耶利米書"], 1),
    new qAndANew(SQV*3, "諾亞入方舟時年多少歲？他在方舟裏共度了多少天？", ["500歲，360天", "550歲, 365天", "600歲, 370天", "650歲, 375天"], 3),
    new qAndANew(SQV*4, "按歷史年代，哪一本書是舊約最後一本書？", ["尼希米記", "約伯記", "馬拉基書", "耶利米書"], 1),
    new qAndANew(SQV*5, "路加所記載的“主禱文”跟馬太所記的有何不同？", ["路加所記的較短", "路加所記的較長", "路加所記的文法不同", "路加所記的最後一句不同"], 1)
);

// 2)	 讀經大考察
var cat2 = new Array(
    new qAndANew(SQV*1, "保羅說神在教會所設立的，第一是什麽？", ["先知", "使徒", "執事", "教師"], 2),
    new qAndANew(SQV*2, "在美門口，是哪兩位使徒讓素來瘸腿的人起來行走？", ["彼得和雅各", "彼得和腓力 ", "彼得和約翰", "彼得和安得烈"], 3), 
    new qAndANew(SQV*3, "神的國不在乎吃喝，只在乎什麽？", ["信實、和平並聖經中的真理", "公義、和平並聖靈中的喜樂", "公義、仁愛並謹守的心", "公義、恩慈並喜樂的心"], 2),
    new qAndANew(SQV*4, "有好幾篇詩篇是大衛在躲避掃羅追殺時所寫的，你也可以從下面哪本書讀到這些事蹟？", ["耶利米哀歌", "歷代志上", "撒母耳記上", "士師記"], 3),
    new qAndANew(SQV*5, "經文「你們所遇見的試探，無非是人所能受的。神是信實的，必不叫你們受試探過於所能受的；在受試探的時候，總要給你們開一條出路，叫你們能忍受得住。」出自何處？", ["以弗所書6:10", "哥林多前書10:13", "歌羅西書3:21", "哥林多后書11:20"], 2)
);

// 3)	 聖經猜猜猜
var cat3 = new Array(
    new qAndA(SQV*1, "圖片所描述是：<img src=\"01q.jpg\"/><br>", "浪子回頭的比喻, 路加福音15：11-32"),
    new qAndA(SQV*2, "圖片所描述是：<img src=\"02q.jpg\"/><br>", "保羅在往大馬色的道路上遇見主耶穌, 使徒行傳22:6-11"),
    new qAndA(SQV*3, "圖片所描述是：<img src=\"03q.jpg\"/><br>", "雅各冒充兄长以掃，騙取父親以撒的祝福。創世紀27"),
    new qAndA(SQV*4, "站在北極望故鄉（打一聖經地名）", "迦南（家南）"),
    new qAndA(SQV*5, "歸去來兮（猜舊約人名）", "該隱")
);

// 4)	金句比一比
var cat4 = new Array(
    new qAndACloze(SQV*1, "我們都_______，各人_______，耶和華使我們眾人的______都歸在他身上。", ["如羊走迷", "偏行己路", "罪孽"], "---以賽亞書53:6"),
    new qAndACloze(SQV*2, "向著________，要得神在_______裡從上面召我來得的______。", ["標竿直跑", "基督耶穌", "獎賞"], "---腓 3:14"),
    new qAndACloze(SQV*3, "因為他的_____不過是________，他的_____乃是________。一宿雖然有____，早晨便必____。", ["怒氣", "轉眼之間", "恩典", "一生之久", "哭泣", "歡呼"], "---詩篇30:5"),
    new qAndACloze(SQV*4, "因為世人都_____，_____了神的_____；如今卻蒙神的_____，因基督耶穌的____，就白白的____。", ["犯了罪", "虧缺", "榮耀", "恩典", "救贖", "稱義"], "---羅馬書3:23-24"),
    new qAndACloze(SQV*5, "我已經與基督____________，現在活著的__________，乃是____在____________；並且我如今在__________，是因信__________而活，他是____，為我____。", ["同釘十字架", "不再是我", "基督", "我裡面活著", "肉身活著", "神的兒子", "愛我", "舍己"], "---加拉太書2:20 ")
                           
);

// 5)   知識競答題
var cat5 = new Array(
	new qAndANew(SQV*1, "下列河流哪一條是世界流程最長？", ["尼羅河", "長江", "亞馬遜河", "密西西比河"], 1),
	new qAndANew(SQV*2, "美國歷史上第一所高等學府是：", ["斯坦福大學", "哈佛大学", "麻省理工大學", "普林斯頓大學"], 2),
	new qAndANew(SQV*3, "世界上最好的咖啡產於：", ["南非", "巴西", "牙買加", "阿根廷"], 3),
	new qAndANew(SQV*4, "太陽系中自轉最慢的行星是？", ["水星", "金星", "木星", "火星"], 2),
	new qAndANew(SQV*5, "從冰箱裡取出凍肉解凍用什麼方法解凍最好最健康？", ["放到冰塊中", "放到接近50攝氏度的空氣中", "放到接近50攝氏度的熱水中", "放到接近0攝氏度的冷水中"], 4)
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

var FinalJeopardyA = "比手畫腳----每組派出一個代表上臺接受主持人的命題，再回到組裡用肢體語言表達，讓組員猜出是什麼命題，用時最短的小組獲勝";
var FinalJeopardyQ = "杯水車薪";


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
