let el = (s) => {return document.getElementById(s);}

////////////////////////////////////////////////////////////////////////////////////////

let InputFractionNumerator1 = el('FractionNumerator1');
let InputFractionDenominator1 = el('FractionNumerator2');
let InputFractionNumerator2 = el('FractionDenominator1');
let InputFractionDenominator2 = el('FractionDenominator2');
let OutputFractionNumerator = el('OutputNumerator');
let OutputFractionDenominator = el('OutputDenominator');
let InputSimplifyNum = el('FractionSimplifierNum');
let InputSimplifyDen = el('FractionSimplifierDen');
let OutputSimplifyDen = el('FractionSimplifierOutputDen');
let OutputSimplifyNum = el('FractionSimplifierOutputNum');

function Add(){
	
	let FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	let FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	let FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	let FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	let FinalOutputDenominator = FractionDenominator1 * FractionDenominator2;
	let FinalOutputNumerator1 = FractionNumerator1 * FractionDenominator2;
	let FinalOutputNumerator2 = FractionNumerator2 * FractionDenominator1;
	let FinalOutputNumerator = FinalOutputNumerator1 + FinalOutputNumerator2;

	let Ans = Simplify(true, FinalOutputNumerator, FinalOutputDenominator)

	OutputFractionDenominator.innerHTML = Ans[1];
	OutputFractionNumerator.innerHTML = Ans[0];

}

function Subtract(){

	let FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	let FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	let FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	let FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	let FinalOutputDenominator = FractionDenominator1 * FractionDenominator2;
	let FinalOutputNumerator1 = FractionNumerator1 * FractionDenominator2;
	let FinalOutputNumerator2 = FractionNumerator2 * FractionDenominator1;
	let FinalOutputNumerator = FinalOutputNumerator1 - FinalOutputNumerator2;
	let Ans = Simplify(true, FinalOutputNumerator, FinalOutputDenominator)

	OutputFractionDenominator.innerHTML = Ans[1];
	OutputFractionNumerator.innerHTML = Ans[0];



}

function Multiply(){

	let FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	let FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	let FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	let FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	let Ans = Simplify(true, FractionNumerator1 * FractionNumerator2, FractionDenominator1 * FractionDenominator2)

	OutputFractionDenominator.innerHTML = Ans[1];
	OutputFractionNumerator.innerHTML = Ans[0];

}

function Divide(){

	let FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	let FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	let FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	let FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	let Ans = Simplify(true, FractionDenominator2 * FractionNumerator1, FractionDenominator1 * FractionNumerator2)

	OutputFractionDenominator.innerHTML = Ans[1];
	OutputFractionNumerator.innerHTML = Ans[0];

}

let GCD = (x, y) => { return x == 0 ? y : GCD(y % x, x); }

function Simplify(calc, Num, Den){

	if (!calc){

		let SimplifyNum = InputSimplifyNum.value;
		let SimplifyDen = InputSimplifyDen.value;

		//x, y
		let x = parseInt(SimplifyNum);
		let y = parseInt(SimplifyDen);

		let dividend = 0;
		let divisor = 0;
		

		if (x > y){

			dividend = x;
			divisor = y;

		} else {

			dividend = y;
			divisor = x;

		}

		let HCF = GCD(dividend, divisor);
		
		OutputSimplifyNum.innerHTML = x / HCF;
		OutputSimplifyDen.innerHTML = y / HCF; 

			
		
	}else{
		let x = parseInt(Num);
		let y = parseInt(Den);

		let dividend = 0;
		let divisor = 0;
		

		if (x > y){

			dividend = x;
			divisor = y;

		} else {

			dividend = y;
			divisor = x;

		}

		let HCF = GCD(dividend, divisor);

		return [x/HCF, y/HCF]
		
	}	
}
///////////////////////////////////////////////////////////////////////////////////////////
/************************************************************************************************************ */
function ChooseTheEquationOfMotion(){

	let WhatToShow = "";

	let VPhysicsEquationsSelector = el('v').checked;
	let UPhysicsEquationsSelector = el('u').checked;
	let APhysicsEquationsSelector = el('a').checked;
	let TPhysicsEquationsSelector = el('t').checked;
	let SPhysicsEquationsSelector = el('s').checked;

	if (VPhysicsEquationsSelector && UPhysicsEquationsSelector && APhysicsEquationsSelector && TPhysicsEquationsSelector){

		WhatToShow = "v = u + at";

	} else if (VPhysicsEquationsSelector && UPhysicsEquationsSelector && APhysicsEquationsSelector && SPhysicsEquationsSelector){

		WhatToShow = "v^2 - u^2 = 2as";

	} else if(SPhysicsEquationsSelector && UPhysicsEquationsSelector && TPhysicsEquationsSelector && APhysicsEquationsSelector){

		WhatToShow = "s = ut + (at^2)/2";

	} else if(VPhysicsEquationsSelector && UPhysicsEquationsSelector && TPhysicsEquationsSelector){

		WhatToShow = "(v - u)/t";

	}


	el('OutputPhysicsFormulaSelector').innerHTML = WhatToShow;

}
/***********************************************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ChemPHCalc(){

	let WhatToShow = "";

	let ChemInput = parseInt(el('ChemPHInput').value);
	
	if(ChemInput <= 3){

		WhatToShow = "Strongly Acidic";

	} else {

		if (ChemInput <= 6){

			WhatToShow = "Slightly Acidic";
		} else {

			if(ChemInput == 7){

				WhatToShow = "Neutral";

			} else {

				if(ChemInput <= 10){

					WhatToShow = "Slightly Basic";

				} else {

					if(ChemInput > 14){

						WhatToShow = "Max PH Value Exceeded"

					} else {

						WhatToShow = "Strongly Basic"

					}

					

				}

			}

		}

	}

	el('ChemPhOutput').innerHTML = WhatToShow;


}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SimpleInterest(){

	Answer = el('Answer')

	P = el('P').value
	T = el('T').value
	R = el('R').value
	SI = el('SI').value

	if(P.toString() == ""){

		P = (100 * SI) / (T * R)

		Answer.innerHTML = ( "P = " + P.toString()) + " Rs."

	} else if(R.toString() == ""){

		R = (100 * SI) / (P * T)

		Answer.innerHTML = "R = " + R.toString() + " % per annum"

	} else if(T.toString() == ""){

		T = (100 * SI) / (P * R)

		Answer.innerHTML = "T = " + T.toString() + " Years"

	} else if(SI.toString() == ""){

		SI = (P * T * R) / 100

		Answer.innerHTML = "SI = " + SI.toString() + " Rs."

	}

	Amount = parseInt(P) + parseInt(SI)

	Answer.innerHTML += "			Amount = " + Amount



}
////////////////////////////////Trig////////////////////////////////////////////
