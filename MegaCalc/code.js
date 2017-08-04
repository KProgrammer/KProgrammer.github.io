////////////////////////////////////////////////////////////////////////////////////////

var InputFractionNumerator1 = document.getElementById('FractionNumerator1');
var InputFractionDenominator1 = document.getElementById('FractionNumerator2');
var InputFractionNumerator2 = document.getElementById('FractionDenominator1');
var InputFractionDenominator2 = document.getElementById('FractionDenominator2');
var OutputFractionNumerator = document.getElementById('OutputNumerator');
var OutputFractionDenominator = document.getElementById('OutputDenominator');
var InputSimplifyNum = document.getElementById('FractionSimplifierNum');
var InputSimplifyDen = document.getElementById('FractionSimplifierDen');
var OutputSimplifyDen = document.getElementById('FractionSimplifierOutputDen');
var OutputSimplifyNum = document.getElementById('FractionSimplifierOutputNum');

function Add(){

	var FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	var FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	var FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	var FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	var FinalOutputDenominator = FractionDenominator1 * FractionDenominator2;
	var FinalOutputNumerator1 = FractionNumerator1 * FractionDenominator2;
	var FinalOutputNumerator2 = FractionNumerator2 * FractionDenominator1;
	var FinalOutputNumerator = FinalOutputNumerator1 + FinalOutputNumerator2;

	OutputFractionDenominator.innerHTML = FinalOutputDenominator;
	OutputFractionNumerator.innerHTML = FinalOutputNumerator;

}

function Subtract(){

	var FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	var FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	var FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	var FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	var FinalOutputDenominator = FractionDenominator1 * FractionDenominator2;
	var FinalOutputNumerator1 = FractionNumerator1 * FractionDenominator2;
	var FinalOutputNumerator2 = FractionNumerator2 * FractionDenominator1;
	var FinalOutputNumerator = FinalOutputNumerator1 - FinalOutputNumerator2;

	OutputFractionDenominator.innerHTML = FinalOutputDenominator;
	OutputFractionNumerator.innerHTML = FinalOutputNumerator;


}

function Multiply(){

	var FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	var FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	var FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	var FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	OutputFractionDenominator.innerHTML = FractionDenominator1 * FractionDenominator2;
	OutputFractionNumerator.innerHTML = FractionNumerator1 * FractionNumerator2;

}

function Divide(){

	var FractionNumerator1 = parseInt(InputFractionNumerator1.value);
	var FractionDenominator1 = parseInt(InputFractionDenominator1.value);
	var FractionNumerator2 = parseInt(InputFractionNumerator2.value);
	var FractionDenominator2 = parseInt(InputFractionDenominator2.value);

	OutputFractionDenominator.innerHTML = FractionDenominator1 * FractionNumerator2;
	OutputFractionNumerator.innerHTML = FractionDenominator2 * FractionNumerator1;

}

function GCD(x, y) {

	return x == 0 ? y : GCD(y % x, x);

}

function Simplify(){

	var SimplifyNum = InputSimplifyNum.value;
	var SimplifyDen = InputSimplifyDen.value;

	//x, y
	var x = parseInt(SimplifyNum);
	var y = parseInt(SimplifyDen);

	var dividend = 0;
	var divisor = 0;
	

	if (x > y){

		dividend = x;
		divisor = y;

	} else {

		dividend = y;
		divisor = x;

	}

	var HCF = GCD(dividend, divisor);
	
	OutputSimplifyNum.innerHTML = x / HCF;
	OutputSimplifyDen.innerHTML = y / HCF; 

		
	
	
}
///////////////////////////////////////////////////////////////////////////////////////////
/************************************************************************************************************ */
function ChooseTheEquationOfMotion(){

	var WhatToShow = "";

	var VPhysicsEquationsSelector = document.getElementById('v').checked;
	var UPhysicsEquationsSelector = document.getElementById('u').checked;
	var APhysicsEquationsSelector = document.getElementById('a').checked;
	var TPhysicsEquationsSelector = document.getElementById('t').checked;
	var SPhysicsEquationsSelector = document.getElementById('s').checked;

	if (VPhysicsEquationsSelector && UPhysicsEquationsSelector && APhysicsEquationsSelector && TPhysicsEquationsSelector){

		WhatToShow = "v = u + at";

	} else if (VPhysicsEquationsSelector && UPhysicsEquationsSelector && APhysicsEquationsSelector && SPhysicsEquationsSelector){

		WhatToShow = "v^2 - u^2 = 2as";

	} else if(SPhysicsEquationsSelector && UPhysicsEquationsSelector && TPhysicsEquationsSelector && APhysicsEquationsSelector){

		WhatToShow = "s = ut + (at^2)/2";

	} else if(VPhysicsEquationsSelector && UPhysicsEquationsSelector && TPhysicsEquationsSelector){

		WhatToShow = "(v - u)/t";

	}


	document.getElementById('OutputPhysicsFormulaSelector').innerHTML = WhatToShow;

}
/***********************************************************************************************************************/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function ChemPHCalc(){

	var WhatToShow = "";

	var ChemInput = parseInt(document.getElementById('ChemPHInput').value);
	
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

					if(ChemInput > 12){

						WhatToShow = "Max PH Value Exceeded"

					} else {

						WhatToShow = "Strongly Basic"

					}

					

				}

			}

		}

	}

	document.getElementById('ChemPhOutput').innerHTML = WhatToShow;


}