
function countCharacter(jString, sString) {
    if (jString.length > 50 || sString.length > 50) {
        return 'Maximun of string is 50 charater. Please enter again';
    }

    var count = 0;
    var sArray = sString.split('');
    var jArray = [...new Set(jString.split(''))];

    for (var i = 0; i < jArray.length; i++) {
        for (var n = 0; n < sArray.length; n++) {
            if (jArray[i] === sArray[n]) {
                count++;
            }
        }
    }
    return count;
}

