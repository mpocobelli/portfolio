$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $('nav li a').on('click', function(){
   $('#toggle').trigger('click');
});
  });
