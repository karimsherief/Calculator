var result = document.querySelector("#Result"),
    prevResult = document.querySelector("#prevResult"),
    button = document.querySelectorAll('button'),
    num = 0,
    currentOption = "";

button.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.currentTarget.id=="AC")
            result.innerHTML = '0';
        else if(e.currentTarget.id=="Zero")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML) : result.innerHTML+"0");
        else if(e.currentTarget.id=="One")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+1 : result.innerHTML+"1");
        else if(e.currentTarget.id=="Two")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+2 : result.innerHTML+"2");
        else if(e.currentTarget.id=="Three")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+3 : result.innerHTML+"3");
        else if(e.currentTarget.id=="Four")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+4 : result.innerHTML+"4");
        else if(e.currentTarget.id=="Five")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+5 : result.innerHTML+"5");
        else if(e.currentTarget.id=="Six")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+6 : result.innerHTML+"6");
        else if(e.currentTarget.id=="Seven")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+7 : result.innerHTML+"7");
        else if(e.currentTarget.id=="Eight")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+8 : result.innerHTML+"8");
        else if(e.currentTarget.id=="Nine")
            result.innerHTML = (result.innerHTML == '0' ? parseInt(result.innerHTML)+9 : result.innerHTML+"9");
        else if(e.currentTarget.id=="Dot")
        {
            if(result.innerHTML.indexOf('.')==-1)
                result.innerHTML+='.';
        }
        else if(e.currentTarget.id=="Delete")
        {
            if(result.innerHTML.length===1)
                result.innerHTML = "0";
            else
                result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-1);
        }else if(e.currentTarget.id=="Plus")
        {
            num = parseFloat(result.innerHTML);
            prevResult.innerHTML = result.innerHTML;
            result.innerHTML = "0";
            currentOption='+';
        }else if(e.currentTarget.id=="Divide")
        {
            num = parseFloat(result.innerHTML);
            prevResult.innerHTML = result.innerHTML;
            result.innerHTML = "0";
            currentOption='/';
        }else if(e.currentTarget.id=="Mul")
        {
            num = parseFloat(result.innerHTML);
            prevResult.innerHTML = result.innerHTML;
            result.innerHTML = "0";
            currentOption='x';
        }else if(e.currentTarget.id=="Minus")
        {
            num = parseFloat(result.innerHTML);
            prevResult.innerHTML = result.innerHTML;
            result.innerHTML = "0";
            currentOption='-';
        }else if(e.currentTarget.id=="Equal")
        {
            if(currentOption=='+')
                num += parseFloat(result.innerHTML);
            else if(currentOption == '-')
                num -= parseFloat(result.innerHTML);
            else if(currentOption == '*')
                num *= parseFloat(result.innerHTML);
            else if(currentOption == '/')
                num /= parseFloat(result.innerHTML);
            result.innerHTML = num.toString();  
            prevResult.innerHTML = "";
        }
                
        
    });
});