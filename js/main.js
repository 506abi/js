// var parol = 'salom'
// var userpass = prompt('salomlash')
// if (parol == userpass) {
//     console.log('vsleykum');
// }else{
//     console.log('salomashmading');
// }


var yosh =  prompt('yoshingiz')
if (yosh > 0 && yosh <= 18){
    alert(yosh + ' da' + ' oqishingiz kerak')
}
if (yosh > 18 && yosh <= 50){
    alert('yoshingiz '+ yosh + ' da' + ' ishlashingiz kerak')
}
if (yosh > 50 && yosh <= 59 ){
    alert('yoshingiz '+ yosh + ' da' + ' yaqinda pensiyaga go')
}
if (yosh > 59 && yosh <= 150){
    alert('yoshingiz '+ yosh + ' da' + " pensionerga ohshaysiz hali trik bo'lsangiz :)'")
}else{
    alert("NIMADIR NOTOG'RI KETIB QOLDI BOSHQATAN KIRITING");
}