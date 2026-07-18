//const { error } = require("node:console");

const users = [

    { id: 101, name: " Ada ", scores: [10, 20, 30] },

    { id: 102, name: "", scores: [5, 0, 15] },

    { id: 103, name: null, scores: [7, 14] },

    { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },

    { id: 105, name: "Grace", scores: [] }

];

function normalizeName(value) {

    if (value === null || typeof value === 'undefined' || value === "") {

        return 'Unknown';
    }
    //دالة trim() وظيفتها ببساطة هي تنظيف النص من الفراغات الزائدة الموجودة
    // في أول النص وآخره، وتتجاهل الفراغات التي في المنتصف.
    let trimmedValue = value.trim();
    if (trimmedValue === "") {
        return 'Unknown';


    }
    return trimmedValue;
}
function averageScore(scores) {
    if (!Array.isArray(scores)) {
        throw new Error("scores must be an array");
    }

    if (scores.length === 0) {
        return null;
    }

    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    let average = sum / scores.length;
    return Math.round(average * 100) / 100;
}
function buildUserSummary(user) {

    if (typeof user !== 'object' || user === null) {
        throw new Error("user must be an object")
    }

    let id = user['id']
    let name = normalizeName(user.name)
    let scores = user.scores;
    let scoreCount = 0;
    let avg = null;
    if (scores && Array.isArray(scores)) {
        scoreCount = scores.length;
        avg = averageScore(scores)

    }
    return {
        id: id,
        name: name,
        scoreCount: scoreCount,
        avg: avg
    };
}
function summarizeUsers(userArray){
if(!Array.isArray(userArray)){
    throw new Error("userArray must be an array")
}
return userArray.map(buildUserSummary)
}

console.log(buildUserSummary(users[0]));
console.log(buildUserSummary(users[3]));
console.log(summarizeUsers(users));
console.log(buildUserSummary(users));

function safeSummarizeUsers(userArray){
    try{
       let result = summarizeUsers(userArray)
       return{ ok: true, data: result };
    }
    catch{
        return { ok: false, error: err.message };
    }
}
function getUserDisplayNameById(userArray, id) {
    
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }

    if (typeof id !== 'number') {
        throw new Error("id must be a number");
    }
   
    let foundUser = userArray.find(function(user) {
        return user.id === id;
    });
    

    if (!foundUser) {
        throw new Error("user not found");
    }
  
    return normalizeName(foundUser.name);
}
// ==========================================
// Starter Data
// ==========================================
const users = [
    { id: 101, name: " Ada ", scores: [10, 20, 30] },
    { id: 102, name: "", scores: [5, 0, 15] },
    { id: 103, name: null, scores: [7, 14] },
    { id: 104, /* name missing on purpose */ scores: [3, 3, 3, 3] },
    { id: 105, name: "Grace", scores: [] }
];

// ==========================================
// Tasks Implementation (1 - 6)
// ==========================================

// Task 1: normalizeName(value)
function normalizeName(value) {
    // التحقق المبدئي لضمان عدم تمرير قيم تسبب انهياراً للدالة عند عمل trim
    if (value === null || typeof value === 'undefined') {
        return 'Unknown';
    }
    
    // تنظيف النص أولاً والاستفادة من دالة trim بشكل مباشر في التحقق التالي
    let trimmedValue = value.trim();
    if (trimmedValue === "") {
        return 'Unknown';
    }
    
    return trimmedValue;
}

// Task 2: averageScore(scores)
function averageScore(scores) {
    if (!Array.isArray(scores)) {
        throw new Error("scores must be an array");
    }
    if (scores.length === 0) {
        return null;
    }
    
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    let average = sum / scores.length;
    return Math.round(average * 100) / 100;
}

// Task 3: buildUserSummary(user)
function buildUserSummary(user) {
    if (typeof user !== 'object' || user === null) {
        throw new Error("user must be an object");
    }

    let id = user['id']; // Bracket notation
    let name = normalizeName(user.name); // Dot notation
    let scores = user.scores;
    
    // قرار التصميم (Safe Fallbacks):
    // يتم تهيئة العداد بـ 0 والمعدل بـ null بشكل افتراضي مسبقاً.
    // في حال كانت مصفوفة العلامات مفقودة (missing) أو ليست مصفوفة حقيقية،
    // سيتجاوز الكود الفحص أدناه ويحتفظ بالقيم الافتراضية بأمان دون التسبب في كراش.
    let scoreCount = 0;
    let avg = null;

    if (scores && Array.isArray(scores)) {
        scoreCount = scores.length;
        avg = averageScore(scores);
    }

    return {
        id: id,
        name: name,
        scoreCount: scoreCount,
        avg: avg
    };
}

// Task 4: summarizeUsers(userArray)
function summarizeUsers(userArray) {
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }
    return userArray.map(buildUserSummary);
}

// Task 5: safeSummarizeUsers(userArray)
function safeSummarizeUsers(userArray) {
    try {
        let result = summarizeUsers(userArray);
        return { ok: true, data: result };
    } catch (err) {
        return { ok: false, error: err.message };
    }
}

// Task 6: getUserDisplayNameById(userArray, id)
function getUserDisplayNameById(userArray, id) {
    if (!Array.isArray(userArray)) {
        throw new Error("userArray must be an array");
    }
    if (typeof id !== 'number') {
        throw new Error("id must be a number");
    }
    
    let foundUser = userArray.find(function(user) {
        return user.id === id;
    });
    
    if (!foundUser) {
        throw new Error("user not found");
    }
    return normalizeName(foundUser.name);
}

// ==========================================
// Required Test Calls
// ==========================================
console.log(normalizeName(" Ada "));               // expected: "Ada"
console.log(normalizeName("   "));                 // expected: "Unknown"
console.log(normalizeName(null));                  // expected: "Unknown"
console.log(averageScore([10, 20, 30]));           // expected: 20
console.log(averageScore([]));                     // expected: null
console.log(buildUserSummary(users[0]));           // expected: { id: 101, name: 'Ada', scoreCount: 3, avg: 20 }
console.log(buildUserSummary(users[3]));           // expected: { id: 104, name: 'Unknown', scoreCount: 4, avg: 3 }
console.log(safeSummarizeUsers(users).ok);         // expected: true
console.log(getUserDisplayNameById(users, 105));   // expected: "Grace"
console.log(safeSummarizeUsers("not an array"));   // expected: { ok: false, error: 'userArray must be an array' }


// ==========================================
// Part C Answers (Conceptual Questions)
// ==========================================
// 1) typeof undefined = "undefined"
//    التفسير: يعبر عن متغير تم حجز مساحة له في الذاكرة ولكن لم يتم تعيين أي قيمة له بعد.
//
// 2) typeof null = "object"
//    التفسير: هذا خطأ تصميمي قديم وشهير في لغة الجافا سكريبت (Legacy Bug) حيث يعامل النظام الـ null ككائن فارغ مفقود.
//
// 3) Why treat "" differently than null/undefined in normalizeName (conceptually)?
//    التفسير المفاهيمي: الـ null والـ undefined يعبران عن "غياب تام للبيانات والقيمة"، وتشغيل أي ميثود عليهما مثل .trim() 
//    سيؤدي فوراً إلى كراش (TypeError). بينما النص الفارغ "" أو المليء بالفراغات "   " هو قيمة موجودة ونوعها نص حقيقي (String) 
//    في الذاكرة، لذا من الآمن ومن المنطقي تمريرها أولاً على .trim() للتأكد من محتواها الفعلي دون الخوف من انهيار البرنامج.