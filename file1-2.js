function nomRev(str) {
    let strRev="";
    for(let i=(str.length-1);i>=0;i--){
        strRev=strRev+str[i];
    }
    return strRev;
}
function verifNomRev(string){
    let nomRev=nomRev(string);
    if(nomRev===string){
        return true;
    }else{
        return false;
    }
}