$(document).ready(function() {
  $('.panel-heading a').on('click', function(event){
    if ($(this).parent().parent().find('.panel-body').hasClass('active')){
      debugger
      $(this).parent().parent().find('.panel-body').removeClass('active');
    }
  	$('.panel-body').removeClass('active')
  	$(this).parent().parent().find('.panel-body').addClass('active')
  	$(this).parent().parent().find('.panel-body').addClass("animated fadeIn");
  })

  $('a.navname').on('click', function(){
  	$parent = $('a.navname').parent().removeClass('active')
  	$(this).parent().addClass('active')
  	var $li = $(this).parent();
  	if ($li.attr('id') == 'home'){
  		$("[id$=_main").css('display','none');
  		$("#index_main").css('display', 'block');
  	}
  	if ($li.attr('id') == 'resume'){
  		$("[id$=_main").css('display','none');
  		$("#resume_main").css('display', 'block');
  	}
  	if ($li.attr('id') == 'blog'){
  		$("[id$=_main").css('display','none');
  		$("#blog_main").css('display', 'block');
  	}
  	if ($li.attr('id') == 'projects'){
  		$("[id$=_main").css('display','none');
  		$("#projects_main").css('display', 'block');
  	}
  })

});
