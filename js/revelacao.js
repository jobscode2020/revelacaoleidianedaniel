$(document).ready(function () {

  $("#boy").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(noItsGirl, 2300);

  });

  $("#girl").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(yesItsGirl, 2300);
  });

  $(".boy").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(noItsGirl, 2300);
  });

  $(".girl").click(function () {
    $('#new').modal('show');

    setTimeout(function () {
      $('#new').modal('hide');
    }, 2200);

    setTimeout(yesItsGirl, 2300);
  });

});

function yesItsGirl() {
  $('.card-body').empty().html(`
  <h5 class="text-center">
    <img src="https://media.giphy.com/media/1QjzdzQd2D3Qpxn29P/giphy.gif" style="width:7rem;">
    <img src="https://media.giphy.com/media/ZyupJv9fpknluc04os/giphy.gif" style="width:7rem;">
    <img src="https://media.giphy.com/media/f75AYGwF2ABfzVpLmr/giphy.gif" style="width:13rem;">
  </h5>

  `);
}

function noItsGirl() {
  $('.card-body').empty().html(`
  <h5 class="text-center">
    <img src="https://media.giphy.com/media/xT9Igpm06uM5OJ5lVS/giphy.gif" style="width:3rem;">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img src="https://media.giphy.com/media/xT9Igpm06uM5OJ5lVS/giphy.gif" style="width:3rem;">
    <img src="https://media.giphy.com/media/f75AYGwF2ABfzVpLmr/giphy.gif" style="width:13rem;">
  </h5>
  `);
}
