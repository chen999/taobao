// JavaScript Document
/*var spans=document.querySelectorAll('#top .pop span')
var lis=document.querySelectorAll('#top .pop li')
for(var i=0;i<spans.length;i++){
    spans[i].index=i;
    spans[i].onclick=function(){
        var cur=this.index;
        var old;
        for(var j=0;j<spans.length;j++){
			if(spans[j+1].left==(798+48*j)+"px"){
            	old=j;
            	break;
			}
        }

        if(cur>old){
			for(var k=0;k<=cur;k++){
				lis[k].style.left=k*48+"px";
            	//lis[cur].style.left=cur*48+"px";
			}
        }
        else{
			for(var k=cur+1;k<=old;k++)
				lis[k].style.left=(750+48*k)+"px";
            	//lis[cur].style.left=cur*48+"px";
        }

    }
}*/

var lis=document.querySelectorAll('#top .pop li');
for(var i=0;i<lis.length;i++) {
    lis[i].index = i;
    lis[i].onclick = function () {
        if(this.className=="current"){
            return;
        }
        var cur = this.index;
        var old;
        for (var j = 0; j < lis.length; j++) {
            if (lis[j].className == "current") {
                old = j;
                break;
            }
        }

        lis[cur].style.width = 798 + "px";
        lis[cur].style.marginTop = 0 + "px";
        lis[cur].className = "current";
        lis[old].style.width = 48 + "px";
        lis[old].style.marginTop = -1 + "px";
        lis[old].className="";

    }
}

var divs=document.querySelectorAll('#content .store li div');
for(var i=0;i<divs.length;i++){
    divs[i].now=i;
    divs[i].onmouseenter=function(){
		if(this.className=="current"){
			return;
		}
		var cur=this.now;
		var old;
		for(var j=0;j<divs.length;j++){
			if(divs[j].className=="current"){
				old=j;
				break;
			}
        }
        //console.log(old,cur);
        divs[cur].style.background="url('images/cover-bg.jpg') no-repeat  center 284px rgba(0,0,0,0.3)";
        divs[cur].className="current";
        divs[old].style.background='';
        divs[old].className="";

    }
}

var bdivs=document.querySelectorAll('#main .store li div');
for(var i=0;i<bdivs.length;i++){
    bdivs[i].now=i;
    bdivs[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.now;
		var old;
		for(var j=0;j<bdivs.length;j++){
			if(bdivs[j].className=="current"){
				old=j;
				break;
			}
        }
        //console.log(old,cur);
        bdivs[cur].style.background="url('images/cover2-bg.jpg') no-repeat  9px 284px rgba(0,0,0,0.3)";
        bdivs[cur].className="current";
        bdivs[old].style.background='';
        bdivs[old].className="";

    }
}

var asOne=document.querySelectorAll('#casual li a');
var imgsOne=document.querySelectorAll('#casual li a img');
for(var i=0;i<asOne.length;i++){
	    asOne[i].index=i;
	    asOne[i].onmouseenter=function(){
			if(this.className=="current"){
				return;
			}
			var cur=this.index;
			var old;
			for(var j=0;j<asOne.length;j++){
				if(asOne[j].className=="current"){
					old=j;
					break;
				}
			}
			asOne[cur].style.margin="-2px 0 0 -2px";
			asOne[cur].style.border="2px #ee9d83f solid";
			imgsOne[cur].style.width=188+"px";
			imgsOne[cur].style.height=353+"px";
			asOne[cur].className="current";
			asOne[old].style.margin='';
			asOne[old].style.border='';
			imgsOne[old].style.width=190+"px";
			imgsOne[old].style.height=355+"px";
			asOne[old].className='';
	}
}

var asTwo=document.querySelectorAll('#gentle li a');
var imgsTwo=document.querySelectorAll('#gentle li a img');
for(var i=0;i<asTwo.length;i++){
	asTwo[i].index=i;
	asTwo[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<asTwo.length;j++){
			if(asTwo[j].className=="current"){
				old=j;
				break;
			}
		}
		asTwo[cur].style.margin="-2px 0 0 -2px";
		asTwo[cur].style.border="2px #ee9d83f solid";
		imgsTwo[cur].style.width=188+"px";
		imgsTwo[cur].style.height=353+"px";
	    asTwo[cur].className="current";
		asTwo[old].style.margin='';
		asTwo[old].style.border='';
		imgsTwo[old].style.width=190+"px";
		imgsTwo[old].style.height=355+"px";
		asTwo[old].className='';
	}
}

var asThree=document.querySelectorAll('#office li a');
var imgsThree=document.querySelectorAll('#office li a img');
for(var i=0;i<asThree.length;i++){
	asThree[i].index=i;
	asThree[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<asThree.length;j++){
			if(asThree[j].className=="current"){
				old=j;
				break;
			}
		}
		asThree[cur].style.margin="-2px 0 0 -2px";
		asThree[cur].style.border="2px #ee9d83f solid";
		imgsThree[cur].style.width=188+"px";
		imgsThree[cur].style.height=353+"px";
	    asThree[cur].className="current";
		asThree[old].style.margin='';
		asThree[old].style.border='';
		imgsThree[old].style.width=190+"px";
		imgsThree[old].style.height=355+"px";
		asThree[old].className='';
	}
}

var asFour=document.querySelectorAll('#sport li a');
var imgsFour=document.querySelectorAll('#sport li a img');
for(var i=0;i<asFour.length;i++){
	asFour[i].index=i;
	asFour[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<asFour.length;j++){
			if(asFour[j].className=="current"){
				old=j;
				break;
			}
		}
		asFour[cur].style.margin="-2px -2px 0 0";
		asFour[cur].style.border="2px #ee9d83f solid";
		imgsFour[cur].style.width=188+"px";
		imgsFour[cur].style.height=353+"px";
	    asFour[cur].className="current";
		asFour[old].style.margin='';
		asFour[old].style.border='';
		imgsFour[old].style.width=190+"px";
		imgsFour[old].style.height=355+"px";
		asFour[old].className='';
	}
}

var asFive=document.querySelectorAll('#england li a');
var imgsFive=document.querySelectorAll('#england li a img');
for(var i=0;i<asFive.length;i++){
	asFive[i].index=i;
	asFive[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<asFive.length;j++){
			if(asFive[j].className=="current"){
				old=j;
				break;
			}
		}
		asFive[cur].style.margin="-2px -2px 0 0";
		asFive[cur].style.border="2px #ee9d83f solid";
		imgsFive[cur].style.width=188+"px";
		imgsFive[cur].style.height=353+"px";
	    asFive[cur].className="current";
		asFive[old].style.margin='';
		asFive[old].style.border='';
		imgsFive[old].style.width=190+"px";
		imgsFive[old].style.height=355+"px";
		asFive[old].className='';
	}
}

var asSix=document.querySelectorAll('#new-girl li a');
var imgsSix=document.querySelectorAll('#new-girl li a img');
for(var i=0;i<asSix.length;i++){
	asSix[i].index=i;
	asSix[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<asSix.length;j++){
			if(asSix[j].className=="current"){
				old=j;
				break;
			}
		}
		asSix[cur].style.margin="0 -2px -4px 0";
		asSix[cur].style.border="2px #5c29c4 solid";
		imgsSix[cur].style.width=188+"px";
		imgsSix[cur].style.height=306+"px";
	    asSix[cur].className="current";
		asSix[old].style.margin='';
		asSix[old].style.border='';
		imgsSix[old].style.width=190+"px";
		imgsSix[old].style.height=310+"px";
		asSix[old].className='';
	}
}


var basOne=document.querySelectorAll('#simple li a');
var bimgsOne=document.querySelectorAll('#simple li a img');
for(var i=0;i<basOne.length;i++){
	    basOne[i].index=i;
	    basOne[i].onmouseenter=function(){
			if(this.className=="current"){
				return;
			}
			var cur=this.index;
			var old;
			for(var j=0;j<basOne.length;j++){
				if(basOne[j].className=="current"){
					old=j;
					break;
				}
			}
			basOne[cur].style.margin="-2px 0 0 -2px";
			basOne[cur].style.border="2px #1e5fc3 solid";
			bimgsOne[cur].style.width=188+"px";
			bimgsOne[cur].style.height=353+"px";
			basOne[cur].className="current";
			basOne[old].style.margin='';
			basOne[old].style.border='';
			bimgsOne[old].style.width=190+"px";
			bimgsOne[old].style.height=355+"px";
			basOne[old].className='';
	}
}

var basTwo=document.querySelectorAll('#personal li a');
var bimgsTwo=document.querySelectorAll('#personal li a img');
for(var i=0;i<basTwo.length;i++){
	basTwo[i].index=i;
	basTwo[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<basTwo.length;j++){
			if(basTwo[j].className=="current"){
				old=j;
				break;
			}
		}
		basTwo[cur].style.margin="-2px 0 0 -2px";
		basTwo[cur].style.border="2px #1e5fc3 solid";
		bimgsTwo[cur].style.width=188+"px";
		bimgsTwo[cur].style.height=353+"px";
	    basTwo[cur].className="current";
		basTwo[old].style.margin='';
		basTwo[old].style.border='';
		bimgsTwo[old].style.width=190+"px";
		bimgsTwo[old].style.height=355+"px";
		basTwo[old].className='';
	}
}

var basThree=document.querySelectorAll('#business li a');
var bimgsThree=document.querySelectorAll('#business li a img');
for(var i=0;i<basThree.length;i++){
	basThree[i].index=i;
	basThree[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<basThree.length;j++){
			if(basThree[j].className=="current"){
				old=j;
				break;
			}
		}
		basThree[cur].style.margin="-2px 0 0 -2px";
		basThree[cur].style.border="2px #1e5fc3 solid";
		bimgsThree[cur].style.width=188+"px";
		bimgsThree[cur].style.height=353+"px";
	    basThree[cur].className="current";
		basThree[old].style.margin='';
		basThree[old].style.border='';
		bimgsThree[old].style.width=190+"px";
		bimgsThree[old].style.height=355+"px";
		basThree[old].className='';
	}
}

var basFour=document.querySelectorAll('#comfort li a');
var bimgsFour=document.querySelectorAll('#comfort li a img');
for(var i=0;i<basFour.length;i++){
	basFour[i].index=i;
	basFour[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<basFour.length;j++){
			if(basFour[j].className=="current"){
				old=j;
				break;
			}
		}
		basFour[cur].style.margin="-2px 0 0 -2px";
		basFour[cur].style.border="2px #1e5fc3 solid";
		bimgsFour[cur].style.width=188+"px";
		bimgsFour[cur].style.height=353+"px";
	    basFour[cur].className="current";
		basFour[old].style.margin='';
		basFour[old].style.border='';
		bimgsFour[old].style.width=190+"px";
		bimgsFour[old].style.height=355+"px";
		basFour[old].className='';
	}
}

var basFive=document.querySelectorAll('#new-boy li a');
var bimgsFive=document.querySelectorAll('#new-boy li a img');
for(var i=0;i<basFive.length;i++){
	basFive[i].index=i;
	basFive[i].onmouseenter=function(){
		if(this.className=="current"){
				return;
		}
		var cur=this.index;
		var old;
		for(var j=0;j<basFive.length;j++){
			if(basFive[j].className=="current"){
				old=j;
				break;
			}
		}
		basFive[cur].style.margin="0 -2px -4px 0";
		basFive[cur].style.border="2px #f4e033 solid";
		bimgsFive[cur].style.width=188+"px";
		bimgsFive[cur].style.height=306+"px";
	    basFive[cur].className="current";
		basFive[old].style.margin='';
		basFive[old].style.border='';
		bimgsFive[old].style.width=190+"px";
		bimgsFive[old].style.height=310+"px";
		basFive[old].className='';
	}
}


