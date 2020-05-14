let txtBin = document.getElementById('idBin');

txtBin.focus();

function converter() {
  let bin = txtBin.value;
  if (bin) {
    if (RegExp('^[01]+$').test(bin)) {
      let res = parseInt(bin, 2);
      document.getElementById('idDec').value = res;
    } else {
      window.alert('O número digitado não é uum número binário');
    }
  } else {
    window.alert('Nenhum número digitado');
  }
}
