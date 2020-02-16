function nomRev(str) {
    let strRev="";
    for(let i=(str.length-1);i>=0;i--){
        strRev=strRev+str[i];
    }
    return strRev;
}
function verifNomRev(string){
    let nomRe=nomRev(string);
    if(nomRe===string){
        return true;
    }else{
        return false;
    }
}