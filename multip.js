function myltipElemArrays(arrOne, arrTwo) {
	if (isEqualRowsToColumnsArrays(arrOne, arrTwo)) {
		var receivedArr = new Array(arrOne.length);
		for (var i = 0; i < arrOne.length; i++) {
			receivedArr[i] = new Array(arrOne.length);
			for (var j = 0; j < arrOne[i].length; j++) {
				receivedArr[i][j] = arrOne[i][j] * arrTwo[j][i];
			}
		}
		return receivedArr;
	}
	document.write("Arrays aren't equal. Please enter equal arrays");
}

function isEqualRowsToColumnsArrays(arrOne, arrTwo) {
	if (arrOne.length !== arrTwo.length) {
		return false;
	}
	for (var i = 0; i < arrOne.length; i++) {
		if (arrOne[i].length !== arrTwo[i].length) {
			return false;
		}
	}
	return true;
}

function testingFuncIsEqual() {
	var inputArrOne = [ [ 2, 3, 4 ], [ 1, 9, 7 ], [ 8, 8, 5 ] ];
	var inputArrTwo = [ [ 5, 7, 5 ], [ 3, 2, 1 ], [ 8, 1, 1 ] ];
	if (isEqualRowsToColumnsArrays(inputArrOne, inputArrTwo)) {
		document.write("Arrays are equal");
	} else {
		document.write("Arrays aren't equal");
	}
}

function testArraysOnMultip() {
	var inputArrOne = [ [ 2, 3, 4 ], [ 1, 9, 7 ], [ 8, 8, 5 ] ];
	var inputArrTwo = [ [ 5, 7, 5 ], [ 3, 2, 1 ], [ 8, 1, 1 ] ];
	var expectedArr = [ [ 10, 9, 32 ], [ 7, 18, 7 ], [ 40, 8, 5 ] ];
	var receivedArr = myltipElemArrays(inputArrOne, inputArrTwo);
	if (expectedArr.toString() == receivedArr.toString()) {
		document.write("function is working good");
	} else {
		document.write("function is working bad");
	}
}
testArraysOnMultip();
