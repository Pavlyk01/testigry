function addmenu() {
    var element = document.getElementById("myDIV");
    element.classList.remove("rightside-menu--close");
}

function removemenu() {
    var element = document.getElementById("myDIV");
    element.classList.add("rightside-menu--close");
}



$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});




$(document).ready(function(){
  $(".button").click(function(){
    var value = $(this).attr("data-filter");
    var elem = $(".elem");
    if(value == "all"){
      $(elem).show("500");
    }
    else{
      $(elem).not("."+value).hide("500");
      $(elem).filter("."+value).show("500");
    }
  });
})


var $page = $('html, body');
$('a[href*="#header"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});

var $page = $('html, body');
$('a[href*="#wrapper-filter" ]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 900);
    return false;
});


$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "form/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});


function onEntry(entry) {
	entry.forEach(change => {
	  if (change.isIntersecting) {
	   change.target.classList.add('element-show');
	  }
	});
  }
  
  let options = {
	threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
	observer.observe(elm);
  }



