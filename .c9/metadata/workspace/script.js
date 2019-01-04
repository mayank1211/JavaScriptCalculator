{"filter":false,"title":"script.js","tooltip":"/script.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":77,"column":1},"action":"insert","lines":["function getHistory(){","\treturn document.getElementById(\"history-value\").innerText;","}","function printHistory(num){","\tdocument.getElementById(\"history-value\").innerText=num;","}","function getOutput(){","\treturn document.getElementById(\"output-value\").innerText;","}","function printOutput(num){","\tif(num==\"\"){","\t\tdocument.getElementById(\"output-value\").innerText=num;","\t}","\telse{","\t\tdocument.getElementById(\"output-value\").innerText=getFormattedNumber(num);","\t}\t","}","function getFormattedNumber(num){","\tif(num==\"-\"){","\t\treturn \"\";","\t}","\tvar n = Number(num);","\tvar value = n.toLocaleString(\"en\");","\treturn value;","}","function reverseNumberFormat(num){","\treturn Number(num.replace(/,/g,''));","}","var operator = document.getElementsByClassName(\"operator\");","for(var i =0;i<operator.length;i++){","\toperator[i].addEventListener('click',function(){","\t\tif(this.id==\"clear\"){","\t\t\tprintHistory(\"\");","\t\t\tprintOutput(\"\");","\t\t}","\t\telse if(this.id==\"backspace\"){","\t\t\tvar output=reverseNumberFormat(getOutput()).toString();","\t\t\tif(output){//if output has a value","\t\t\t\toutput= output.substr(0,output.length-1);","\t\t\t\tprintOutput(output);","\t\t\t}","\t\t}","\t\telse{","\t\t\tvar output=getOutput();","\t\t\tvar history=getHistory();","\t\t\tif(output==\"\"&&history!=\"\"){","\t\t\t\tif(isNaN(history[history.length-1])){","\t\t\t\t\thistory= history.substr(0,history.length-1);","\t\t\t\t}","\t\t\t}","\t\t\tif(output!=\"\" || history!=\"\"){","\t\t\t\toutput= output==\"\"?output:reverseNumberFormat(output);","\t\t\t\thistory=history+output;","\t\t\t\tif(this.id==\"=\"){","\t\t\t\t\tvar result=eval(history);","\t\t\t\t\tprintOutput(result);","\t\t\t\t\tprintHistory(\"\");","\t\t\t\t}","\t\t\t\telse{","\t\t\t\t\thistory=history+this.id;","\t\t\t\t\tprintHistory(history);","\t\t\t\t\tprintOutput(\"\");","\t\t\t\t}","\t\t\t}","\t\t}","\t\t","\t});","}","var number = document.getElementsByClassName(\"number\");","for(var i =0;i<number.length;i++){","\tnumber[i].addEventListener('click',function(){","\t\tvar output=reverseNumberFormat(getOutput());","\t\tif(output!=NaN){ //if output is a number","\t\t\toutput=output+this.id;","\t\t\tprintOutput(output);","\t\t}","\t});","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":837,"scrollleft":0,"selection":{"start":{"row":77,"column":1},"end":{"row":77,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1546523620176,"hash":"2622eb0dd83d913c2638a60e42aefdf4d28100a5"}