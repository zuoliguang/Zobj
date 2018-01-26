$(function(){

	$('select').comboSelect();

  /**
   * on Change
   */
  
  $('.js-select').change(function(e, v){
      $('.idx').text(e.target.selectedIndex)
      $('.val').text(e.target.value)
  });

  /**
   * Open select
   */
  
  $('.js-select-open').click(function(e){
    $('.js-select').focus()
    e.preventDefault();
  });

  /**
   * Open select
   */
  
  $('.js-select-close').click(function(e){
    $('.js-select').trigger('comboselect:close')
    e.preventDefault();
  });
  
})
