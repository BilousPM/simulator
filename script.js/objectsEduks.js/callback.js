// ----  Функція зворотнього  виклику ---  (Callback)   ---

const fnA = function (message, callback) {
    console.log(message);

    console.log(callback);
    callback();//визов функціі fnB
};

const fnB = function () {
    console.log("Це лог при визові fnB")
 };

fnA('hi, it is my functions..', fnB);

// --------------------------------------------------------------

