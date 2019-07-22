 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	nav: true,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 3
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	        	nav: true,
	          items: 4
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// navigation
  var OnePageNavigation = function() {
    var navToggler = $('.site-menu-toggle');
   	$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      e.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        'scrollTop': $(hash).offset().top
      }, 600, 'easeInOutCirc', function(){
        window.location.hash = hash;
      });

    });
  };
  OnePageNavigation();

  var siteScroll = function() {

  	

  	$(window).scroll(function() {

  		var st = $(this).scrollTop();

  		if (st > 100) {
  			$('.js-sticky-header').addClass('shrink');
  		} else {
  			$('.js-sticky-header').removeClass('shrink');
  		}

  	}) 

  };
  siteScroll();

});

/*
-23.6480098,
-46.8175628
*/
// function initMap() {
//   var myLatLng = {lat: -23.6480188, lng: -46.8175828};

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: myLatLng
//   });

//   var marker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Hello World!'
//   });
// }

/*
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3654.7810823132972!2d-46.8175628!3d-23.6480098!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54a7e3ea9805%3A0xa3d787bf2c7ac2bd!2sR.+Poti%2C+188+-+Parque+Pirajussara%2C+Embu+das+Artes+-+SP%2C+05576-100!5e0!3m2!1spt-BR!2sbr!4v1563822670681!5m2!1spt-BR!2sbr" width="800" height="600" frameborder="0" style="border:0" allowfullscreen></iframe>

*/

var DADOS_CLI = null;

function pegaElementosFormAgendamento(){
	var elementos = new Object();
	elementos['nome_completo'] = $("#ag_nome_completo").val().trim();
	elementos['cpf'] = $("#ag_cpf").val().trim();
	elementos['telefone'] = $("#ag_telefone_contato").val().trim();
	elementos['email'] = $('#ag_email_contato').val().trim();
	elementos['modelo_carro'] = $('#ag_modelo_carro').val().trim();
	elementos['placa'] = $('#ag_placa_carro').val().trim();
	
	//Elementos diferentes de input
	elementos['horario'] = $('#ag_horario').val();
	//console.log(elementos['horario']);
	
	elementos['forma_pagamento'] = $('#ag_forma_pagamento').val();


	return elementos
}

function erroFormAgendamento(campo){
	Swal.fire({
		title: 'Erro!',
		text: `O campo "${campo}" não foi preenchido corretamente`,
		type: 'error',
		confirmButtonText: 'Corrigir'
	})
}

function validaForm(){
	var elementos = pegaElementosFormAgendamento();

	if(elementos['nome_completo'] == ""){
		erroFormAgendamento("Nome completo")
		return false
	}
	if(elementos['cpf'] == ""){
		erroFormAgendamento("CPF")
		return false
	}
	if(elementos['telefone'] == ''){
		erroFormAgendamento("Telefone")
		return false
	}

	//Email nao eh obrigatorio
	// if(elementos['email'] == ''){
	// 	erroFormAgendamento("E-mail")
	// 	return false
	// }
	if(elementos['modelo_carro'] == ''){
		erroFormAgendamento("Modelo do carro")
		return false
	}
	if(elementos['placa'] == ''){
		erroFormAgendamento("Placa do carro")
		return false
	}
	if(elementos['horario'] == ''){
		erroFormAgendamento("Horario")
		return false
	}
	if(elementos['horario'] == $('#ag_horario')[0].options[0].text){
		erroFormAgendamento("Horario")
		return false
	}
	if(elementos['forma_pagamento'] == ''){
		erroFormAgendamento("Forma de pagamento")
		return false
	}
	if(elementos['forma_pagamento'] == $('#ag_forma_pagamento')[0].options[0].text){
		erroFormAgendamento("Forma de pagamento")
		return false
	}

	DADOS_CLI = elementos;

	return true
}

var confirmacaoAgendamento = document.querySelector("#confirmacao-agendamento");
confirmacaoAgendamento.addEventListener('click', function(){
	if(validaForm()){
		enviarConfirmacaoAgendamento();
		limparFormulario();
	}else{
		console.log('Preencha os campos necesarios');
	}
}); 

function enviarConfirmacaoAgendamento(){
	fazerReserva(DADOS_CLI)
	console.log('Confirmacao feita para o servico de lava rapido');
		Swal.fire({
			title: 'Sucesso!',
			text: 'Obrigado!! sua hora foi agendada.',
			type: 'success',
			confirmButtonText: 'OK'
		})
}

function limparFormulario(){
	$("#ag_nome_completo").val("");
	$("#ag_cpf").val("");
	$("#ag_telefone_contato").val("");
	$('#ag_email_contato').val("");
	$('#ag_modelo_carro').val("");
	$('#ag_placa_carro').val("");
	$('#ag_horario').val($('#ag_horario')[0].options[0].text);
	$('#ag_forma_pagamento').val($('#ag_forma_pagamento')[0].options[0].text);
}