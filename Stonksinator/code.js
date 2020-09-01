let key = {
	"aa": "o",
	"ae": "e",
	"ah": "a",
	"ao": "ao",
	"aw": "aw",
	"ay": "ay",
	"b": "b",
	"ch": "ch",
	"d": "d",	
	"dh": "dh",
	"eh": "e",
	"er": "er",
	"ey": "e",
	"f": "ph",
	"g": "g",
	"hh": "h",
	"ih": "i",
	"iy": "i",
	"jh": "j",
	"k": "k",
	"l": "l",
	"m": "m",
	"n": "n",
	"ng": "ng",
	"oa": "oa",
	"ow": "ou",
	"oy": "oi",
	"p": "p",
	"r": "r",
	"s": "s",
	"sh": "s",
	"t": "t",
	"th": "th",
	"uh": "oo",
	"uw": "u",
	"v": "b",
	"w": "b",
	"y": "",
	"z": "j",
	"zh": "j"
}

function stonksinator(text){
	let phonemes = phonemer(text);
	let dataArrArr = phonemes.split(" ").map(x => x.split("-"));
	for (let i = 0; i < dataArrArr.length; i++){
		for (let j = 0; j < dataArrArr[i].length; j++){
			dataArrArr[i][j] = key[dataArrArr[i][j]];
		}
		dataArrArr[i] = dataArrArr[i].join('');
	}
	dataArrArr = dataArrArr.join(' ')
	return dataArrArr;
}

function phonemer(text){
	return new RiString(text).get(RiTa.PHONEMES);
}
