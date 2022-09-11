function angka(value){
    document.kalkulator.result.value += value;
}

function hapus(){
    var a= document.kalkulator.result.value;
    document.kalkulator.result.value = a.substr(0, a.length-1);

}
function clrall(){
    document.kalkulator.result.value=" ";
}
function hasil(){
    document.kalkulator.result.value= eval(document.kalkulator.result.value);
}
function persen(){
    document.kalkulator.result.value=eval(document.kalkulator.result.value/100);
}
function tandaBilangan(){
    var a= document.kalkulator.result.value;
    document.kalkulator.result.value= ~a + 1;
}
