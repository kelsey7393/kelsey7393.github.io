function rainbowStrobe()
{
	var letterArray = [];

	letterArray.push(document.getElementById("letterK"));
	letterArray.push(document.getElementById("letterE"));
	letterArray.push(document.getElementById("letterL"));
	letterArray.push(document.getElementById("letterS"));
	letterArray.push(document.getElementById("secondE"));
	letterArray.push(document.getElementById("letterY"));
	letterArray.push(document.getElementById("secondS"));
	letterArray.push(document.getElementById("secondK"));
	letterArray.push(document.getElementById("letterA"));
	letterArray.push(document.getElementById("secondA"));
	letterArray.push(document.getElementById("letterR"));
	letterArray.push(document.getElementById("letterV"));
	letterArray.push(document.getElementById("thirdA"));

	var colorArray = [];

	colorArray.push("#ff7295");
	colorArray.push("#fff999");
	colorArray.push("#e6ff7a");
	colorArray.push("#aafff6");
	colorArray.push("#ff8266");
	colorArray.push("#bcffcf");
	colorArray.push("#c5bfff");

	var randNum = Math.floor((Math.random()*7)+1);

	switch(randNum)
	{
		case 1:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[0];
			letterArray[12].style.color = colorArray[0];

			//letterE & letterR
			letterArray[1].style.color = colorArray[1];
			letterArray[10].style.color = colorArray[1];

			//letterL & letterV
			letterArray[2].style.color = colorArray[2];
			letterArray[11].style.color = colorArray[2];

			//letterS & letterA
			letterArray[3].style.color = colorArray[3];
			letterArray[8].style.color = colorArray[3];

			//secondE & secondK
			letterArray[4].style.color = colorArray[4];
			letterArray[7].style.color = colorArray[4];

			//letterY & secondA
			letterArray[5].style.color = colorArray[5];
			letterArray[9].style.color = colorArray[5];

			//second S
			letterArray[6].style.color = colorArray[6];
			break;

		case 2:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[1];
			letterArray[12].style.color = colorArray[1];

			//letterE & letterR
			letterArray[1].style.color = colorArray[2];
			letterArray[10].style.color = colorArray[2];

			//letterL & letterV
			letterArray[2].style.color = colorArray[3];
			letterArray[11].style.color = colorArray[3];

			//letterS & letterA
			letterArray[3].style.color = colorArray[4];
			letterArray[8].style.color = colorArray[4];

			//secondE & secondK
			letterArray[4].style.color = colorArray[5];
			letterArray[7].style.color = colorArray[5];

			//letterY & secondA
			letterArray[5].style.color = colorArray[6];
			letterArray[9].style.color = colorArray[6];

			//second S
			letterArray[6].style.color = colorArray[0];
			break;

		case 3:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[2];
			letterArray[12].style.color = colorArray[2];

			//letterE & letterR
			letterArray[1].style.color = colorArray[3];
			letterArray[10].style.color = colorArray[3];

			//letterL & letterV
			letterArray[2].style.color = colorArray[4];
			letterArray[11].style.color = colorArray[4];

			//letterS & letterA
			letterArray[3].style.color = colorArray[5];
			letterArray[8].style.color = colorArray[5];

			//secondE & secondK
			letterArray[4].style.color = colorArray[6];
			letterArray[7].style.color = colorArray[6];

			//letterY & secondA
			letterArray[5].style.color = colorArray[0];
			letterArray[9].style.color = colorArray[0];

			//second S
			letterArray[6].style.color = colorArray[1];
			break;

		case 4:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[3];
			letterArray[12].style.color = colorArray[3];

			//letterE & letterR
			letterArray[1].style.color = colorArray[4];
			letterArray[10].style.color = colorArray[4];

			//letterL & letterV
			letterArray[2].style.color = colorArray[5];
			letterArray[11].style.color = colorArray[5];

			//letterS & letterA
			letterArray[3].style.color = colorArray[6];
			letterArray[8].style.color = colorArray[6];

			//secondE & secondK
			letterArray[4].style.color = colorArray[0];
			letterArray[7].style.color = colorArray[0];

			//letterY & secondA
			letterArray[5].style.color = colorArray[1];
			letterArray[9].style.color = colorArray[1];

			//second S
			letterArray[6].style.color = colorArray[2];
			break;

		case 5:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[4];
			letterArray[12].style.color = colorArray[4];

			//letterE & letterR
			letterArray[1].style.color = colorArray[5];
			letterArray[10].style.color = colorArray[5];

			//letterL & letterV
			letterArray[2].style.color = colorArray[6];
			letterArray[11].style.color = colorArray[6];

			//letterS & letterA
			letterArray[3].style.color = colorArray[0];
			letterArray[8].style.color = colorArray[0];

			//secondE & secondK
			letterArray[4].style.color = colorArray[1];
			letterArray[7].style.color = colorArray[1];

			//letterY & secondA
			letterArray[5].style.color = colorArray[2];
			letterArray[9].style.color = colorArray[2];

			//second S
			letterArray[6].style.color = colorArray[3];
			break;

		case 6:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[5];
			letterArray[12].style.color = colorArray[5];

			//letterE & letterR
			letterArray[1].style.color = colorArray[6];
			letterArray[10].style.color = colorArray[6];

			//letterL & letterV
			letterArray[2].style.color = colorArray[0];
			letterArray[11].style.color = colorArray[0];

			//letterS & letterA
			letterArray[3].style.color = colorArray[1];
			letterArray[8].style.color = colorArray[1];

			//secondE & secondK
			letterArray[4].style.color = colorArray[2];
			letterArray[7].style.color = colorArray[2];

			//letterY & secondA
			letterArray[5].style.color = colorArray[3];
			letterArray[9].style.color = colorArray[3];

			//second S
			letterArray[6].style.color = colorArray[4];
			break;

		case 7:
			//letterK & thirdA
			letterArray[0].style.color = colorArray[6];
			letterArray[12].style.color = colorArray[6];

			//letterE & letterR
			letterArray[1].style.color = colorArray[0];
			letterArray[10].style.color = colorArray[0];

			//letterL & letterV
			letterArray[2].style.color = colorArray[1];
			letterArray[11].style.color = colorArray[1];

			//letterS & letterA
			letterArray[3].style.color = colorArray[2];
			letterArray[8].style.color = colorArray[2];

			//secondE & secondK
			letterArray[4].style.color = colorArray[3];
			letterArray[7].style.color = colorArray[3];

			//letterY & secondA
			letterArray[5].style.color = colorArray[4];
			letterArray[9].style.color = colorArray[4];

			//second S
			letterArray[6].style.color = colorArray[5];
			break;

		default:
			document.write("Error in rainbow strobe");
	}
};

window.setInterval(rainbowStrobe, 1000);