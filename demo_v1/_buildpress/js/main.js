'use strict';
$( document ).ready(function() {
	/**
	 * remove the attributes and classes from collapsible navbar when the window is resized
	 */
	$( window ).on( 'resize', _.debounce( function () {
		if ( Modernizr.mq( '(min-width: 992px)' ) ) {
			$( '#buildpress-navbar-collapse' )
				.removeAttr( 'style' )
				.removeClass( 'in' );
		}
	}, 500 ) );

	
	$( '[data-toggle="tooltip"]' ).tooltip();



    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: 'pp_default',
		hook: 'data-rel',
		social_tools: ''
    });

/* ---------------------------------------------------
	Isotope Portfolio and Blog
-------------------------------------------------- */

/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.projects-container');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					itemSelector: '.project-post',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('li.active a').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});
		
		// Isotope Filter 
		$filter.find('li').click(function(){
			var selector = $(this).find('a').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					 itemSelector: '.project-post',
					
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
						
					}
				});
			} catch(err) {

			}
			return false;
		});
		$('.filter li').click(function(){
			$('.filter li').removeClass('active');
			$(this).addClass('active');
		});
		 $('.filter a').click(function(){
			$('.filter li').removeClass('active');
			$(this).parent().addClass('active');
		});
} );


	
	
	
    function AjaxFormRequest2(result_id,formMain,url) {
	if(document.getElementById('your-name').value!="" && document.getElementById('your-email').value!=""){
                jQuery.ajax({
                    url:     url,
                    type:     "POST",
                    dataType: "html",
                    data: jQuery("#"+formMain).serialize(), 
                    success: function(response) {
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) {
                document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
                }
             });

             // $(':input','#formMain2')
 				// .not(':button, :submit, :reset, :hidden')
 				// .val('')
 				// .removeAttr('checked')
 				// .removeAttr('selected');
				
				//document.getElementById('your-name').value="";
				}
				else 
				{
				document.getElementById('messegeError2').innerHTML = "<p>Заполните все поля</p>";
				}
    }
	
function AjaxFormRequest(result_id,formMain,url) {
	if(document.getElementById('name').value!="" && document.getElementById('number').value!=""){
                jQuery.ajax({
                    url:     url,
                    type:     "POST",
                    dataType: "html",
                    data: jQuery("#"+formMain).serialize(), 
                    success: function(response) {
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) {
                document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
                }
             });

             $(':input','#formMain')
 				.not(':button, :submit, :reset, :hidden')
 				.val('')
 				.removeAttr('checked')
 				.removeAttr('selected');
				
				}
				else 
				{
				document.getElementById('messegeError').innerHTML = "<p>Заполните все поля</p>";
				}
    }
	
	
	function AjaxFormReload() {
		document.getElementById('messegeResult').innerHTML = "	<div id='messegeError'></div><input type='text' class='form-control' name='name' id='name' placeholder='Введите имя' autofocus required> <br /> <input type='text' class='form-control' name='number' id='number' placeholder='Введите номер' required> <br /> <font style='color: red'>Заказы обрабатываются с 10:00 до 22:00 без выходных</font> <br /> <br /> <input id='button' type='button'  value='Заказать обратный звонок' onclick=\"AjaxFormRequest('messegeResult', 'formMain', 'form.php')\" class='btn btn-default' /> <button class='btn btn-default' type='button' data-dismiss='modal'>Закрыть</button>";
	}