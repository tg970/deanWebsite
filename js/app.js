//console.log($());

const noColor = (event) => {
  console.log('noColor');
  let $click = $(event.currentTarget);
  $click.removeClass('active');
  $click.off();
  $click.on('click', changeColor);
  $('#steamboat').slideToggle('slow');
}

const changeColor = (event) => {
  console.log('changeColor');
  let $click = $(event.currentTarget);
  $click.addClass('active');
  $click.off();
  $click.on('click', noColor);
  $('#steamboat').slideToggle('slow');
}

function checkKeyPress(e){
  if (e.keyCode == "39") {
    console.log('yep');
    $('#title').addClass( "transform-active" );
    $('.sub-div').addStyle({'display': 'inline'}) // probs not the right syntax, something similar"
  }
}

$(() => {
  let $chip = $('.chip');
  $chip.on('click', changeColor);
  window.addEventListener("keydown", checkKeyPress, false);
});
