function beregn() {
    var startKap = $('#start').val();
    var afkast =  $('#afkast').val() / 100;
    var tid = $('#tid').val();
    var res = startKap * Math.pow((1+afkast), tid)
    $('#result').text('Dit resultat er: '+res+'💰');
}

function eks() {
    var startKap = Math.floor(Math.random()*10000)
    var afkast =  Math.random()/20
    var tid = Math.floor(Math.random() * 20)
    var res = startKap * Math.pow((1+afkast), tid)
    $('#start').val(startKap);
    $('#afkast').val(afkast*100);
    $('#tid').val(tid);
    $('#result').text('Dit resultat er: '+res+'💰');
}
