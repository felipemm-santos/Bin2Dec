let txtBin = document.getElementById('idBin');

txtBin.focus();

txtBin.onkeydown = function (event) {
  const e = event || window.event;
  if (e.which == 13) {
    converter();
  }
};

function converter() {
  let bin = txtBin.value;
  const txtDec = document.getElementById('idDec');

  if (bin) {
    if (RegExp('^[01]+$').test(bin)) {
      let res = parseInt(bin, 2);
      txtDec.value = res;
    } else {
      window.alert('O número digitado não é uum número binário');
      txtDec.value = '';
      txtBin.value = '';
    }
  } else {
    window.alert('Nenhum número digitado');
  }
  txtBin.focus();
  txtBin.select()
}
