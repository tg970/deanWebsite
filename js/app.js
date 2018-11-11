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

$(() => {
  let $chip = $('.chip');
  $chip.on('click', changeColor)
});
