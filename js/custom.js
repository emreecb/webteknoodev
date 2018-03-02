
$(document).ready(function () {
    $("#BitisTarih").datepicker({ dateFormat: 'DD.MM.YYYY' });
    $("#BitisTarih").datepicker('setDate', new Date());
    $("#BaslangicTarih").datepicker({ dateFormat: 'DD.MM.YYYY' });
    $("#BaslangicTarih").datepicker('setDate', new Date());
});