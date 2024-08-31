$(document).ready(function(){
	var icon_width = $(".ssm_icon").width();
	var inc = 74 - parseInt(icon_width, 10);
	var newinc = (inc / 74) * 100;
	var getbgwidth = 1200 * (newinc/100);
	var bgwidth = 1200 - getbgwidth;
	$(".ssm_icon").css({"background-size":bgwidth+"px"});
	$(".facebook_icon.square").css({"background-position":"0px 0px"});
	$(".facebook_icon.round").css({"background-position":"0px -"+(icon_width)+"px"});
	$(".twitter_icon.square").css({"background-position":"-"+((icon_width)*1)+"px 0px"});
	$(".twitter_icon.round").css({"background-position":"-"+((icon_width)*1)+"px -"+(icon_width)+"px"});
	$(".yelp_icon.square").css({"background-position":"-"+((icon_width)*2)+"px 0px"});
	$(".yelp_icon.round").css({"background-position":"-"+((icon_width)*2)+"px -"+(icon_width)+"px"});
	$(".bbb_icon.square").css({"background-position":"-"+((icon_width)*3)+"px 0px"});
	$(".bbb_icon.round").css({"background-position":"-"+((icon_width)*3)+"px -"+(icon_width)+"px"});
	$(".houzz_icon.square").css({"background-position":"-"+((icon_width)*4)+"px 0px"});
	$(".houzz_icon.round").css({"background-position":"-"+((icon_width)*4)+"px -"+(icon_width)+"px"});
	$(".angieslist_icon.square").css({"background-position":"-"+((icon_width)*5)+"px 0px"});
	$(".angieslist_icon.round").css({"background-position":"-"+((icon_width)*5)+"px -"+(icon_width)+"px"});
	$(".youtube_icon.square").css({"background-position":"-"+((icon_width)*6)+"px 0px"});
	$(".youtube_icon.round").css({"background-position":"-"+((icon_width)*6)+"px -"+(icon_width)+"px"});
	$(".googleplus_icon.square").css({"background-position":"-"+((icon_width)*7)+"px 0px"});
	$(".googleplus_icon.round").css({"background-position":"-"+((icon_width)*7)+"px -"+(icon_width)+"px"});
	$(".cslb_icon.square").css({"background-position":"-"+((icon_width)*8)+"px 0px"});
	$(".cslb_icon.round").css({"background-position":"-"+((icon_width)*8)+"px -"+(icon_width)+"px"});
	$(".gaf_icon.square").css({"background-position":"-"+((icon_width)*9)+"px 0px"});
	$(".gaf_icon.round").css({"background-position":"-"+((icon_width)*9)+"px -"+(icon_width)+"px"});
	$(".tumblr_icon.square").css({"background-position":"-"+((icon_width)*10)+"px 0px"});
	$(".tumblr_icon.round").css({"background-position":"-"+((icon_width)*10)+"px -"+(icon_width)+"px"});
	$(".pintrest_icon.square").css({"background-position":"-"+((icon_width)*11)+"px 0px"});
	$(".pintrest_icon.round").css({"background-position":"-"+((icon_width)*11)+"px -"+(icon_width)+"px"});
	$(".linkedin_icon.square").css({"background-position":"-"+((icon_width)*12)+"px 0px"});
	$(".linkedin_icon.round").css({"background-position":"-"+((icon_width)*12)+"px -"+(icon_width)+"px"});
	$(".instagram_icon.square").css({"background-position":"-"+((icon_width)*13)+"px 0px"});
	$(".instagram_icon.round").css({"background-position":"-"+((icon_width)*13)+"px -"+(icon_width)+"px"});
    $(".thumbtack_icon.square").css({"background-position":"-"+((icon_width)*14)+"px 0px"});
	$(".thumbtack_icon.round").css({"background-position":"-"+((icon_width)*14)+"px -"+(icon_width)+"px"});
	$(".home_advisor_icon.square").css({"background-position":"-"+((icon_width)*15)+"px 0px"});
	$(".home_advisor_icon.round").css({"background-position":"-"+((icon_width)*15)+"px -"+(icon_width)+"px"});
	$(".snap_chat_icon.square").css({"background-position":"0px -"+((icon_width)*2+2)+"px"});
	$(".snap_chat_icon.round").css({"background-position":"-"+(icon_width)+"px -"+((icon_width)*3+2)+"px"});
	setTimeout(function(){ $(".ssm_icon").css({"visibility":"visible"}); },200);
});
$(document).ready(function(e) {
	
	var $sliderFunctionStarted = '';
	if ($sliderFunctionStarted===false) {

	$sliderFunctionStarted = true;
	$(".module_slider_structure_slider_wrap").each(function(){
		var effect = $(this).attr("data-effect");
		var sliderid = $(this).attr("data-sliderid");
		var speed = $(this).attr("data-sliderspeed");
		var width = $(this).attr("data-sliderwidth");
		var elem = $(this);
		$(this).css({"max-width":width+"px"});
		$(this).children(".indi_slide_wrap").css({"max-width":width+"px"});
		$(this).children(".indi_slide_wrap").addClass(effect);
		var cnt = $(this).children(".indi_slide_wrap").length - 1;
		if (effect==='slide') { 
			$(this).children(".indi_slide_wrap").css({"transition":"all cubic-bezier(1,.38,.45,.83) 800ms","-webkit-transition":"all cubic-bezier(1,.38,.45,.83) 800ms","-moz-transition":"all cubic-bezier(1,.38,.45,.83) 800ms","-o-transition":"all cubic-bezier(1,.38,.45,.83) 800ms"}); 
			var interval = self.setInterval(function(){ slide_effect(sliderid,cnt,elem); },speed); 
		}
		if (effect==='fade') { 
			$(this).children(".indi_slide_wrap").css({"transition":"all ease-in-out 1800ms","-webkit-transition":"all ease-in-out 1800ms","-moz-transition":"all ease-in-out 1800ms","-o-transition":"all ease-in-out 1800ms"}); 
			var interval = self.setInterval(function(){ fade_effect(sliderid,cnt,elem); },speed); 
		}

		calculateAspectRatioFit(sliderid);
		if(/iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { setTimeout(function(){ calculateAspectRatioFit(sliderid); },3000); }
		else{ setTimeout(function(){ calculateAspectRatioFit(sliderid); },1000); }
		$(window).resize(function() {
			calculateAspectRatioFit(sliderid);
		});
		
		

	function slide_effect(e,cnt,elem){
		var element = elem.parents(".module_slider_structure_wrap");
		
		var slideId = parseInt($(".visible_slide").attr("data-slideid")) + 1;
		if (slideId>cnt) { slideId = 0; }
		
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").addClass("lift_slide");
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").removeClass("visible_slide");
		setTimeout(function(){
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".lift_slide").addClass("hide_slide");
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".lift_slide").removeClass("lift_slide");
			setTimeout(function(){ $('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".hide_slide").removeClass("hide_slide"); },1900);
		},1700);
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children('.indi_slide_wrap[data-slideid="'+slideId+'"]').addClass("visible_slide");
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children('.indi_slide_wrap[data-slideid="'+slideId+'"]').removeClass("hide_slide");
	}

	function fade_effect(e,cnt,elem){
		var element = elem.parents(".module_slider_structure_wrap");
		
		var slideId = parseInt($(".visible_slide").attr("data-slideid")) + 1;
		if (slideId>cnt) { slideId = 0; }
		
		setTimeout(function(){
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").addClass("lift_slide").css({"opacity":"0","margin-left":"0"}); //marin-left:0;opacity:0;
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").removeClass("visible_slide"); //marin-left:0;z-index:2;
			setTimeout(function(){ 
				$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".fade").removeClass("lift_slide"); 
				setTimeout(function(){ $('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".fade").css({"opacity":"1"}); },1100);
			},2100);
			$('.indi_slide_wrap[data-slideid="'+slideId+'"]').addClass("visible_slide");
			$('.indi_slide_wrap[data-slideid="'+slideId+'"]').removeClass("initital_visible_slide");
		},1800);
		
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children('.indi_slide_wrap[data-slideid="'+slideId+'"]').addClass("initital_visible_slide");
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children('.indi_slide_wrap[data-slideid="'+slideId+'"]').removeClass("hide_slide");
	}	

	function calculateAspectRatioFit(sliderid) {
		$thiselement = $('.module_slider_structure_slider_wrap[data-sliderid="'+sliderid+'"]').children(".indi_slide_wrap").children(".indi_slide_image").children("img");
		$thisWrapper = $('.module_slider_structure_slider_wrap[data-sliderid="'+sliderid+'"]');
        var maxWidth = 2200; // Max width for the image
        var maxHeight = 1200;    // Max height for the image
        var ratio = 0;  // Used for aspect ratio
		//alert("Testing - Max Width: "+maxWidth);
        var width = $thiselement.width();    // Current image width
        var height = $thiselement.height();  // Current image height

        // Check if the current width is larger than the max
        if(width > maxWidth){
            ratio = maxWidth / width;   // get ratio for scaling image
            $thiselement.css({"width": maxWidth}); // Set new width
            $thiselement.css({"height": height * ratio});  // Scale height based on ratio
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }
        // Check if current height is larger than max
        if(height > maxHeight){
            ratio = maxHeight / height; // get ratio for scaling image
            $thiselement.css({"height": maxHeight});   // Set new height
            $thiselement.css({"width": width * ratio});    // Scale width based on ratio
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
		$thisWrapper.css({"height":height+"px"});
	}

  });

	}



});
$(document).ready(function(e) {
	// ======================================
	// Tabs
	// ======================================
	$(".module_tabs_structure_tab_wrap").each(function(){
	$(this).children(".module_tabs_tab").first().addClass("hovered");
	});
	$(".module_tabs_tab").click(function(){
		var tabid = $(this).attr("data-tabid");
		$(this).parents(".module_tabs_structure_tab_wrap").children(".module_tabs_tab").removeClass("hovered");
		$(this).addClass("hovered");
		$(this).parents(".temp_module_wrap").find(".module_tabs_structure_tab_content").hide();
		$(this).parents(".temp_module_wrap").find('.module_tabs_structure_tab_content[data-tabid="'+tabid+'"]').fadeIn();
	});
});
$(document).ready(function () {

    $(".required_field").each(function () {
        if (!$(this).parent().children(".required_field_element").length) {
            $(this).parent().append('<div class="required_field_element">*</div>');
        }
    });


    /*autofill date*/
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = mm + '/' + dd + '/' + yyyy;
    $(".signdate").val(today);


    /*validate email function*/
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }


    $(".captchaSubmitBtn").unbind();
    //$(".captchaSubmitBtn").click(function () {
    $(".captchaSubmitBtn").on("click", function () {


        $this = $(this);
        $origHtml = $this.html();
        buttonLoader($this);
        var error = '';
        var validateErrorColor = '#FF9494';

        function clearBG() {
            $(".required_field").each(function () {
                $(this).parents(".form_field_wrapper").animate({backgroundColor: 'transparent'}, 400);
            });
            $(".form_input_error").html('');
        }

        /*Validate All Required Fields*/
        $errCnt = 0;
        $(this).parents(".module_slider_structure_wrap").find(".required_field").each(function () {
            var inp = $(this).val();
            if (inp.length <= 0) {
                $errCnt = $errCnt + 1;
                $(this).parents(".form_field_wrapper").animate({backgroundColor: '#' + validateErrorColor}, 400);
                setTimeout(function () {
                    clearBG();
                }, 4000);
            }
        });
        /* If form has errors */
        if ($errCnt >= '1') {
            $(this).parents(".module_slider_structure_wrap").find(".form_input_error").html('Error: You have ' + $errCnt + ' empty field(s) above.');
            buttonError($this, $origHtml)
            return false;
        } else {


            var subject = $(this).parents("form").attr("data-emailsubject");

            var elements = [];
            var element_names = [];
            var element_values = [];
            var element_checkbox = [];
            elements.push('Subject:::' + $this.parents("form").attr("data-emailsubject"));
            elements.push('From Email:::' + $this.parents("form").attr("data-fromemail"));
            elements.push('To Email:::' + $this.parents("form").attr("data-toemail").replace(/\,/g, ':_:'));
            var token = $this.parents("form").attr("data-token");
            var referer = $this.parents("form").attr("data-referer");
            if ($this.parents("form").attr("data-thankyoupage")) {
                $thankyoupage = $this.parents("form").attr("data-thankyoupage");
            } else {
                $thankyoupage = '';
            }
            if ($this.parents("form").attr("data-onsubmit")) {
                $onsubmit = $this.parents("form").attr("data-onsubmit");
            } else {
                $onsubmit = 'Thank You Page';
            }

            $this.parents("form").find("input, select, textarea, hidden").each(function (e) {
                if ($.inArray($(this).attr("name"), element_names) == -1 && !$(this).hasClass("ignor")) {
                    element_names.push($(this).attr("name"));
                }
                if ($(this).attr("type") === 'checkbox' || $(this).attr("type") === 'radio') {
                    element_checkbox.push($(this).attr("name"));
                }
            });

            $.each(element_names, function (e, i) {
                var elem = $this.parents("form").find('.form_field_element[name="' + i + '"]');
                console.log("name=" + i + " | ");
                var val = elem.val().replace(/\,/g, ':_:').replace(/\&/g, "and");
                var name = elem.attr("name") + ':::';

                /* Check for Checkboxes */
                if (elem.attr("type") === 'checkbox') {
                    val = '';
                    name = '';
                    $('.form_field_element[name="' + i + '"]').each(function () {
                        if ($(this).prop("checked") === true) {
                            val = val + ':.:' + $(this).val();
                        }
                    });
                    val = i + ':::' + val.slice(3);
                }
                /* Check for Radio Buttons */
                if (elem.attr("type") === 'radio') {
                    val = '';
                    name = '';
                    $('.form_field_element[name="' + i + '"]').each(function () {
                        if ($(this).prop("checked") === true) {
                            val = val + ':.:' + $(this).val();
                        }
                    });
                    val = i + ':::' + val.slice(3);
                }


                elements.push(name + val);
            });


            function onsubmit(el, onsubmit, thankyoupage) {
                console.log(el + ' | ' + onsubmit + ' | ' + thankyoupage);
                if (onsubmit === 'Thank You Page') {
                    el.parents("form").hide();
                    el.parents("form").next(".thank_you_content").fadeIn();
                }
                if (onsubmit === 'Home Page') {
                    window.location.href = "/";
                }
                if (onsubmit === 'Custom Page') {
                    window.location.href = thankyoupage;
                }
            }

            console.log(elements);

            /* Send Form */
            var dataString = '&elements=' + elements + '&mode=submit_form&token=' + token + '&referer=' + referer;


            // Original Simon Willis fuckery
            // $.ajax({
            //     type: "POST",
            //     url: "../scripts/submit_form_temp.php",
            //     data: dataString,
            //     success: function (r + "Original Form") {
            //
            //             console.log(r);
            //             setTimeout(function () {
            //                 buttonFinished($this, $origHtml);
            //                 onsubmit($this, $onsubmit, $thankyoupage);
            //                 //$this.parents("form").hide();
            //                 //$this.parents("form").next(".thank_you_content").fadeIn();
            //             }, 2000);
            //     }
            // });


            // Fixed form -- no concatinating jr high bs.
            var form = $($(this).parents("form"));
            var formData = new FormData(form[0]);
            formData.append('subject', $this.parents("form").attr("data-emailsubject"));
            formData.append('from_email', $this.parents("form").attr("data-fromemail"));
            formData.append('to_email', $this.parents("form").attr("data-toemail").replace(/\,/g, ':_:'));
            formData.append('token', $this.parents("form").attr("data-token"));
            formData.append('referer', referer);

            $.ajax({
                type: "POST",
                url: "../scripts/submit_form.php",
                enctype: 'multipart/form-data',
                processData: false,  // Important!
                contentType: false,
                cache: false,
                data: formData,
                success: function (r) {
                    console.log(r + " | Form Fix");
                    setTimeout(function () {
                        buttonFinished($this, $origHtml);
                        onsubmit($this, $onsubmit, $thankyoupage);
                        //$this.parents("form").hide();
                        //$this.parents("form").next(".thank_you_content").fadeIn();
                    }, 2000);
                }
            });


        }


    });


    $(".reCaptchaVarifyFields").unbind();
    //$(".reCaptchaVarifyFields").click(function () {
    $(".reCaptchaVarifyFields").on("click", function () {
        $this = $(this);
        $origHtml = $this.html();
        buttonLoader($this);
        var error = '';
        var validateErrorColor = '#FF9494';

        function clearBG() {
            $(".required_field").each(function () {
                $(this).parents(".form_field_wrapper").animate({backgroundColor: 'transparent'}, 400);
            });
            $(".form_input_error").html('');
        }

        /*Validate All Required Fields*/
        $errCnt = 0;
        $(this).parents(".module_slider_structure_wrap").find(".required_field").each(function () {
            var inp = $(this).val();
            if (inp.length <= 0) {
                $errCnt = $errCnt + 1;
                $(this).parents(".form_field_wrapper").animate({backgroundColor: '#' + validateErrorColor}, 400);
                setTimeout(function () {
                    clearBG();
                }, 4000);
            }
        });
        /* If form has errors */
        if ($errCnt >= '1') {
            $this.parents(".module_slider_structure_wrap").find(".form_input_error").html('Error: You have ' + $errCnt + ' empty field(s) above.');
            buttonError($this, $origHtml)
            return false;
        } else {

            //$(".reCaptchaSubmitBtn").trigger("click");
            reCaptchaSubmit();
        }
    });


    function reCaptchaSubmit() {

        $("#g-recaptcha-response").addClass("ignor");

        var subject = $this.parents("form").attr("data-emailsubject");

        var elements = [];
        var element_names = [];
        var element_values = [];
        var element_checkbox = [];
        elements.push('Subject:::' + $this.parents("form").attr("data-emailsubject"));
        elements.push('From Email:::' + $this.parents("form").attr("data-fromemail"));
        elements.push('To Email:::' + $this.parents("form").attr("data-toemail").replace(/\,/g, ':_:'));
        elements.push('conid:::' + $this.parents("form").attr("data-conid"));
        var token = $this.parents("form").attr("data-token");
        var referer = $this.parents("form").attr("data-referer");
        if ($this.parents("form").attr("data-thankyoupage")) {
            $thankyoupage = $this.parents("form").attr("data-thankyoupage");
        } else {
            $thankyoupage = '';
        }
        if ($this.parents("form").attr("data-onsubmit")) {
            $onsubmit = $this.parents("form").attr("data-onsubmit");
        } else {
            $onsubmit = 'Thank You Page';
        }

        $this.parents("form").find("input, select, textarea, hidden").each(function (e) {
            if ($.inArray($(this).attr("name"), element_names) == -1 && !$(this).hasClass("ignor")) {
                element_names.push($(this).attr("name"));
            }
            if ($(this).attr("type") === 'checkbox' || $(this).attr("type") === 'radio') {
                element_checkbox.push($(this).attr("name"));
            }
        });

        $.each(element_names, function (e, i) {
            var elem = $this.parents("form").find('.form_field_element[name="' + i + '"]');
            console.log("name=" + i + " | ");
            var val = elem.val().replace(/\,/g, ':_:').replace(/\&/g, "and");
            var name = elem.attr("name") + ':::';

            /* Check for Checkboxes */
            if (elem.attr("type") === 'checkbox') {
                val = '';
                name = '';
                $('.form_field_element[name="' + i + '"]').each(function () {
                    if ($(this).prop("checked") === true) {
                        val = val + ':.:' + $(this).val();
                    }
                });
                val = i + ':::' + val.slice(3);
            }
            /* Check for Radio Buttons */
            if (elem.attr("type") === 'radio') {
                val = '';
                name = '';
                $('.form_field_element[name="' + i + '"]').each(function () {
                    if ($(this).prop("checked") === true) {
                        val = val + ':.:' + $(this).val();
                    }
                });
                val = i + ':::' + val.slice(3);
            }


            elements.push(name + val);
        });


        function onsubmit(el, onsubmit, thankyoupage) {
            console.log(el + ' | ' + onsubmit + ' | ' + thankyoupage);
            if (onsubmit === 'Thank You Page') {
                el.parents("form").hide();
                el.parents("form").next(".thank_you_content").fadeIn();
            }
            if (onsubmit === 'Home Page') {
                window.location.href = "/";
            }
            if (onsubmit === 'Custom Page') {
                console.log(thankyoupage);
                window.location.href = thankyoupage;
            }
        }

        console.log(elements);

        // Original Simon Willis fuckery
        // var dataString = '&elements=' + elements + '&mode=submit_form&token=' + token + '&referer=' + referer;
        //
        // $.ajax({
        //     type: "POST",
        //     url: "../scripts/submit_form_temp.php",
        //     data: dataString,
        //     success: function (r) {
        //         console.log(r);
        //         setTimeout(function () {
        //             buttonFinished($(".g-recaptcha"), $origHtml);
        //             onsubmit($this, $onsubmit, $thankyoupage);
        //             //$this.parents("form").hide();
        //             //$this.parents("form").next(".thank_you_content").fadeIn();
        //         }, 2000);
        //     }
        // });


        // Fixed form .. No Concatination
        var form = $this.parents("form");
        var formData = new FormData(form[0]);

        formData.append('subject', $this.parents("form").attr("data-emailsubject"));
        formData.append('from_email', $this.parents("form").attr("data-fromemail"));
        formData.append('to_email', $this.parents("form").attr("data-toemail").replace(/\,/g, ':_:'));
        formData.append('token', token);
        formData.append('referer', referer);

        $.ajax({
            type: "POST",
            url: "../scripts/submit_form.php",
            enctype: 'multipart/form-data',
            processData: false,  // Important!
            contentType: false,
            cache: false,
            data: formData,
            success: function (r) {
                console.log(r + " | Fixed Form");
                setTimeout(function () {
                    buttonFinished($(".g-recaptcha"), $origHtml);
                    onsubmit($this, $onsubmit, $thankyoupage);
                    //$this.parents("form").hide();
                    //$this.parents("form").next(".thank_you_content").fadeIn();
                }, 2000);
            }
        });


    }


    function buttonLoader(button) {
        console.log(button);
        var buttonWidth = button.width();
        button.html('<div class="form_button_loader" style="width:' + buttonWidth + 'px;"></div>');
    }

    function buttonError(button, origHtml) {
        var buttonWidth = button.width();
        button.html('<div class="form_button_error" style="width:' + buttonWidth + 'px;"></div>');
        setTimeout(function () {
            button.html(origHtml);
        }, 3000);
    }

    function buttonFinished(button, origHtml) {
        var buttonWidth = button.width();
        button.html('<div class="form_button_finished" style="width:' + buttonWidth + 'px;"></div>');
        setTimeout(function () {
            button.html(origHtml);
        }, 3000);
    }

});

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):t(jQuery)}(function(t,e){"use strict";function r(e,r,a,n){for(var o=[],i=0;i<e.length;i++){var s=e[i];if(s){var l=tinycolor(s),c=l.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";c+=tinycolor.equals(r,s)?" sp-thumb-active":"";var f=l.toString(n.preferredFormat||"rgb"),u=b?"background-color:"+l.toRgbString():"filter:"+l.toFilter();o.push('<span title="'+f+'" data-color="'+l.toRgbString()+'" class="'+c+'"><span class="sp-thumb-inner" style="'+u+';" /></span>')}else{var h="sp-clear-display";o.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="'+h+'"></span>').attr("title",n.noColorSelectedText)).html())}}return"<div class='sp-cf "+a+"'>"+o.join("")+"</div>"}function a(){for(var t=0;t<p.length;t++)p[t]&&p[t].hide()}function n(e,r){var a=t.extend({},d,e);return a.callbacks={move:c(a.move,r),change:c(a.change,r),show:c(a.show,r),hide:c(a.hide,r),beforeShow:c(a.beforeShow,r)},a}function o(o,s){function c(){if(W.showPaletteOnly&&(W.showPalette=!0),Dt.text(W.showPaletteOnly?W.togglePaletteMoreText:W.togglePaletteLessText),W.palette){dt=W.palette.slice(0),pt=t.isArray(dt[0])?dt:[dt],gt={};for(var e=0;e<pt.length;e++)for(var r=0;r<pt[e].length;r++){var a=tinycolor(pt[e][r]).toRgbString();gt[a]=!0}}kt.toggleClass("sp-flat",X),kt.toggleClass("sp-input-disabled",!W.showInput),kt.toggleClass("sp-alpha-enabled",W.showAlpha),kt.toggleClass("sp-clear-enabled",Qt),kt.toggleClass("sp-buttons-disabled",!W.showButtons),kt.toggleClass("sp-palette-buttons-disabled",!W.togglePaletteOnly),kt.toggleClass("sp-palette-disabled",!W.showPalette),kt.toggleClass("sp-palette-only",W.showPaletteOnly),kt.toggleClass("sp-initial-disabled",!W.showInitial),kt.addClass(W.className).addClass(W.containerClassName),z()}function d(){function e(e){return e.data&&e.data.ignore?(O(t(e.target).closest(".sp-thumb-el").data("color")),j()):(O(t(e.target).closest(".sp-thumb-el").data("color")),j(),W.hideAfterPaletteSelect?(I(!0),F()):I()),!1}if(g&&kt.find("*:not(input)").attr("unselectable","on"),c(),Bt&&_t.after(Lt).hide(),Qt||jt.hide(),X)_t.after(kt).hide();else{var r="parent"===W.appendTo?_t.parent():t(W.appendTo);1!==r.length&&(r=t("body")),r.append(kt)}y(),Kt.on("click.spectrum touchstart.spectrum",function(e){xt||A(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(_t.is(":disabled")||W.disabled===!0)&&V(),kt.click(l),Tt.change(P),Tt.on("paste",function(){setTimeout(P,1)}),Tt.keydown(function(t){13==t.keyCode&&P()}),Nt.text(W.cancelText),Nt.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),T(),F()}),jt.attr("title",W.clearText),jt.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),Gt=!0,j(),X&&I(!0)}),Et.text(W.chooseText),Et.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),g&&Tt.is(":focus")&&Tt.trigger("change"),N()&&(I(!0),F())}),Dt.text(W.showPaletteOnly?W.togglePaletteMoreText:W.togglePaletteLessText),Dt.on("click.spectrum",function(t){t.stopPropagation(),t.preventDefault(),W.showPaletteOnly=!W.showPaletteOnly,W.showPaletteOnly||X||kt.css("left","-="+(St.outerWidth(!0)+5)),c()}),f(Ht,function(t,e,r){ht=t/it,Gt=!1,r.shiftKey&&(ht=Math.round(10*ht)/10),j()},S,C),f(At,function(t,e){ct=parseFloat(e/nt),Gt=!1,W.showAlpha||(ht=1),j()},S,C),f(Ct,function(t,e,r){if(r.shiftKey){if(!yt){var a=ft*et,n=rt-ut*rt,o=Math.abs(t-a)>Math.abs(e-n);yt=o?"x":"y"}}else yt=null;var i=!yt||"x"===yt,s=!yt||"y"===yt;i&&(ft=parseFloat(t/et)),s&&(ut=parseFloat((rt-e)/rt)),Gt=!1,W.showAlpha||(ht=1),j()},S,C),$t?(O($t),E(),Xt=W.preferredFormat||tinycolor($t).format,w($t)):E(),X&&M();var a=g?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Ot.on(a,".sp-thumb-el",e),qt.on(a,".sp-thumb-el:nth-child(1)",{ignore:!0},e)}function y(){if(G&&window.localStorage){try{var e=window.localStorage[G].split(",#");e.length>1&&(delete window.localStorage[G],t.each(e,function(t,e){w(e)}))}catch(r){}try{bt=window.localStorage[G].split(";")}catch(r){}}}function w(e){if(Y){var r=tinycolor(e).toRgbString();if(!gt[r]&&-1===t.inArray(r,bt))for(bt.push(r);bt.length>vt;)bt.shift();if(G&&window.localStorage)try{window.localStorage[G]=bt.join(";")}catch(a){}}}function _(){var t=[];if(W.showPalette)for(var e=0;e<bt.length;e++){var r=tinycolor(bt[e]).toRgbString();gt[r]||t.push(bt[e])}return t.reverse().slice(0,W.maxSelectionSize)}function x(){var e=q(),a=t.map(pt,function(t,a){return r(t,e,"sp-palette-row sp-palette-row-"+a,W)});y(),bt&&a.push(r(_(),e,"sp-palette-row sp-palette-row-selection",W)),Ot.html(a.join(""))}function k(){if(W.showInitial){var t=Wt,e=q();qt.html(r([t,e],e,"sp-palette-row-initial",W))}}function S(){(0>=rt||0>=et||0>=nt)&&z(),tt=!0,kt.addClass(mt),yt=null,_t.trigger("dragstart.spectrum",[q()])}function C(){tt=!1,kt.removeClass(mt),_t.trigger("dragstop.spectrum",[q()])}function P(){var t=Tt.val();if(null!==t&&""!==t||!Qt){var e=tinycolor(t);e.isValid()?(O(e),j(),I()):Tt.addClass("sp-validation-error")}else O(null),j(),I()}function A(){Z?F():M()}function M(){var e=t.Event("beforeShow.spectrum");return Z?void z():(_t.trigger(e,[q()]),void(J.beforeShow(q())===!1||e.isDefaultPrevented()||(a(),Z=!0,t(wt).on("keydown.spectrum",R),t(wt).on("click.spectrum",H),t(window).on("resize.spectrum",U),Lt.addClass("sp-active"),kt.removeClass("sp-hidden"),z(),E(),Wt=q(),k(),J.show(Wt),_t.trigger("show.spectrum",[Wt]))))}function R(t){27===t.keyCode&&F()}function H(t){2!=t.button&&(tt||(Yt?I(!0):T(),F()))}function F(){Z&&!X&&(Z=!1,t(wt).off("keydown.spectrum",R),t(wt).off("click.spectrum",H),t(window).off("resize.spectrum",U),Lt.removeClass("sp-active"),kt.addClass("sp-hidden"),J.hide(q()),_t.trigger("hide.spectrum",[q()]))}function T(){O(Wt,!0),I(!0)}function O(t,e){if(tinycolor.equals(t,q()))return void E();var r,a;!t&&Qt?Gt=!0:(Gt=!1,r=tinycolor(t),a=r.toHsv(),ct=a.h%360/360,ft=a.s,ut=a.v,ht=a.a),E(),r&&r.isValid()&&!e&&(Xt=W.preferredFormat||r.getFormat())}function q(t){return t=t||{},Qt&&Gt?null:tinycolor.fromRatio({h:ct,s:ft,v:ut,a:Math.round(1e3*ht)/1e3},{format:t.format||Xt})}function N(){return!Tt.hasClass("sp-validation-error")}function j(){E(),J.move(q()),_t.trigger("move.spectrum",[q()])}function E(){Tt.removeClass("sp-validation-error"),D();var t=tinycolor.fromRatio({h:ct,s:1,v:1});Ct.css("background-color",t.toHexString());var e=Xt;1>ht&&(0!==ht||"name"!==e)&&("hex"===e||"hex3"===e||"hex6"===e||"name"===e)&&(e="rgb");var r=q({format:e}),a="";if(Vt.removeClass("sp-clear-display"),Vt.css("background-color","transparent"),!r&&Qt)Vt.addClass("sp-clear-display");else{var n=r.toHexString(),o=r.toRgbString();if(b||1===r.alpha?Vt.css("background-color",o):(Vt.css("background-color","transparent"),Vt.css("filter",r.toFilter())),W.showAlpha){var i=r.toRgb();i.a=0;var s=tinycolor(i).toRgbString(),l="linear-gradient(left, "+s+", "+n+")";g?Rt.css("filter",tinycolor(s).toFilter({gradientType:1},n)):(Rt.css("background","-webkit-"+l),Rt.css("background","-moz-"+l),Rt.css("background","-ms-"+l),Rt.css("background","linear-gradient(to right, "+s+", "+n+")"))}a=r.toString(e)}W.showInput&&Tt.val(a),W.showPalette&&x(),k()}function D(){var t=ft,e=ut;if(Qt&&Gt)Ft.hide(),Mt.hide(),Pt.hide();else{Ft.show(),Mt.show(),Pt.show();var r=t*et,a=rt-e*rt;r=Math.max(-at,Math.min(et-at,r-at)),a=Math.max(-at,Math.min(rt-at,a-at)),Pt.css({top:a+"px",left:r+"px"});var n=ht*it;Ft.css({left:n-st/2+"px"});var o=ct*nt;Mt.css({top:o-lt+"px"})}}function I(t){var e=q(),r="",a=!tinycolor.equals(e,Wt);e&&(r=e.toString(Xt),w(e)),It&&_t.val(r),t&&a&&(J.change(e),_t.trigger("change",[e]))}function z(){Z&&(et=Ct.width(),rt=Ct.height(),at=Pt.height(),ot=At.width(),nt=At.height(),lt=Mt.height(),it=Ht.width(),st=Ft.width(),X||(kt.css("position","absolute"),W.offset?kt.offset(W.offset):kt.offset(i(kt,Kt))),D(),W.showPalette&&x(),_t.trigger("reflow.spectrum"))}function B(){_t.show(),Kt.off("click.spectrum touchstart.spectrum"),kt.remove(),Lt.remove(),p[Jt.id]=null}function L(r,a){return r===e?t.extend({},W):a===e?W[r]:(W[r]=a,"preferredFormat"===r&&(Xt=W.preferredFormat),void c())}function K(){xt=!1,_t.attr("disabled",!1),Kt.removeClass("sp-disabled")}function V(){F(),xt=!0,_t.attr("disabled",!0),Kt.addClass("sp-disabled")}function $(t){W.offset=t,z()}var W=n(s,o),X=W.flat,Y=W.showSelectionPalette,G=W.localStorageKey,Q=W.theme,J=W.callbacks,U=u(z,10),Z=!1,tt=!1,et=0,rt=0,at=0,nt=0,ot=0,it=0,st=0,lt=0,ct=0,ft=0,ut=0,ht=1,dt=[],pt=[],gt={},bt=W.selectionPalette.slice(0),vt=W.maxSelectionSize,mt="sp-dragging",yt=null,wt=o.ownerDocument,_t=(wt.body,t(o)),xt=!1,kt=t(m,wt).addClass(Q),St=kt.find(".sp-picker-container"),Ct=kt.find(".sp-color"),Pt=kt.find(".sp-dragger"),At=kt.find(".sp-hue"),Mt=kt.find(".sp-slider"),Rt=kt.find(".sp-alpha-inner"),Ht=kt.find(".sp-alpha"),Ft=kt.find(".sp-alpha-handle"),Tt=kt.find(".sp-input"),Ot=kt.find(".sp-palette"),qt=kt.find(".sp-initial"),Nt=kt.find(".sp-cancel"),jt=kt.find(".sp-clear"),Et=kt.find(".sp-choose"),Dt=kt.find(".sp-palette-toggle"),It=_t.is("input"),zt=It&&"color"===_t.attr("type")&&h(),Bt=It&&!X,Lt=Bt?t(v).addClass(Q).addClass(W.className).addClass(W.replacerClassName):t([]),Kt=Bt?Lt:_t,Vt=Lt.find(".sp-preview-inner"),$t=W.color||It&&_t.val(),Wt=!1,Xt=W.preferredFormat,Yt=!W.showButtons||W.clickoutFiresChange,Gt=!$t,Qt=W.allowEmpty&&!zt;d();var Jt={show:M,hide:F,toggle:A,reflow:z,option:L,enable:K,disable:V,offset:$,set:function(t){O(t),I()},get:q,destroy:B,container:kt};return Jt.id=p.push(Jt)-1,Jt}function i(e,r){var a=0,n=e.outerWidth(),o=e.outerHeight(),i=r.outerHeight(),s=e[0].ownerDocument,l=s.documentElement,c=l.clientWidth+t(s).scrollLeft(),f=l.clientHeight+t(s).scrollTop(),u=r.offset(),h=u.left,d=u.top;return d+=i,h-=Math.min(h,h+n>c&&c>n?Math.abs(h+n-c):0),d-=Math.min(d,d+o>f&&f>o?Math.abs(o+i-a):a),{top:d,bottom:u.bottom,left:h,right:u.right,width:u.width,height:u.height}}function s(){}function l(t){t.stopPropagation()}function c(t,e){var r=Array.prototype.slice,a=r.call(arguments,2);return function(){return t.apply(e,a.concat(r.call(arguments)))}}function f(e,r,a,n){function o(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.returnValue=!1}function i(t){if(f){if(g&&c.documentMode<9&&!t.button)return l();var a=t.originalEvent&&t.originalEvent.touches&&t.originalEvent.touches[0],n=a&&a.pageX||t.pageX,i=a&&a.pageY||t.pageY,s=Math.max(0,Math.min(n-u.left,d)),b=Math.max(0,Math.min(i-u.top,h));p&&o(t),r.apply(e,[s,b,t])}}function s(r){var n=r.which?3==r.which:2==r.button;n||f||a.apply(e,arguments)!==!1&&(f=!0,h=t(e).height(),d=t(e).width(),u=t(e).offset(),t(c).on(b),t(c.body).addClass("sp-dragging"),i(r),o(r))}function l(){f&&(t(c).off(b),t(c.body).removeClass("sp-dragging"),setTimeout(function(){n.apply(e,arguments)},0)),f=!1}r=r||function(){},a=a||function(){},n=n||function(){};var c=document,f=!1,u={},h=0,d=0,p="ontouchstart"in window,b={};b.selectstart=o,b.dragstart=o,b["touchmove mousemove"]=i,b["touchend mouseup"]=l,t(e).on("touchstart mousedown",s)}function u(t,e,r){var a;return function(){var n=this,o=arguments,i=function(){a=null,t.apply(n,o)};r&&clearTimeout(a),(r||!a)&&(a=setTimeout(i,e))}}function h(){return t.fn.spectrum.inputTypeColorSupport()}var d={beforeShow:s,move:s,change:s,show:s,hide:s,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!0,showInitial:!1,showPalette:!1,showPaletteOnly:!1,hideAfterPaletteSelect:!1,togglePaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",togglePaletteMoreText:"more",togglePaletteLessText:"less",clearText:"Clear Color Selection",noColorSelectedText:"No Color Selected",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1,offset:null},p=[],g=!!/msie/i.exec(window.navigator.userAgent),b=function(){function t(t,e){return!!~(""+t).indexOf(e)}var e=document.createElement("div"),r=e.style;return r.cssText="background-color:rgba(0,0,0,.5)",t(r.backgroundColor,"rgba")||t(r.backgroundColor,"hsla")}(),v=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),m=function(){var t="";if(g)for(var e=1;6>=e;e++)t+="<div class='sp-"+e+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","<div class='sp-palette-button-container sp-cf'>","<button type='button' class='sp-palette-toggle'></button>","</div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",t,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),y="spectrum.id";t.fn.spectrum=function(e,r){if("string"==typeof e){var a=this,n=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=p[t(this).data(y)];if(r){var o=r[e];if(!o)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?a=r.get():"container"==e?a=r.container:"option"==e?a=r.option.apply(r,n):"destroy"==e?(r.destroy(),t(this).removeData(y)):o.apply(r,n)}}),a}return this.spectrum("destroy").each(function(){var r=t.extend({},t(this).data(),e),a=o(this,r);t(this).data(y,a.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=f,t.fn.spectrum.defaults=d,t.fn.spectrum.inputTypeColorSupport=function w(){if("undefined"==typeof w._cachedResult){var e=t("<input type='color'/>")[0];w._cachedResult="color"===e.type&&""!==e.value}return w._cachedResult},t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){var e=t("input[type=color]");e.length&&!h()&&e.spectrum({preferredFormat:"hex6"})},function(){function t(t){var r={r:0,g:0,b:0},n=1,i=!1,s=!1;return"string"==typeof t&&(t=T(t)),"object"==typeof t&&(t.hasOwnProperty("r")&&t.hasOwnProperty("g")&&t.hasOwnProperty("b")?(r=e(t.r,t.g,t.b),i=!0,s="%"===String(t.r).substr(-1)?"prgb":"rgb"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("v")?(t.s=R(t.s),t.v=R(t.v),r=o(t.h,t.s,t.v),i=!0,s="hsv"):t.hasOwnProperty("h")&&t.hasOwnProperty("s")&&t.hasOwnProperty("l")&&(t.s=R(t.s),t.l=R(t.l),r=a(t.h,t.s,t.l),i=!0,s="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=x(n),{ok:i,format:t.format||s,r:D(255,I(r.r,0)),g:D(255,I(r.g,0)),b:D(255,I(r.b,0)),a:n}}function e(t,e,r){return{r:255*k(t,255),g:255*k(e,255),b:255*k(r,255)}}function r(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var a,n,o=I(t,e,r),i=D(t,e,r),s=(o+i)/2;if(o==i)a=n=0;else{var l=o-i;switch(n=s>.5?l/(2-o-i):l/(o+i),o){case t:a=(e-r)/l+(r>e?6:0);break;case e:a=(r-t)/l+2;break;case r:a=(t-e)/l+4}a/=6}return{h:a,s:n,l:s}}function a(t,e,r){function a(t,e,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?t+6*(e-t)*r:.5>r?e:2/3>r?t+(e-t)*(2/3-r)*6:t}var n,o,i;if(t=k(t,360),e=k(e,100),r=k(r,100),0===e)n=o=i=r;else{var s=.5>r?r*(1+e):r+e-r*e,l=2*r-s;n=a(l,s,t+1/3),o=a(l,s,t),i=a(l,s,t-1/3)}return{r:255*n,g:255*o,b:255*i}}function n(t,e,r){t=k(t,255),e=k(e,255),r=k(r,255);var a,n,o=I(t,e,r),i=D(t,e,r),s=o,l=o-i;if(n=0===o?0:l/o,o==i)a=0;else{switch(o){case t:a=(e-r)/l+(r>e?6:0);break;case e:a=(r-t)/l+2;break;case r:a=(t-e)/l+4}a/=6}return{h:a,s:n,v:s}}function o(t,e,r){t=6*k(t,360),e=k(e,100),r=k(r,100);var a=j.floor(t),n=t-a,o=r*(1-e),i=r*(1-n*e),s=r*(1-(1-n)*e),l=a%6,c=[r,i,o,o,s,r][l],f=[s,r,r,i,o,o][l],u=[o,o,s,r,r,i][l];return{r:255*c,g:255*f,b:255*u}}function i(t,e,r,a){var n=[M(E(t).toString(16)),M(E(e).toString(16)),M(E(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function s(t,e,r,a){var n=[M(H(a)),M(E(t).toString(16)),M(E(e).toString(16)),M(E(r).toString(16))];return n.join("")}function l(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s-=e/100,r.s=S(r.s),B(r)}function c(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.s+=e/100,r.s=S(r.s),B(r)}function f(t){return B(t).desaturate(100)}function u(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l+=e/100,r.l=S(r.l),B(r)}function h(t,e){e=0===e?0:e||10;var r=B(t).toRgb();return r.r=I(0,D(255,r.r-E(255*-(e/100)))),r.g=I(0,D(255,r.g-E(255*-(e/100)))),r.b=I(0,D(255,r.b-E(255*-(e/100)))),B(r)}function d(t,e){e=0===e?0:e||10;var r=B(t).toHsl();return r.l-=e/100,r.l=S(r.l),B(r)}function p(t,e){var r=B(t).toHsl(),a=(E(r.h)+e)%360;return r.h=0>a?360+a:a,B(r)}function g(t){var e=B(t).toHsl();return e.h=(e.h+180)%360,B(e)}function b(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+120)%360,s:e.s,l:e.l}),B({h:(r+240)%360,s:e.s,l:e.l})]}function v(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+90)%360,s:e.s,l:e.l}),B({h:(r+180)%360,s:e.s,l:e.l}),B({h:(r+270)%360,s:e.s,l:e.l})]}function m(t){var e=B(t).toHsl(),r=e.h;return[B(t),B({h:(r+72)%360,s:e.s,l:e.l}),B({h:(r+216)%360,s:e.s,l:e.l})]}function y(t,e,r){e=e||6,r=r||30;var a=B(t).toHsl(),n=360/r,o=[B(t)];for(a.h=(a.h-(n*e>>1)+720)%360;--e;)a.h=(a.h+n)%360,o.push(B(a));return o}function w(t,e){e=e||6;for(var r=B(t).toHsv(),a=r.h,n=r.s,o=r.v,i=[],s=1/e;e--;)i.push(B({h:a,s:n,v:o})),o=(o+s)%1;return i}function _(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}function x(t){return t=parseFloat(t),(isNaN(t)||0>t||t>1)&&(t=1),t}function k(t,e){P(t)&&(t="100%");var r=A(t);return t=D(e,I(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),j.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function S(t){return D(1,I(0,t))}function C(t){return parseInt(t,16)}function P(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)}function A(t){return"string"==typeof t&&-1!=t.indexOf("%")}function M(t){return 1==t.length?"0"+t:""+t}function R(t){return 1>=t&&(t=100*t+"%"),t}function H(t){return Math.round(255*parseFloat(t)).toString(16)}function F(t){return C(t)/255}function T(t){t=t.replace(O,"").replace(q,"").toLowerCase();var e=!1;if(L[t])t=L[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=V.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=V.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=V.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=V.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=V.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=V.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=V.hex8.exec(t))?{a:F(r[1]),r:C(r[2]),g:C(r[3]),b:C(r[4]),format:e?"name":"hex8"}:(r=V.hex6.exec(t))?{r:C(r[1]),g:C(r[2]),b:C(r[3]),format:e?"name":"hex"}:(r=V.hex3.exec(t))?{r:C(r[1]+""+r[1]),g:C(r[2]+""+r[2]),b:C(r[3]+""+r[3]),format:e?"name":"hex"}:!1}var O=/^[\s,#]+/,q=/\s+$/,N=0,j=Math,E=j.round,D=j.min,I=j.max,z=j.random,B=function(e,r){if(e=e?e:"",r=r||{},e instanceof B)return e;if(!(this instanceof B))return new B(e,r);var a=t(e);this._originalInput=e,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=E(1e3*this._a)/1e3,this._format=r.format||a.format,this._gradientType=r.gradientType,this._r<1&&(this._r=E(this._r)),this._g<1&&(this._g=E(this._g)),this._b<1&&(this._b=E(this._b)),this._ok=a.ok,this._tc_id=N++};B.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},setAlpha:function(t){return this._a=x(t),this._roundA=E(1e3*this._a)/1e3,this},toHsv:function(){var t=n(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=n(this._r,this._g,this._b),e=E(360*t.h),r=E(100*t.s),a=E(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+a+"%)":"hsva("+e+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=r(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=r(this._r,this._g,this._b),e=E(360*t.h),a=E(100*t.s),n=E(100*t.l);return 1==this._a?"hsl("+e+", "+a+"%, "+n+"%)":"hsla("+e+", "+a+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return i(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(){return s(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:E(this._r),g:E(this._g),b:E(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+E(this._r)+", "+E(this._g)+", "+E(this._b)+")":"rgba("+E(this._r)+", "+E(this._g)+", "+E(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:E(100*k(this._r,255))+"%",g:E(100*k(this._g,255))+"%",b:E(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+E(100*k(this._r,255))+"%, "+E(100*k(this._g,255))+"%, "+E(100*k(this._b,255))+"%)":"rgba("+E(100*k(this._r,255))+"%, "+E(100*k(this._g,255))+"%, "+E(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:K[i(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var e="#"+s(this._r,this._g,this._b,this._a),r=e,a=this._gradientType?"GradientType = 1, ":"";if(t){var n=B(t);r=n.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,a=this._a<1&&this._a>=0,n=!e&&a&&("hex"===t||"hex6"===t||"hex3"===t||"name"===t);return n?"name"===t&&0===this._a?this.toName():this.toRgbString():("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),("hex"===t||"hex6"===t)&&(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(u,arguments)},brighten:function(){return this._applyModification(h,arguments)},darken:function(){return this._applyModification(d,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(c,arguments)},greyscale:function(){return this._applyModification(f,arguments)},spin:function(){return this._applyModification(p,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(y,arguments)},complement:function(){return this._applyCombination(g,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(m,arguments)},triad:function(){return this._applyCombination(b,arguments)},tetrad:function(){return this._applyCombination(v,arguments)}},B.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var a in t)t.hasOwnProperty(a)&&("a"===a?r[a]=t[a]:r[a]=R(t[a]));t=r}return B(t,e)},B.equals=function(t,e){return t&&e?B(t).toRgbString()==B(e).toRgbString():!1},B.random=function(){return B.fromRatio({r:z(),g:z(),b:z()})},B.mix=function(t,e,r){r=0===r?0:r||50;var a,n=B(t).toRgb(),o=B(e).toRgb(),i=r/100,s=2*i-1,l=o.a-n.a;a=s*l==-1?s:(s+l)/(1+s*l),a=(a+1)/2;var c=1-a,f={r:o.r*a+n.r*c,g:o.g*a+n.g*c,b:o.b*a+n.b*c,a:o.a*i+n.a*(1-i)};return B(f)},B.readability=function(t,e){var r=B(t),a=B(e),n=r.toRgb(),o=a.toRgb(),i=r.getBrightness(),s=a.getBrightness(),l=Math.max(n.r,o.r)-Math.min(n.r,o.r)+Math.max(n.g,o.g)-Math.min(n.g,o.g)+Math.max(n.b,o.b)-Math.min(n.b,o.b);return{brightness:Math.abs(i-s),color:l}},B.isReadable=function(t,e){var r=B.readability(t,e);return r.brightness>125&&r.color>500},B.mostReadable=function(t,e){for(var r=null,a=0,n=!1,o=0;o<e.length;o++){var i=B.readability(t,e[o]),s=i.brightness>125&&i.color>500,l=3*(i.brightness/125)+i.color/500;(s&&!n||s&&n&&l>a||!s&&!n&&l>a)&&(n=s,a=l,r=B(e[o]))}return r};var L=B.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},K=B.hexNames=_(L),V=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",r="(?:"+e+")|(?:"+t+")",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{rgb:new RegExp("rgb"+a),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+a),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+a),hsva:new RegExp("hsva"+n),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();window.tinycolor=B}(),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})});
$(document).ready(function(e) {
	var $sliderFunctionStarted = false;
	setTimeout(function(){ if ($sliderFunctionStarted!==true) { runSlider(); } },300);
	
function runSlider(){
	$sliderFunctionStarted = true;
	$(".module_slider_structure_slider_wrap").each(function(){
		var effect = $(this).attr("data-effect");
		var sliderid = $(this).attr("data-sliderid");
		var speed = $(this).attr("data-sliderspeed");
		var width = $(this).attr("data-sliderwidth");
		$(this).css({"max-width":width+"px"});
		$(this).children(".indi_slide_wrap").css({"max-width":width+"px"});
		$(this).children(".indi_slide_wrap").addClass(effect);
		var cnt = $(this).children(".indi_slide_wrap").length - 1;
		if (effect==='slide') { 
			$(this).children(".indi_slide_wrap").css({"transition":"all cubic-bezier(1,.38,.45,.83) 800ms","-webkit-transition":"all cubic-bezier(1,.38,.45,.83) 800ms","-moz-transition":"all cubic-bezier(1,.38,.45,.83) 800ms","-o-transition":"all cubic-bezier(1,.38,.45,.83) 800ms"}); 
			var interval = self.setInterval(function(){ slide_effect(sliderid,cnt); },speed); 
		}
		if (effect==='fade') { 
			$(this).children(".indi_slide_wrap").css({"transition":"all ease-in-out 1800ms","-webkit-transition":"all ease-in-out 1800ms","-moz-transition":"all ease-in-out 1800ms","-o-transition":"all ease-in-out 1800ms"}); 
			var interval = self.setInterval(function(){ fade_effect(sliderid,cnt); },speed); 
		}

		calculateAspectRatioFit(sliderid);
                setTimeout(function(){ calculateAspectRatioFit(sliderid); },200);
		$(window).resize(function() {
			calculateAspectRatioFit(sliderid);
		});
	});

	function slide_effect(e,cnt){
		var slideId = parseInt($(".visible_slide").attr("data-slideid")) + 1;
		if (slideId>cnt) { slideId = 0; }
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").addClass("lift_slide");
		$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").removeClass("visible_slide");
		setTimeout(function(){
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".lift_slide").addClass("hide_slide");
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".lift_slide").removeClass("lift_slide");
			setTimeout(function(){ $('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".hide_slide").removeClass("hide_slide"); },1200);
		},1200);
		$('.indi_slide_wrap[data-slideid="'+slideId+'"]').addClass("visible_slide");
		$('.indi_slide_wrap[data-slideid="'+slideId+'"]').removeClass("hide_slide");
	};

	function fade_effect(e,cnt){
		var slideId = parseInt($(".visible_slide").attr("data-slideid")) + 1;
		if (slideId>cnt) { slideId = 0; }
		setTimeout(function(){
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").addClass("lift_slide"); //margin-left:0;opacity:0;
			$('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".visible_slide").removeClass("visible_slide"); //margin-left:0;z-index:2;
			setTimeout(function(){ $('.module_slider_structure_slider_wrap[data-sliderid="'+e+'"]').children(".fade").removeClass("lift_slide"); },2100);
			$('.indi_slide_wrap[data-slideid="'+slideId+'"]').addClass("visible_slide");
			$('.indi_slide_wrap[data-slideid="'+slideId+'"]').removeClass("initital_visible_slide");
		},1800);
		
		$('.indi_slide_wrap[data-slideid="'+slideId+'"]').addClass("initital_visible_slide");
		$('.indi_slide_wrap[data-slideid="'+slideId+'"]').removeClass("hide_slide");
	};	

	function calculateAspectRatioFit(sliderid) {
		$this = $('.module_slider_structure_slider_wrap[data-sliderid="'+sliderid+'"').children(".indi_slide_wrap").children(".indi_slide_image").children("img");
		$thisWrapper = $('.module_slider_structure_slider_wrap[data-sliderid="'+sliderid+'"');
        var maxWidth = 2200; // Max width for the image
        var maxHeight = 1200;    // Max height for the image
        var ratio = 0;  // Used for aspect ratio
        var width = $this.width();    // Current image width
        var height = $this.height();  // Current image height
        // Check if the current width is larger than the max
        if(width > maxWidth){
            ratio = maxWidth / width;   // get ratio for scaling image
            $this.css("width", maxWidth); // Set new width
            $this.css("height", height * ratio);  // Scale height based on ratio
            height = height * ratio;    // Reset height to match scaled image
            width = width * ratio;    // Reset width to match scaled image
        }
        // Check if current height is larger than max
        if(height > maxHeight){
            ratio = maxHeight / height; // get ratio for scaling image
            $this.css("height", maxHeight);   // Set new height
            $this.css("width", width * ratio);    // Scale width based on ratio
            width = width * ratio;    // Reset width to match scaled image
            height = height * ratio;    // Reset height to match scaled image
        }
		$thisWrapper.css({"height":height+"px"});
	}
};


});

/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-cssanimations-iepp-cssclasses-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function A(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+n.join(c+" ")+c).split(" ");return z(d,b)}function z(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function y(a,b){return!!~(""+a).indexOf(b)}function x(a,b){return typeof a===b}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function v(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n="Webkit Moz O ms Khtml".split(" "),o={},p={},q={},r=[],s,t={}.hasOwnProperty,u;!x(t,c)&&!x(t.call,c)?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],c)},o.cssanimations=function(){return A("animationName")};for(var B in o)u(o,B)&&(s=B.toLowerCase(),e[s]=o[B](),r.push((e[s]?"":"no-")+s));v(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._domPrefixes=n,e.testProp=function(a){return z([a])},e.testAllProps=A,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+r.join(" "):"");return e}(this,this.document),function(a,b,c){function k(a){return!a||a=="loaded"||a=="complete"}function j(){var a=1,b=-1;while(p.length- ++b)if(p[b].s&&!(a=p[b].r))break;a&&g()}function i(a){var c=b.createElement("script"),d;c.src=a.s,c.onreadystatechange=c.onload=function(){!d&&k(c.readyState)&&(d=1,j(),c.onload=c.onreadystatechange=null)},m(function(){d||(d=1,j())},H.errorTimeout),a.e?c.onload():n.parentNode.insertBefore(c,n)}function h(a){var c=b.createElement("link"),d;c.href=a.s,c.rel="stylesheet",c.type="text/css";if(!a.e&&(w||r)){var e=function(a){m(function(){if(!d)try{a.sheet.cssRules.length?(d=1,j()):e(a)}catch(b){b.code==1e3||b.message=="security"||b.message=="denied"?(d=1,m(function(){j()},0)):e(a)}},0)};e(c)}else c.onload=function(){d||(d=1,m(function(){j()},0))},a.e&&c.onload();m(function(){d||(d=1,j())},H.errorTimeout),!a.e&&n.parentNode.insertBefore(c,n)}function g(){var a=p.shift();q=1,a?a.t?m(function(){a.t=="c"?h(a):i(a)},0):(a(),j()):q=0}function f(a,c,d,e,f,h){function i(){!o&&k(l.readyState)&&(r.r=o=1,!q&&j(),l.onload=l.onreadystatechange=null,m(function(){u.removeChild(l)},0))}var l=b.createElement(a),o=0,r={t:d,s:c,e:h};l.src=l.data=c,!s&&(l.style.display="none"),l.width=l.height="0",a!="object"&&(l.type=d),l.onload=l.onreadystatechange=i,a=="img"?l.onerror=i:a=="script"&&(l.onerror=function(){r.e=r.r=1,g()}),p.splice(e,0,r),u.insertBefore(l,s?null:n),m(function(){o||(u.removeChild(l),r.r=r.e=o=1,j())},H.errorTimeout)}function e(a,b,c){var d=b=="c"?z:y;q=0,b=b||"j",C(a)?f(d,a,b,this.i++,l,c):(p.splice(this.i++,0,a),p.length==1&&g());return this}function d(){var a=H;a.loader={load:e,i:0};return a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=r&&!s,u=s?l:n.parentNode,v=a.opera&&o.call(a.opera)=="[object Opera]",w="webkitAppearance"in l.style,x=w&&"async"in b.createElement("script"),y=r?"object":v||x?"img":"script",z=w?"img":y,A=Array.isArray||function(a){return o.call(a)=="[object Array]"},B=function(a){return Object(a)===a},C=function(a){return typeof a=="string"},D=function(a){return o.call(a)=="[object Function]"},E=[],F={},G,H;H=function(a){function f(a){var b=a.split("!"),c=E.length,d=b.pop(),e=b.length,f={url:d,origUrl:d,prefixes:b},g,h;for(h=0;h<e;h++)g=F[b[h]],g&&(f=g(f));for(h=0;h<c;h++)f=E[h](f);return f}function e(a,b,e,g,h){var i=f(a),j=i.autoCallback;if(!i.bypass){b&&(b=D(b)?b:b[a]||b[g]||b[a.split("/").pop().split("?")[0]]);if(i.instead)return i.instead(a,b,e,g,h);e.load(i.url,i.forceCSS||!i.forceJS&&/css$/.test(i.url)?"c":c,i.noexec),(D(b)||D(j))&&e.load(function(){d(),b&&b(i.origUrl,h,g),j&&j(i.origUrl,h,g)})}}function b(a,b){function c(a){if(C(a))e(a,h,b,0,d);else if(B(a))for(i in a)a.hasOwnProperty(i)&&e(a[i],h,b,i,d)}var d=!!a.test,f=d?a.yep:a.nope,g=a.load||a.both,h=a.callback,i;c(f),c(g),a.complete&&b.load(a.complete)}var g,h,i=this.yepnope.loader;if(C(a))e(a,0,i,0);else if(A(a))for(g=0;g<a.length;g++)h=a[g],C(h)?e(h,0,i,0):A(h)?H(h):B(h)&&b(h,i);else B(a)&&b(a,i)},H.addPrefix=function(a,b){F[a]=b},H.addFilter=function(a){E.push(a)},H.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",G=function(){b.removeEventListener("DOMContentLoaded",G,0),b.readyState="complete"},0)),a.yepnope=d()}(this,this.document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
!function(i,t,s){"use strict";var e,o,n=i.event;e=n.special.debouncedresize={setup:function(){i(this).on("resize",e.handler)},teardown:function(){i(this).off("resize",e.handler)},handler:function(i,t){var s=this,h=arguments,a=function(){i.type="debouncedresize",n.dispatch.apply(s,h)};o&&clearTimeout(o),t?a():o=setTimeout(a,e.threshold)},threshold:50};var h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";i.fn.imagesLoaded=function(t){function e(){var s=i(l),e=i(u);a&&(u.length?a.reject(d,s,e):a.resolve(d)),i.isFunction(t)&&t.call(n,d,s,e)}function o(t,s){t.src!==h&&-1===i.inArray(t,c)&&(c.push(t),s?u.push(t):l.push(t),i.data(t,"imagesLoaded",{isBroken:s,src:t.src}),r&&a.notifyWith(i(t),[s,d,i(l),i(u)]),d.length===c.length&&(setTimeout(e),d.unbind(".imagesLoaded")))}var n=this,a=i.isFunction(i.Deferred)?i.Deferred():0,r=i.isFunction(a.notify),d=n.find("img").add(n.filter("img")),c=[],l=[],u=[];return i.isPlainObject(t)&&i.each(t,function(i,s){"callback"===i?t=s:a&&a[i](s)}),d.length?d.bind("load.imagesLoaded error.imagesLoaded",function(i){o(i.target,"error"===i.type)}).each(function(t,e){var n=e.src,a=i.data(e,"imagesLoaded");return a&&a.src===n?void o(e,a.isBroken):e.complete&&e.naturalWidth!==s?void o(e,0===e.naturalWidth||0===e.naturalHeight):void((e.readyState||e.complete)&&(e.src=h,e.src=n))}):e(),a?a.promise(n):n};var a=i(t),r=t.Modernizr;i.Slicebox=function(t,s){this.$el=i(s),this._init(t)},i.Slicebox.defaults={orientation:"v",perspective:1200,cuboidsCount:5,cuboidsRandom:!1,maxCuboidsCount:5,disperseFactor:0,colorHiddenSides:"#222",sequentialFactor:150,speed:600,easing:"ease",autoplay:!1,interval:3e3,fallbackFadeSpeed:300,onBeforeChange:function(i){return!1},onAfterChange:function(i){return!1},onReady:function(){return!1}},i.Slicebox.prototype={_init:function(t){if(this.options=i.extend(!0,{},i.Slicebox.defaults,t),this._validate(),this.$items=this.$el.children("li"),this.itemsCount=this.$items.length,0===this.itemsCount)return!1;this.support=r.csstransitions&&r.csstransforms3d,this.current=0,this.isAnimating=!1,this.isReady=!1;var s=this;this.$el.imagesLoaded(function(){var i=s.$items.eq(s.current).css("display","block").addClass("sb-current"),t=new Image;t.src=i.find("img").attr("src"),s.realWidth=t.width,s._setSize(),s._setStyle(),s._initEvents(),s.options.onReady(),s.isReady=!0,s.options.autoplay&&s._startSlideshow()})},_validate:function(i){this.options.cuboidsCount<0?this.options.cuboidsCount=1:this.options.cuboidsCount>15?this.options.cuboidsCount=15:this.options.cuboidsCount%2===0&&++this.options.cuboidsCount,this.options.maxCuboidsCount<0?this.options.maxCuboidsCount=1:this.options.maxCuboidsCount>15?this.options.maxCuboidsCount=15:this.options.maxCuboidsCount%2===0&&++this.options.maxCuboidsCount,this.options.disperseFactor<0&&(this.options.disperseFactor=0),"v"!==this.options.orientation&&"h"!==this.options.orientation&&"r"!==this.options.orientation&&(this.options.orientation="v")},_setSize:function(){var i=this.$items.eq(this.current).find("img");this.size={width:i.width(),height:i.height()}},_setStyle:function(){this.$el.css({"max-width":this.realWidth})},_initEvents:function(){var i=this;a.on("debouncedresize.slicebox",function(t){i._setSize()})},_startSlideshow:function(){var i=this;this.slideshow=setTimeout(function(){i._navigate("next"),i.options.autoplay&&i._startSlideshow()},this.options.interval)},_stopSlideshow:function(){this.options.autoplay&&(clearTimeout(this.slideshow),this.isPlaying=!1,this.options.autoplay=!1)},_navigate:function(i,t){return this.isAnimating||!this.isReady||this.itemsCount<2?!1:(this.isAnimating=!0,this.prev=this.current,t!==s?this.current=t:"next"===i?this.current=this.current<this.itemsCount-1?this.current+1:0:"prev"===i&&(this.current=this.current>0?this.current-1:this.itemsCount-1),this.options.onBeforeChange(this.current),void(this.support?(this._layout(i),this._rotate()):this._fade(i)))},_fade:function(t){var s=this,e=this.$items.eq(this.prev),o=e.find("img").height();this.$el.css("height",o),this.$items.css("position","absolute"),this.$items.eq(this.current).fadeIn(this.options.fallbackFadeSpeed,function(){i(this).css("display","block").addClass("sb-current"),s.$el.css("height","auto"),s.$items.css("position","relative"),s.isAnimating=!1}),s.$items.eq(s.prev).removeClass("sb-current").fadeOut(this.options.fallbackFadeSpeed)},_layout:function(t){var s=this.options.orientation;"r"===s&&(s=0===Math.floor(2*Math.random())?"v":"h"),this.options.cuboidsRandom&&(this.options.cuboidsCount=Math.floor(Math.random()*this.options.maxCuboidsCount+1)),this._validate();var e={width:this.size.width,height:this.size.height,perspective:this.options.perspective+"px"},o=i.extend(this.options,{size:this.size,items:this.$items,direction:t,prev:this.prev,current:this.current,o:s});this.$box=i("<div>").addClass("sb-perspective").css(e).appendTo(this.$el),this.cuboids=[],this.$el.css("overflow","visible");for(var n=0;n<this.options.cuboidsCount;++n){var h=new i.Cuboid(o,n);this.$box.append(h.getEl()),this.cuboids.push(h)}},_rotate:function(){this.$items.eq(this.prev).removeClass("sb-current").hide();for(var i=0;i<this.options.cuboidsCount;++i){var t=this.cuboids[i],s=this;t.rotate(function(i){if(i===s.options.cuboidsCount-1){s.$el.css("overflow","hidden"),s.isAnimating=!1,s.$box.remove();var t=s.$items.eq(s.current);t.css("display","block"),setTimeout(function(){t.addClass("sb-current")},0),s.options.onAfterChange(s.current)}})}},_destroy:function(i){this.$el.off(".slicebox").removeData("slicebox"),a.off(".slicebox"),i.call()},add:function(i,t){this.$items=this.$items.add(i),this.itemsCount=this.$items.length,t&&t.call(i)},next:function(){this._stopSlideshow(),this._navigate("next")},previous:function(){this._stopSlideshow(),this._navigate("prev")},jump:function(i){return i-=1,i===this.current||i>=this.itemsCount||0>i?!1:(this._stopSlideshow(),void this._navigate(i>this.current?"next":"prev",i))},play:function(){this.isPlaying||(this.isPlaying=!0,this._navigate("next"),this.options.autoplay=!0,this._startSlideshow())},pause:function(){this.isPlaying&&this._stopSlideshow()},isActive:function(){return this.isAnimating},destroy:function(i){this._destroy(i)}},i.Cuboid=function(i,t){this.config=i,this.pos=t,this.side=1,this._setSize(),this._configureStyles()},i.Cuboid.prototype={_setSize:function(){this.size={width:"v"===this.config.o?Math.floor(this.config.size.width/this.config.cuboidsCount):this.config.size.width,height:"v"===this.config.o?this.config.size.height:Math.floor(this.config.size.height/this.config.cuboidsCount)},this.extra="v"===this.config.o?this.config.size.width-this.size.width*this.config.cuboidsCount:this.config.size.height-this.size.height*this.config.cuboidsCount},_configureStyles:function(){var t=Math.ceil(this.config.cuboidsCount/2),s=this.pos<t?{zIndex:100*(this.pos+1),left:"v"===this.config.o?this.size.width*this.pos:0,top:"v"===this.config.o?0:this.size.height*this.pos}:{zIndex:100*(this.config.cuboidsCount-this.pos),left:"v"===this.config.o?this.size.width*this.pos:0,top:"v"===this.config.o?0:this.size.height*this.pos};this.disperseFactor=this.config.disperseFactor*(this.pos+1-t),this.style=i.extend({"-webkit-transition":"-webkit-transform "+this.config.speed+"ms "+this.config.easing,"-moz-transition":"-moz-transform "+this.config.speed+"ms "+this.config.easing,"-o-transition":"-o-transform "+this.config.speed+"ms "+this.config.easing,"-ms-transition":"-ms-transform "+this.config.speed+"ms "+this.config.easing,transition:"transform "+this.config.speed+"ms "+this.config.easing},s,this.size),this.animationStyles={side1:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px )"},side2:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px ) rotate3d( 1, 0, 0, -90deg )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px ) rotate3d( 0, 1, 0, -90deg )"},side3:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px ) rotate3d( 1, 0, 0, -180deg )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px ) rotate3d( 0, 1, 0, -180deg )"},side4:"v"===this.config.o?{transform:"translate3d( 0, 0, -"+this.size.height/2+"px ) rotate3d( 1, 0, 0, -270deg )"}:{transform:"translate3d( 0, 0, -"+this.size.width/2+"px ) rotate3d( 0, 1, 0, -270deg )"}};var e="v"===this.config.o?this.size.height:this.size.width;this.sidesStyles={frontSideStyle:{width:"v"===this.config.o?this.size.width+this.extra:this.size.width,height:"v"===this.config.o?this.size.height:this.size.height+this.extra,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, 0deg ) translate3d( 0, 0, "+e/2+"px )"},backSideStyle:{width:this.size.width,height:this.size.height,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, 180deg ) translate3d( 0, 0, "+e/2+"px ) rotateZ( 180deg )"},rightSideStyle:{width:e,height:"v"===this.config.o?this.size.height:this.size.height+this.extra,left:"v"===this.config.o?this.size.width/2-this.size.height/2:0,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, 90deg ) translate3d( 0, 0, "+this.size.width/2+"px )"},leftSideStyle:{width:e,height:"v"===this.config.o?this.size.height:this.size.height+this.extra,left:"v"===this.config.o?this.size.width/2-this.size.height/2:0,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 0, 1, 0, -90deg ) translate3d( 0, 0, "+this.size.width/2+"px )"},topSideStyle:{width:"v"===this.config.o?this.size.width+this.extra:this.size.width,height:e,top:"v"===this.config.o?0:this.size.height/2-this.size.width/2,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 1, 0, 0, 90deg ) translate3d( 0, 0, "+this.size.height/2+"px )"},bottomSideStyle:{width:"v"===this.config.o?this.size.width+this.extra:this.size.width,height:e,top:"v"===this.config.o?0:this.size.height/2-this.size.width/2,backgroundColor:this.config.colorHiddenSides,transform:"rotate3d( 1, 0, 0, -90deg ) translate3d( 0, 0, "+this.size.height/2+"px )"}}},getEl:function(){return this.$el=i("<div/>").css(this.style).css(this.animationStyles.side1).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.frontSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.backSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.rightSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.leftSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.topSideStyle)).append(i("<div/>").addClass("sb-side").css(this.sidesStyles.bottomSideStyle)),this._showImage(this.config.prev),this.$el},_showImage:function(i){var t,s=this.config.items.eq(i),e={"background-size":this.config.size.width+"px "+this.config.size.height+"px"};switch(e.backgroundImage="url("+s.find("img").attr("src")+")",this.side){case 1:t=0;break;case 2:t="v"===this.config.o?4:2;break;case 3:t=1;break;case 4:t="v"===this.config.o?5:3}e.backgroundPosition="v"===this.config.o?-(this.pos*this.size.width)+"px 0px":"0px -"+this.pos*this.size.height+"px",this.$el.children().eq(t).css(e)},rotate:function(i){var t,s=this;setTimeout(function(){if("next"===s.config.direction)switch(s.side){case 1:t=s.animationStyles.side2,s.side=2;break;case 2:t=s.animationStyles.side3,s.side=3;break;case 3:t=s.animationStyles.side4,s.side=4;break;case 4:t=s.animationStyles.side1,s.side=1}else switch(s.side){case 1:t=s.animationStyles.side4,s.side=4;break;case 2:t=s.animationStyles.side1,s.side=1;break;case 3:t=s.animationStyles.side2,s.side=2;break;case 4:t=s.animationStyles.side3,s.side=3}s._showImage(s.config.current);var e={},o={};"v"===s.config.o?(e.left="+="+s.disperseFactor+"px",o.left="-="+s.disperseFactor+"px"):"h"===s.config.o&&(e.top="+="+s.disperseFactor+"px",o.top="-="+s.disperseFactor+"px"),s.$el.css(t).animate(e,s.config.speed/2).animate(o,s.config.speed/2,function(){i&&i.call(s,s.pos)})},this.config.sequentialFactor*this.pos+30)}};var d=function(i){t.console&&t.console.error(i)};i.fn.slicebox=function(t){var s=i.data(this,"slicebox");if("string"==typeof t){var e=Array.prototype.slice.call(arguments,1);this.each(function(){return s?i.isFunction(s[t])&&"_"!==t.charAt(0)?void s[t].apply(s,e):void d("no such method '"+t+"' for slicebox self"):void d("cannot call methods on slicebox prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){s?s._init():s=i.data(this,"slicebox",new i.Slicebox(t,this))});return s}}(jQuery,window);
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/**
 * jquery.slicebox.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 50
	};

	// ======================= imagesLoaded Plugin ===============================
	// https://github.com/desandro/imagesloaded

	// $('#my-container').imagesLoaded(myFunction)
	// execute a callback when all images have loaded.
	// needed because .load() doesn't work on cached images

	// callback function gets image collection as argument
	//  this is the container

	// original: mit license. paul irish. 2010.
	// contributors: Oren Solomianik, David DeSandro, Yiannis Chatzikonstantinou

	// blank image data-uri bypasses webkit log warning (thx doug jones)
	var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

	$.fn.imagesLoaded = function( callback ) {
		var $this = this,
			deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
			hasNotify = $.isFunction(deferred.notify),
			$images = $this.find('img').add( $this.filter('img') ),
			loaded = [],
			proper = [],
			broken = [];

		// Register deferred callbacks
		if ($.isPlainObject(callback)) {
			$.each(callback, function (key, value) {
				if (key === 'callback') {
					callback = value;
				} else if (deferred) {
					deferred[key](value);
				}
			});
		}

		function doneLoading() {
			var $proper = $(proper),
				$broken = $(broken);

			if ( deferred ) {
				if ( broken.length ) {
					deferred.reject( $images, $proper, $broken );
				} else {
					deferred.resolve( $images );
				}
			}

			if ( $.isFunction( callback ) ) {
				callback.call( $this, $images, $proper, $broken );
			}
		}

		function imgLoaded( img, isBroken ) {
			// don't proceed if BLANK image, or image is already loaded
			if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
				return;
			}

			// store element in loaded images array
			loaded.push( img );

			// keep track of broken and properly loaded images
			if ( isBroken ) {
				broken.push( img );
			} else {
				proper.push( img );
			}

			// cache image and its state for future calls
			$.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

			// trigger deferred progress method if present
			if ( hasNotify ) {
				deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
			}

			// call doneLoading and clean listeners if all images are loaded
			if ( $images.length === loaded.length ){
				setTimeout( doneLoading );
				$images.unbind( '.imagesLoaded' );
			}
		}

		// if no images, trigger immediately
		if ( !$images.length ) {
			doneLoading();
		} else {
			$images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
				// trigger imgLoaded
				imgLoaded( event.target, event.type === 'error' );
			}).each( function( i, el ) {
				var src = el.src;

				// find out if this image has been already checked for status
				// if it was, and src has not changed, call imgLoaded on it
				var cached = $.data( el, 'imagesLoaded' );
				if ( cached && cached.src === src ) {
					imgLoaded( el, cached.isBroken );
					return;
				}

				// if complete is true and browser supports natural sizes, try
				// to check for image status manually
				if ( el.complete && el.naturalWidth !== undefined ) {
					imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
					return;
				}

				// cached images don't fire load sometimes, so we reset src, but only when
				// dealing with IE, or image is complete (loaded) and failed manual check
				// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
				if ( el.readyState || el.complete ) {
					el.src = BLANK;
					el.src = src;
				}
			});
		}

		return deferred ? deferred.promise( $this ) : $this;
	};

	// global
	var $window = $( window ),
		Modernizr = window.Modernizr;

	$.Slicebox = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );
		
	};

	$.Slicebox.defaults = {
		// (v)ertical, (h)orizontal or (r)andom
		orientation : 'v',
		// perspective value
		perspective : 1200,
		// number of slices / cuboids
		// needs to be an odd number 15 => number > 0 (if you want the limit higher, change the _validate function).
		cuboidsCount : 5,
		// if true then the number of slices / cuboids is going to be random (cuboidsCount is overwitten)
		cuboidsRandom : false,
		// the range of possible number of cuboids if cuboidsRandom is true
		// it is strongly recommended that you do not set a very large number :)
		maxCuboidsCount : 5,
		// each cuboid will move x pixels left / top (depending on orientation). The middle cuboid doesn't move. the middle cuboid's neighbors will move disperseFactor pixels
		disperseFactor : 0,
		// color of the hidden sides
		colorHiddenSides : '#222',
		// the animation will start from left to right. The left most cuboid will be the first one to rotate
		// this is the interval between each rotation in ms
		sequentialFactor : 150,
		// animation speed
		// this is the speed that takes "1" cuboid to rotate
		speed : 600,
		// transition easing
		easing : 'ease',
		// if true the slicebox will start the animation automatically
		autoplay : false,
		// time (ms) between each rotation, if autoplay is true
		interval: 3000,
		// the fallback will just fade out / fade in the items
		// this is the time fr the fade effect
		fallbackFadeSpeed : 300,
		// callbacks
		onBeforeChange : function( position ) { return false; },
		onAfterChange : function( position ) { return false; },
		onReady : function() { return false; }
	};

	$.Slicebox.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Slicebox.defaults, options );

			this._validate();

			// all the items
			this.$items = this.$el.children( 'li' );
			
			// total number of items
			this.itemsCount = this.$items.length;
			// if there's no items return
			if(this.itemsCount === 0 ) {

				return false;

			};

			// suport for css 3d transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms3d;
			
			// current image index
			this.current = 0;
			
			// control if the slicebox is animating
			this.isAnimating = false;
			
			// control if slicebox is ready (all images loaded)
			this.isReady = false;
			
			// preload the images
			var self = this;
			this.$el.imagesLoaded( function() {

				// we need to hide the items except first one (current default value)
				var $current = self.$items.eq( self.current ).css( 'display', 'block' ).addClass( 'sb-current' );

				// get real size of image
				var i = new Image();
				i.src = $current.find( 'img' ).attr( 'src' );
				self.realWidth = i.width;

				// assuming all images with same size
				self._setSize();
				self._setStyle();
				self._initEvents();

				self.options.onReady();
				self.isReady = true;

				if( self.options.autoplay ) {
					
					self._startSlideshow();

				}

			});

		},
		_validate			: function( options ) {

			if( this.options.cuboidsCount < 0 ){

				this.options.cuboidsCount = 1;

			}
			else if( this.options.cuboidsCount > 15 ) {

				this.options.cuboidsCount = 15;

			}
			else if( this.options.cuboidsCount %2 === 0 ) {

				++this.options.cuboidsCount;

			}
			
			if( this.options.maxCuboidsCount < 0 ){

				this.options.maxCuboidsCount = 1;

			}
			else if( this.options.maxCuboidsCount > 15 ) {

				this.options.maxCuboidsCount = 15;

			}
			else if( this.options.maxCuboidsCount %2 === 0 ) {

				++this.options.maxCuboidsCount;

			}
			
			if( this.options.disperseFactor < 0 ) {

				this.options.disperseFactor = 0;

			}
			
			if( this.options.orientation !== 'v' && this.options.orientation !== 'h' && this.options.orientation !== 'r' ) {

				this.options.orientation = 'v';

			}

		},
		_setSize : function() {

			var $visible = this.$items.eq( this.current ).find( 'img' );

			this.size = {
				width	: $visible.width(),
				height	: $visible.height()
			};

		},
		_setStyle : function() {

			// max-width is the real size of the images
			this.$el.css( {
				'max-width' : this.realWidth
			} );

		},
		_initEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.slicebox', function( event ) {

				// assuming all images with same size
				self._setSize();

			} );

		},
		_startSlideshow: function() {

			var self = this;

			this.slideshow = setTimeout( function() {

				self._navigate( 'next' );

				if ( self.options.autoplay ) {

					self._startSlideshow();

				}

			}, this.options.interval );

		},
		_stopSlideshow: function() {

			if ( this.options.autoplay ) {

				clearTimeout( this.slideshow );
				this.isPlaying = false;
				this.options.autoplay = false;

			}

		},
		_navigate : function( dir, pos ) {

			if( this.isAnimating || !this.isReady || this.itemsCount < 2 ) {

				return false;

			}

			this.isAnimating = true;
			
			// current item's index
			this.prev = this.current;

			// if position is passed
			if( pos !== undefined ) {

				this.current = pos;

			}
			// if not check the boundaries
			else if( dir === 'next' ) {

				this.current = this.current < this.itemsCount - 1 ? this.current + 1 : 0;

			}
			else if( dir === 'prev' ) {

				this.current = this.current > 0 ? this.current - 1 : this.itemsCount - 1;

			}

			// callback trigger
			this.options.onBeforeChange( this.current );

			if( !this.support ) {
				
				this._fade( dir );

			}
			else {

				this._layout( dir );
				this._rotate();
			
			}

		},
		_fade : function( dir ) {

			var self = this,
				$visible = this.$items.eq( this.prev ),
				h = $visible.find( 'img' ).height();

			this.$el.css( 'height', h );
			this.$items.css( 'position', 'absolute' );
			
			this.$items.eq( this.current ).fadeIn( this.options.fallbackFadeSpeed, function() {

				$( this ).css( 'display', 'block' ).addClass( 'sb-current' );
				self.$el.css( 'height', 'auto' );
				self.$items.css( 'position', 'relative' );
				self.isAnimating = false;

			} );
			self.$items.eq( self.prev ).removeClass( 'sb-current' ).fadeOut( this.options.fallbackFadeSpeed );

		},
		_layout : function( dir ) {

			// create a structure like this and append it to the main container (this.$el):
			// <div>	wrapper with perspective
			//   <div>
			//     <div></div> front side
			//     <div></div> back side
			//     <div></div> right side
			//     <div></div> left side
			//     <div></div> top side
			//     <div></div> bottom side
			//   </div>
			//   <div>..</div>
			//   <div>..</div>
			//   <div>..</div>
			//   ...	number of slices defined in options
			// </div>

			var orientation = this.options.orientation;

			if( orientation === 'r' ) {

				orientation = Math.floor( Math.random() * 2 ) === 0 ? 'v' : 'h';

			}

			if( this.options.cuboidsRandom ) {

				this.options.cuboidsCount = Math.floor( Math.random() * this.options.maxCuboidsCount + 1 );
			
			}
			
			this._validate();
			
			var boxStyle = {
					'width' : this.size.width,
					'height' : this.size.height,
					'perspective' : this.options.perspective + 'px'
				},
				config = $.extend( this.options, {
					size : this.size,
					items : this.$items,
					direction : dir,
					prev : this.prev,
					current : this.current,
					o : orientation
				} ),
				self = this;

			this.$box = $('<div>').addClass( 'sb-perspective' ).css( boxStyle ).appendTo( this.$el );

			this.cuboids = [];

			this.$el.css( 'overflow', 'visible' );

			for( var i = 0; i < this.options.cuboidsCount; ++i ) {

				var cuboid = new $.Cuboid( config, i );
				
				this.$box.append( cuboid.getEl() );

				this.cuboids.push( cuboid );

			}

		},
		_rotate : function() {

			// hide current item
			this.$items.eq( this.prev ).removeClass( 'sb-current' ).hide();

			for( var i = 0; i < this.options.cuboidsCount; ++i ) {

				var cuboid = this.cuboids[ i ],
					self = this;

				cuboid.rotate( function( pos ) {

					if( pos === self.options.cuboidsCount - 1 ) {

						self.$el.css( 'overflow', 'hidden' );
						self.isAnimating = false;
						self.$box.remove();
						var $current = self.$items.eq( self.current );
						$current.css( 'display', 'block' ); // show() makes it inline style
						setTimeout(function() {
							$current.addClass( 'sb-current' );
						} , 0 );
						self.options.onAfterChange( self.current );

					}

				});

			}

		},
		_destroy : function( callback ) {
			
			this.$el.off( '.slicebox' ).removeData( 'slicebox' );
			$window.off( '.slicebox' );
			callback.call();

		},
		// public methos: adds more items to the slicebox
		add : function( $items, callback ) {

			this.$items = this.$items.add( $items );
			this.itemsCount = this.$items.length;

			if ( callback ) {

				callback.call( $items );

			}

		},
		// public method: shows next image
		next : function() {

			this._stopSlideshow();
			this._navigate( 'next' );

		},
		// public method: shows previous image
		previous : function() {

			this._stopSlideshow();
			this._navigate( 'prev' );

		},
		// public method: goes to a specific image
		jump : function( pos ) {

			pos -= 1;

			if( pos === this.current || pos >= this.itemsCount || pos < 0 ) {

				return false;

			}

			this._stopSlideshow();
			this._navigate( pos > this.current ? 'next' : 'prev', pos );

		},
		// public method: starts the slideshow
		// any call to next(), previous() or jump() will stop the slideshow
		play : function() {

			if( !this.isPlaying ) {

				this.isPlaying = true;

				this._navigate( 'next' );
				this.options.autoplay = true;
				this._startSlideshow();

			}

		},
		// publicc methos: pauses the slideshow
		pause : function() {

			if( this.isPlaying ) {

				this._stopSlideshow();

			}

		},
		// public method: check if isAnimating is true
		isActive : function() {

			return this.isAnimating;

		},
		// publicc methos: destroys the slicebox instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};

	$.Cuboid = function( config, pos ) {

		this.config = config;
		this.pos = pos;
		this.side = 1;
		this._setSize();
		this._configureStyles();

	};

	$.Cuboid.prototype = {

		_setSize : function() {

			this.size = {
				width : this.config.o === 'v' ? Math.floor( this.config.size.width / this.config.cuboidsCount ) : this.config.size.width,
				height : this.config.o === 'v' ? this.config.size.height : Math.floor( this.config.size.height / this.config.cuboidsCount )
			};
			// extra space to fix gaps
			this.extra = this.config.o === 'v' ? this.config.size.width - ( this.size.width * this.config.cuboidsCount ) : this.config.size.height - ( this.size.height * this.config.cuboidsCount );

		},
		_configureStyles : function() {

			// style for the cuboid element
			// set z-indexes based on the cuboid's position
			var middlepos = Math.ceil( this.config.cuboidsCount / 2 ),
				positionStyle = this.pos < middlepos ? {
					zIndex : ( this.pos + 1 ) * 100,
					left : ( this.config.o === 'v' ) ? this.size.width * this.pos : 0,
					top : ( this.config.o === 'v' ) ? 0 : this.size.height * this.pos
				} : {
					zIndex : (this.config.cuboidsCount - this.pos) * 100,
					left : ( this.config.o === 'v' ) ? this.size.width * this.pos : 0,
					top : ( this.config.o === 'v' ) ? 0 : this.size.height * this.pos
				};

			// how much this cuboid is going to move (left or top values)
			this.disperseFactor = this.config.disperseFactor * ( ( this.pos + 1 ) - middlepos );

			this.style = $.extend( {
				'-webkit-transition' : '-webkit-transform ' + this.config.speed + 'ms ' + this.config.easing,
				'-moz-transition' : '-moz-transform ' + this.config.speed + 'ms ' + this.config.easing,
				'-o-transition' : '-o-transform ' + this.config.speed + 'ms ' + this.config.easing,
				'-ms-transition' : '-ms-transform ' + this.config.speed + 'ms ' + this.config.easing,
				'transition' : 'transform ' + this.config.speed + 'ms ' + this.config.easing
			}, positionStyle, this.size );

			this.animationStyles = {
				side1 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px )' },
				side2 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px ) rotate3d( 1, 0, 0, -90deg )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px ) rotate3d( 0, 1, 0, -90deg )' },
				side3 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px ) rotate3d( 1, 0, 0, -180deg )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px ) rotate3d( 0, 1, 0, -180deg )' },
				side4 : ( this.config.o === 'v' ) ? { 'transform' : 'translate3d( 0, 0, -' + ( this.size.height / 2 ) + 'px ) rotate3d( 1, 0, 0, -270deg )' } : { 'transform' : 'translate3d( 0, 0, -' + ( this.size.width / 2 ) + 'px ) rotate3d( 0, 1, 0, -270deg )' }
			};

			var measure = ( this.config.o === 'v' ) ? this.size.height : this.size.width;

			this.sidesStyles = {
				frontSideStyle : {
					width : ( this.config.o === 'v' ) ? this.size.width + this.extra : this.size.width,
					height : ( this.config.o === 'v' ) ? this.size.height : this.size.height + this.extra,
					backgroundColor : this.config.colorHiddenSides,
					transform : 'rotate3d( 0, 1, 0, 0deg ) translate3d( 0, 0, ' + ( measure / 2 ) + 'px )'
				},
				backSideStyle : {
					width : this.size.width,
					height : this.size.height,
					backgroundColor : this.config.colorHiddenSides,
					transform : 'rotate3d( 0, 1, 0, 180deg ) translate3d( 0, 0, ' + ( measure / 2 ) + 'px ) rotateZ( 180deg )'
				},
				rightSideStyle : {
					width : measure,
					height : ( this.config.o === 'v' ) ? this.size.height : this.size.height + this.extra,
					left : ( this.config.o === 'v' ) ? this.size.width / 2 - this.size.height / 2 : 0,
					backgroundColor : this.config.colorHiddenSides,
					transform : 'rotate3d( 0, 1, 0, 90deg ) translate3d( 0, 0, ' + ( this.size.width / 2 ) + 'px )'
				},
				leftSideStyle : {
					width : measure,
					height : ( this.config.o === 'v' ) ? this.size.height : this.size.height + this.extra,
					left : ( this.config.o === 'v' ) ? this.size.width / 2 - this.size.height / 2  : 0,
					backgroundColor : this.config.colorHiddenSides,
					transform : 'rotate3d( 0, 1, 0, -90deg ) translate3d( 0, 0, ' + ( this.size.width / 2 ) + 'px )'
				},
				topSideStyle : {
					width : ( this.config.o === 'v' ) ? this.size.width + this.extra : this.size.width,
					height : measure,
					top : ( this.config.o === 'v' ) ? 0 : this.size.height / 2 - this.size.width / 2,
					backgroundColor : this.config.colorHiddenSides,
					transform : 'rotate3d( 1, 0, 0, 90deg ) translate3d( 0, 0, ' + ( this.size.height / 2 ) + 'px )'
				},
				bottomSideStyle : {
					width : ( this.config.o === 'v' ) ? this.size.width + this.extra : this.size.width,
					height : measure,
					top : ( this.config.o === 'v' ) ? 0 : this.size.height / 2 - this.size.width / 2,
					backgroundColor : this.config.colorHiddenSides,
					transform : 'rotate3d( 1, 0, 0, -90deg ) translate3d( 0, 0, ' + ( this.size.height / 2 ) + 'px )'
				}
			};

		},
		getEl : function() {

			this.$el = $('<div/>').css( this.style )
					.css( this.animationStyles.side1 )
					.append( $('<div/>').addClass('sb-side').css( this.sidesStyles.frontSideStyle ) )
					.append( $('<div/>').addClass('sb-side').css( this.sidesStyles.backSideStyle ) )
					.append( $('<div/>').addClass('sb-side').css( this.sidesStyles.rightSideStyle ) )
					.append( $('<div/>').addClass('sb-side').css( this.sidesStyles.leftSideStyle ) )
					.append( $('<div/>').addClass('sb-side').css( this.sidesStyles.topSideStyle ) )
					.append( $('<div/>').addClass('sb-side').css( this.sidesStyles.bottomSideStyle ) );
			
			this._showImage( this.config.prev );
			
			return this.$el;

		},
		_showImage : function( imgPos ) {

			var sideIdx,
				$item = this.config.items.eq( imgPos ),
				imgParam = {
					'background-size' : this.config.size.width + 'px ' + this.config.size.height + 'px'
				};

			imgParam.backgroundImage = 'url(' + $item.find( 'img' ).attr('src') + ')';
			
			switch( this.side ) {

				case 1 : sideIdx = 0; break;
				case 2 : sideIdx = ( this.config.o === 'v' ) ? 4 : 2; break;
				case 3 : sideIdx = 1; break;
				case 4 : sideIdx = ( this.config.o === 'v' ) ? 5 : 3; break;

			};

			imgParam.backgroundPosition = ( this.config.o === 'v' ) ? - ( this.pos * this.size.width ) + 'px 0px' : '0px -' + ( this.pos * this.size.height ) + 'px';
			this.$el.children().eq( sideIdx ).css( imgParam );

		},
		rotate : function( callback ) {

			var self = this, animationStyle;

			setTimeout(function() {

				if( self.config.direction === 'next' ) {

					switch( self.side ) {
						case 1 : animationStyle = self.animationStyles.side2; self.side = 2; break;
						case 2 : animationStyle = self.animationStyles.side3; self.side = 3; break;
						case 3 : animationStyle = self.animationStyles.side4; self.side = 4; break;
						case 4 : animationStyle = self.animationStyles.side1; self.side = 1; break;
					};
				
				}
				else {

					switch( self.side ) {
						case 1 : animationStyle = self.animationStyles.side4; self.side = 4; break;
						case 2 : animationStyle = self.animationStyles.side1; self.side = 1; break;
						case 3 : animationStyle = self.animationStyles.side2; self.side = 2; break;
						case 4 : animationStyle = self.animationStyles.side3; self.side = 3; break;
					};

				}
				
				self._showImage( self.config.current );
				
				var animateOut 	= {}, animateIn	= {};
				
				if( self.config.o === 'v' ) {

					animateOut.left = '+=' + self.disperseFactor + 'px';
					animateIn.left = '-=' + self.disperseFactor + 'px';
				
				}
				else if( self.config.o === 'h' ) {

					animateOut.top = '+=' + self.disperseFactor + 'px';
					animateIn.top = '-=' + self.disperseFactor + 'px';
				
				}

				self.$el.css( animationStyle ).animate( animateOut, self.config.speed / 2 ).animate( animateIn, self.config.speed / 2 , function() {
					
					if( callback ) {

						callback.call( self, self.pos );

					}

				});

			}, this.config.sequentialFactor * this.pos + 30 );

		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.slicebox = function( options ) {

		var self = $.data( this, 'slicebox' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on slicebox prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for slicebox self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'slicebox', new $.Slicebox( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );
$(document).ready(function(){function n(){setTimeout(function(){$("#next_mega_slide").trigger("click"),n()},8e3)}n(),$(function(){var n=function(){var n=$("#nav-arrows").hide(),e=$("#nav-dots").hide(),t=e.children("span"),i=$("#shadow").hide(),o=$("#sb-slider").slicebox({onReady:function(){n.show(),e.show(),i.show()},onBeforeChange:function(n){t.removeClass("nav-dot-current"),t.eq(n).addClass("nav-dot-current")}}),r=function(){c()},c=function(){n.children(":first").on("click",function(){return o.next(),!1}),n.children(":last").on("click",function(){return o.previous(),!1}),t.each(function(n){$(this).on("click",function(e){var i=$(this);return o.isActive()||(t.removeClass("nav-dot-current"),i.addClass("nav-dot-current")),o.jump(n+1),!1})})};return{init:r}}();n.init()}),$("#mega_slider_wrapper").parents(".cwjdsjcs_not_editable").parent().addClass("min_height_zero")});
$(document).ready(function(){function e(){var e=$(".select_a_slide_wrapper").width();$(".select_a_slide_wrapper").height();$(".select_a_slide_slide").css({width:e+"px"}),$(".select_a_slide_slide_wrapper img").css({width:e+"px"}),setTimeout(function(){var e=$(".select_a_slide_slide").height();$(".select_a_slide_wrapper, .select_a_slide_slide_wrapper").css({height:e+"px"})},300),$(".select_a_slide_link_wrapper div").each(function(i){$('.select_a_slide_link_wrapper div[data-linkid="'+(i+1)+'"]').attr("data-slidelength",e*i)}),i(e)}function i(e){$(".select_a_slide_wrapper").each(function(){var i=$(this).children(".select_a_slide_link_wrapper").children("div").length,t=e/i;$(this).children(".select_a_slide_link_wrapper").children("div").css({width:t}),console.log(i)})}function t(){$(".select_a_slide_link_wrapper div").click(function(){var e=$(this).attr("data-slidelength");$(".select_a_slide_slide_wrapper").animate({left:-e},400)})}function l(){var e=$(this).width();1124>=e?$(".select_a_slide_slide_content").css({left:"0","margin-left":"0"}):$(".select_a_slide_slide_content").css({left:"50%","margin-left":"-562px"})}function s(){$(".select_a_slide_link_wrapper div").click(function(){$(".select_a_slide_link_wrapper div").removeClass("slide_active"),$(this).addClass("slide_active")})}function a(e,i){e=String(e).replace(/[^0-9a-f]/gi,""),e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),i=i||0;var t,l,s="#";for(l=0;3>l;l++)t=parseInt(e.substr(2*l,2),16),t=Math.round(Math.min(Math.max(0,t+t*i),255)).toString(16),s+=("00"+t).substr(t.length);return s}e(),t(),s(),$(".select_a_slide_link_wrapper div:first-child").trigger("click");var _=$(".select_a_slide_wrapper").attr("data-buttoncolor"),r=$(".select_a_slide_wrapper").attr("data-buttonfontcolor");$("head").append("<style>.select_a_slide_link_wrapper div { background:"+_+";color:"+r+"; }</style>");var d=a(_,-.2);$("head").append("<style>.slide_active { background-color:"+d+" !important; }</style>"),$("head").append("<style>.select_a_slide_link_wrapper div.slide_active:after { border-bottom:20px solid "+d+" !important; }</style>"),$(".select_a_slide_link_wrapper div").css({"border-color":d}),$(".select_a_slide_link_wrapper div").css({"background-color":_}),$(".select_a_slide_link_wrapper div").mouseover(function(){$(this).css({"background-color":d},400)}),$(".select_a_slide_link_wrapper div").mouseout(function(){$(this).css({"background-color":_},400)}),$(window).resize(function(){e(),l()})});
var $connectPath = 'http://'+window.location.hostname+'/liveSite/';

$(document).ready(function(){
//get_logo();
//get_mobile_logo();
modify_content_width();
//load_globals();
load_map_quest();
load_google_map();
nonlinks();
lightBoxImgs();
displayBackButton();
on_resize();
add_token();
// Needed for sliders
$sliderFunctionStarted = false;
setTimeout(function(){ check_floating_element_position(); }, 500);
setTimeout(function(){ check_onscreen_on_load(); }, 1000);
});



function buttonLoader(button) {
	    var buttonWidth = button.width();
		button.html('<div class="button-loader" style="width:'+buttonWidth+'px;"></div>');
}
function buttonError(button,origHtml) {
	    var buttonWidth = button.width();
		button.html('<div class="button-error" style="width:'+buttonWidth+'px;"></div>');
		setTimeout(function(){ button.html(origHtml); },3000);
}
function buttonFinished(button,origHtml) {
	    var buttonWidth = button.width();
		button.html('<div class="button-finished" style="width:'+buttonWidth+'px;"></div>');
		setTimeout(function(){ button.html(origHtml); },3000);
}


function add_token(){
		var dataString = '&session=token' + '&mode=get_sessions';
					$.ajax({
						type: "POST",
						url: "../scripts/connect_live_sites.php",
						data: dataString,
						success: function(r){
							//console.log(r); 
							$(".module_slider_structure_wrap form").attr("data-token",r);
						 }
					});
}

function on_resize(){
	$(window).resize(function(){
		check_floating_element_position();
	});
}



function displayBackButton(){
	var homeDiv = $('#homeDiv').length;
		if (!homeDiv){
			var back_button_content = $("#back_button_content").html();
			$(".maincontent").append(back_button_content);
		}
}


function get_logo(){
	var dataString = '&mode=get_logo';
					$.ajax({
						type: "POST",
						url: $connectPath+"connect.php",
						data: dataString,
						success: function(r){
							//console.log(r); 
							$(".logo img").attr("src",r);
						 }
					});
}
function get_mobile_logo(){
	var dataString = '&mode=get_mobile_logo';
					$.ajax({
						type: "POST",
						url: $connectPath+"connect.php",
						data: dataString,
						success: function(r){
							//console.log(r); 
							$(".mobile_logo img").attr("src",r);
						 }
					});
}









// ========================================
// Disable Cursor from non-linked links
// ========================================
function nonlinks(){
	$(".menu a").each(function(){
		var attr = $(this).attr("href");
		if (typeof attr === typeof undefined && attr !== true) {
			$(this).css({"cursor":"default"});
			$(this).addClass("nolink");
			
		}
		nolinkFollow();
	});
}
function nolinkFollow(){
	$(".nolink").click(function(e){
		console.log("YO NoFollow");
		e.preventDefault();
	});
}








// ========================================
// LightBox Images
// ========================================
function lightBoxImgs(){
	$("a").each(function(){
		var rel = $(this).attr("rel");
		var href = $(this).attr("href");
		var title = $(this).attr("title");
		var description = $(this).attr("data-description");
		//console.log(attr);
		if (typeof rel !== typeof undefined && rel !== false) {
			console.log(rel.substring(0, 8));
			if (rel.substring(0, 8)==='lightbox'){
				$(this).click(function(e){
					var maxWidth = '';
					var maxHeight = '';
					closeLightBoxImgs();
					e.preventDefault();
					$(".lightBoxTitle").html(title);
					$(".lightBoxBody").html('<div class="loading_container"></div>');
					$("body").append('<img id="getImgWidth" style="display:none;" src="'+href+'">');
					setTimeout(function(){
						maxWidth = $("#getImgWidth").width();
						maxHeight = $("#getImgWidth").height();
						if (maxWidth>=600) { maxWidth = 600; }
						if (maxHeight>=600) { maxHeight = 600; }
						var marginLeft = maxWidth / 2; console.log(marginLeft);
						$(".lightBoxBody").html('<img src="'+href+'" style="width:100%;max-width:'+maxWidth+'px;max-height:'+maxHeight+'px">');
						$(".lightBoxWrapper").css({"max-width":maxWidth+"px","margin-left":"-"+marginLeft+"px"});
						$(".lightBoxDescription").html(description);
						if (description) { $(".lightBoxDescription").show(); }
						$("#getImgWidth").remove();
					},800);
					$(".opacBackground").fadeIn();
					$(".lightBoxWrapper").fadeIn();
					
				});
			}
		}
	});
}
function closeLightBoxImgs(){
	$(".lightBoxClose, .opacBackground").click(function(){
		$(".opacBackground").fadeOut();
		$(".lightBoxWrapper").fadeOut();
		setTimeout(function(){ 
			$(".lightBoxWrapper").css({"max-width":"600px","margin-left":"-300px"}); 
			$(".lightBoxTitle").html('');
			$(".lightBoxDescription").html('');
			$(".lightBoxDescription").hide();
		}, 500);
	});
}









function check_floating_element_position(){
	$(".floating").each(function(){
		var original_left_offset = $(this).attr('data-marginleft');
		$(this).css('left', '50%');
		$(this).css('margin-left', original_left_offset+'px');
		
		var element_left_offset = $(this).offset().left;
		var element_width = parseInt($(this).css('width'));
		var center = $(window).width() / 2;
		var finright = element_left_offset - center;
		var rightOffset = center + finright + element_width;
		
		//console.log('----------------');
		//console.log('element_left_offset: '+element_left_offset);
		//console.log('original_left_offset: '+original_left_offset);
		//console.log('element_width: '+element_width);
		//console.log('center: '+center);
		//console.log('finright: '+finright);
		//console.log('rightOffset: '+rightOffset);
		//console.log($(window).width());
		
		
		if (rightOffset>=$(window).width()) { 
			$(this).css('margin-left', '-'+element_width-8+'px');
			$(this).css('left', '100%');
		}
		
		if (element_left_offset<='8') { 
			$(this).css('left', '0');
			$(this).css('margin-left', '8px'); 
		}
		
	});
}







// ==========================
// Load Globals
// ==========================
function load_globals() {	
	var horizontal_top_globals = $("#horizontal_top_globals").html();
	var horizontal_bottom_globals = $("#horizontal_bottom_globals").html();
	var vertical_left_globals = $("#vertical_left_globals").html();
	var vertical_right_globals = $("#vertical_right_globals").html();
	var floating_globals = $("#floating_globals").html();
	var custom_global_content = $("#custom_global_content").html(); $("#custom_global_content").html("");
	//var global_css_placeholder = $("#global_css_placeholder").html();
	
	//setTimeout(function(){ $("head").append(global_css_placeholder); }, 500);

	if (vertical_left_globals || vertical_right_globals) {
		$(".maincontent").wrapInner('<div class="inner_wrap horizontal_sort move_disabled vertical_sort_enabled"></div>');
		$(".inner_wrap").before(vertical_left_globals);
		$(".inner_wrap").before(vertical_right_globals);
		$(".maincontent").append('<div style="clear:both;"></div>');
		setTimeout(function(){ modify_content_width(); }, 300);
	}	
	
	$(".maincontent").before(replaceAll(horizontal_top_globals,"scripttype", "script"));
	$(".maincontent").after(replaceAll(horizontal_bottom_globals,"scripttype", "script"));
	
	//console.log(horizontal_top_globals);
	
	function replaceAll(txt, replace, with_this) {
         return txt.replace(new RegExp(replace, 'g'),with_this);
    }
	
	
	$(".content_editor .site_wrapper").append(replaceAll(floating_globals,"scripttype", "script"));
		$(".floating").each(function(){
			//$(this).attr('data-marginleft',$(this).css('margin-left'));
			var parent = $(this);
			var dropZone = $(window);
			var center = dropZone.width() / 2;
			var element_left_offset = parent.offset().left;
			var finright = element_left_offset - center;
			var fintop = parent.offset().top;
			$(this).css('left', '50%');
			$(this).css('margin-left', finright);
			$(this).css('top', fintop);
			$(this).css('position', 'absolute');
			$(this).attr('data-marginleft', finright);
			$(this).css('right', '');
			$(this).css('margin-right', '');
			$(this).children(".floating").css('width', '100% !important');
		});
		
		
	$("#horizontal_top_globals").remove();
	$("#horizontal_bottom_globals").remove();
	$("#vertical_left_globals").remove();
	$("#vertical_right_globals").remove();
	$("#floating_globals").remove();
}



function modify_content_width() {
	var sitewidth = parseInt($(".content_editor .site_width").css("width"));
	var globalwidth = parseInt($(".ver_global").css("width"));
	var innerwidth = (sitewidth - globalwidth) - 18;
	var get_parcent = ((innerwidth / sitewidth) * 100) - 0.7;
	$(".inner_wrap").css({"width":get_parcent+"%","max-width":innerwidth+"px"});
	//console.log(sitewidth+' | '+globalwidth+' | '+innerwidth+' | '+get_parcent);
}










// ==========================
// MapQuest Load Map <--- Old function, only used for site that still use and ID rather than a Class. We will romove this eventually
// ==========================
function load_map_quest() {
	if ($("#map").length) {
		
		
						//----------------------	
						$this = $("#map");
						var width = $this.attr("data-width");
						var height = $this.attr("data-height");
						var address = $this.attr("data-address");
						var city = $this.attr("data-city");
						var state = $this.attr("data-state");
						var zipcode = $this.attr("data-zipcode");
						var test = $this.attr("data-test");
						$zoom = $this.attr("data-zoom");
						$randnum = Math.floor(Math.random() * 6000000000) + 100000;
						$this.attr("id",$randnum);

						$this.css({"width":width,"height":height});
						var geocoder;
						var map;
						var address = address+', '+city+', '+state+', '+zipcode;
						//------------------------	

							  geocoder = new google.maps.Geocoder();
							  var latlng = new google.maps.LatLng(-34.397, 150.644);
							  var myOptions = {
								zoom: parseInt($zoom),
								center: latlng,
								mapTypeControl: true,
								mapTypeControlOptions: {
								  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
								},
								navigationControl: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP
							  };
							  map = new google.maps.Map(document.getElementById($randnum), myOptions);
							  if (geocoder) {
								geocoder.geocode({
								  'address': address
								}, function(results, status) {
								  if (status == google.maps.GeocoderStatus.OK) {
									if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
									  map.setCenter(results[0].geometry.location);

									  var infowindow = new google.maps.InfoWindow({
										content: '<b>' + address + '</b>',
										size: new google.maps.Size(150, 50)
									  });

									  var marker = new google.maps.Marker({
										position: results[0].geometry.location,
										map: map,
										title: address
									  });
									  google.maps.event.addListener(marker, 'click', function() {
										infowindow.open(map, marker);
									  });

									} else {
									  console.log("No results found");
									}
								  } else {
									console.log("Geocode was not successful for the following reason: " + status);
								  }
								});
							  }
		
	
				/*var width = $("#map").attr("data-width");
				var height = $("#map").attr("data-height");
				var address = $("#map").attr("data-address");
				var city = $("#map").attr("data-city");
				var state = $("#map").attr("data-state");
				var zipcode = $("#map").attr("data-zipcode");
				$zoom = $("#map").attr("data-zoom");
				$("#map").css({"width":width,"height":height});
				$randnum = Math.floor(Math.random() * 6000000000) + 100000;
				$("#map").css({"width":width,"height":height});
				$("#map").attr("id",$randnum);
					
					var geocoder;
					var map;
					var address = address+', '+city+', '+state+', '+zipcode;

					function initialize() {
						console.log($zoom);
					  geocoder = new google.maps.Geocoder();
					  var latlng = new google.maps.LatLng(-34.397, 150.644);
					  var myOptions = {
						zoom: parseInt($zoom),
						center: latlng,
						mapTypeControl: true,
						mapTypeControlOptions: {
						  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
						},
						navigationControl: true,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					  };
					  map = new google.maps.Map(document.getElementById($randnum), myOptions);
					  if (geocoder) {
						geocoder.geocode({
						  'address': address
						}, function(results, status) {
						  if (status == google.maps.GeocoderStatus.OK) {
							if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
							  map.setCenter(results[0].geometry.location);

							  var infowindow = new google.maps.InfoWindow({
								content: '<b>' + address + '</b>',
								size: new google.maps.Size(150, 50)
							  });

							  var marker = new google.maps.Marker({
								position: results[0].geometry.location,
								map: map,
								title: address
							  });
							  google.maps.event.addListener(marker, 'click', function() {
								infowindow.open(map, marker);
							  });

							} else {
							  console.log("No results found");
							}
						  } else {
							console.log("Geocode was not successful for the following reason: " + status);
						  }
						});
					  }
					}
					google.maps.event.addDomListener(window, 'load', initialize);*/
				
	}
}












// ==========================
// Load Google Map
// ==========================
function load_google_map() {
	if ($(".map").length) {


					//function initialize() {
						
						
						//----------------------	
						$(".map").each(function(i){
						$this = $(this);
						var width = $(this).attr("data-width");
						var height = $(this).attr("data-height");
						var address = $(this).attr("data-address");
						var city = $(this).attr("data-city");
						var state = $(this).attr("data-state");
						var zipcode = $(this).attr("data-zipcode");
						var test = $(this).attr("data-test");
						$zoom = $(this).attr("data-zoom");
						$randnum = Math.floor(Math.random() * 6000000000) + 100000;
						$this.attr("id",$randnum);

						$(this).css({"width":width,"height":height});
						var geocoder;
						var map;
						var address = address+', '+city+', '+state+', '+zipcode;
						//------------------------	

							  geocoder = new google.maps.Geocoder();
							  var latlng = new google.maps.LatLng(-34.397, 150.644);
							  var myOptions = {
								zoom: parseInt($zoom),
								center: latlng,
								mapTypeControl: true,
								mapTypeControlOptions: {
								  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
								},
								navigationControl: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP
							  };
							  map = new google.maps.Map(document.getElementById($randnum), myOptions);
							  if (geocoder) {
								geocoder.geocode({
								  'address': address
								}, function(results, status) {
								  if (status == google.maps.GeocoderStatus.OK) {
									if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
									  map.setCenter(results[0].geometry.location);

									  var infowindow = new google.maps.InfoWindow({
										content: '<b>' + address + '</b>',
										size: new google.maps.Size(150, 50)
									  });

									  var marker = new google.maps.Marker({
										position: results[0].geometry.location,
										map: map,
										title: address
									  });
									  google.maps.event.addListener(marker, 'click', function() {
										infowindow.open(map, marker);
									  });

									} else {
									  console.log("No results found");
									}
								  } else {
									console.log("Geocode was not successful for the following reason: " + status);
								  }
								});
							  }

						});
						
					//}
		
					//google.maps.event.addDomListener(window, 'load', initialize);
		
	}

}

















/*
====================
Animation Classes
====================
*/
$.fn.isElOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(window).scroll(function(){
	$('.from_left').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_left", 1000); } });
	$('.from_right').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_right", 1000); } });
	$('.from_bottom').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_bottom", 1000); } });
	$('.fade_in').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_fade_in", 1000); } });
});

function check_onscreen_on_load(){
	$('.from_left').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_left", 1000); } });
	$('.from_right').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_right", 1000); } });
	$('.from_bottom').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_bottom", 1000); } });
	$('.fade_in').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_fade_in", 1000); } });
}
!function(t,e){"use strict";t.MixItUp=function(){var e=this;e._execAction("_constructor",0),t.extend(e,{selectors:{target:".mix",filter:".filter",sort:".sort"},animation:{enable:!0,effects:"fade scale",duration:600,easing:"ease",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:"or",activeClass:"active"},layout:{display:"inline-block",containerClass:"",containerClassFail:"fail"},load:{filter:"all",sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:"",_activeSort:"default:asc",_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:t(),_$hide:t()}),e._execAction("_constructor",1)},t.MixItUp.prototype={constructor:t.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(e){for(var a in e)t.MixItUp.prototype[a]=e[a]},addAction:function(e,a,i,n){t.MixItUp.prototype._addHook("_actions",e,a,i,n)},addFilter:function(e,a,i,n){t.MixItUp.prototype._addHook("_filters",e,a,i,n)},_addHook:function(e,a,i,n,r){var o=t.MixItUp.prototype[e],s={};r=1===r||"post"===r?"post":"pre",s[a]={},s[a][r]={},s[a][r][i]=n,t.extend(!0,o,s)},_init:function(e,a){var i=this;if(i._execAction("_init",0,arguments),a&&t.extend(!0,i,a),i._$body=t("body"),i._domNode=e,i._$container=t(e),i._$container.addClass(i.layout.containerClass),i._id=e.id,i._platformDetect(),i._brake=i._getPrefixedCSS("transition","none"),i._refresh(!0),i._$parent=i._$targets.parent().length?i._$targets.parent():i._$container,i.load.sort&&(i._newSort=i._parseSort(i.load.sort),i._newSortString=i.load.sort,i._activeSort=i.load.sort,i._sort(),i._printSort()),i._activeFilter="all"===i.load.filter?i.selectors.target:"none"===i.load.filter?"":i.load.filter,i.controls.enable&&i._bindHandlers(),i.controls.toggleFilterButtons){i._buildToggleArray();for(var n=0;n<i._toggleArray.length;n++)i._updateControls({filter:i._toggleArray[n],sort:i._activeSort},!0)}else i.controls.enable&&i._updateControls({filter:i._activeFilter,sort:i._activeSort});i._filter(),i._init=!0,i._$container.data("mixItUp",i),i._execAction("_init",1,arguments),i._buildState(),i._$targets.css(i._brake),i._goMix(i.animation.enable)},_platformDetect:function(){var t=this,a=["Webkit","Moz","O","ms"],i=["webkit","moz"],n=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,r="undefined"!=typeof InstallTrigger,o=function(t){for(var e=0;e<a.length;e++)if(a[e]+"Transition"in t.style)return{prefix:"-"+a[e].toLowerCase()+"-",vendor:a[e]};return"transition"in t.style?"":!1},s=o(t._domNode);t._execAction("_platformDetect",0),t._chrome=n?parseInt(n[1],10):!1,t._ff=r?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1,t._prefix=s.prefix,t._vendor=s.vendor,t._suckMode=window.atob&&t._prefix?!1:!0,t._suckMode&&(t.animation.enable=!1),t._ff&&t._ff<=4&&(t.animation.enable=!1);for(var l=0;l<i.length&&!window.requestAnimationFrame;l++)window.requestAnimationFrame=window[i[l]+"RequestAnimationFrame"];"function"!=typeof Object.getPrototypeOf&&("object"==typeof"test".__proto__?Object.getPrototypeOf=function(t){return t.__proto__}:Object.getPrototypeOf=function(t){return t.constructor.prototype}),t._domNode.nextElementSibling===e&&Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var t=this.nextSibling;t;){if(1===t.nodeType)return t;t=t.nextSibling}return null}}),t._execAction("_platformDetect",1)},_refresh:function(t,a){var i=this;i._execAction("_refresh",0,arguments),i._$targets=i._$container.find(i.selectors.target);for(var n=0;n<i._$targets.length;n++){var r=i._$targets[n];if(r.dataset===e||a){r.dataset={};for(var o=0;o<r.attributes.length;o++){var s=r.attributes[o],l=s.name,c=s.value;if(l.indexOf("data-")>-1){var _=i._helpers._camelCase(l.substring(5,l.length));r.dataset[_]=c}}}r.mixParent===e&&(r.mixParent=i._id)}if(i._$targets.length&&t||!i._origOrder.length&&i._$targets.length){i._origOrder=[];for(var n=0;n<i._$targets.length;n++){var r=i._$targets[n];i._origOrder.push(r)}}i._execAction("_refresh",1,arguments)},_bindHandlers:function(){var a=this,i=t.MixItUp.prototype._bound._filter,n=t.MixItUp.prototype._bound._sort;a._execAction("_bindHandlers",0),a.controls.live?a._$body.on("click.mixItUp."+a._id,a.selectors.sort,function(){a._processClick(t(this),"sort")}).on("click.mixItUp."+a._id,a.selectors.filter,function(){a._processClick(t(this),"filter")}):(a._$sortButtons=t(a.selectors.sort),a._$filterButtons=t(a.selectors.filter),a._$sortButtons.on("click.mixItUp."+a._id,function(){a._processClick(t(this),"sort")}),a._$filterButtons.on("click.mixItUp."+a._id,function(){a._processClick(t(this),"filter")})),i[a.selectors.filter]=i[a.selectors.filter]===e?1:i[a.selectors.filter]+1,n[a.selectors.sort]=n[a.selectors.sort]===e?1:n[a.selectors.sort]+1,a._execAction("_bindHandlers",1)},_processClick:function(a,i){var n=this,r=function(a,i,r){var o=t.MixItUp.prototype;o._handled["_"+i][n.selectors[i]]=o._handled["_"+i][n.selectors[i]]===e?1:o._handled["_"+i][n.selectors[i]]+1,o._handled["_"+i][n.selectors[i]]===o._bound["_"+i][n.selectors[i]]&&(a[(r?"remove":"add")+"Class"](n.controls.activeClass),delete o._handled["_"+i][n.selectors[i]])};if(n._execAction("_processClick",0,arguments),!n._mixing||n.animation.queue&&n._queue.length<n.animation.queueLimit){if(n._clicking=!0,"sort"===i){var o=a.attr("data-sort");(!a.hasClass(n.controls.activeClass)||o.indexOf("random")>-1)&&(t(n.selectors.sort).removeClass(n.controls.activeClass),r(a,i),n.sort(o))}if("filter"===i){var s,l=a.attr("data-filter"),c="or"===n.controls.toggleLogic?",":"";n.controls.toggleFilterButtons?(n._buildToggleArray(),a.hasClass(n.controls.activeClass)?(r(a,i,!0),s=n._toggleArray.indexOf(l),n._toggleArray.splice(s,1)):(r(a,i),n._toggleArray.push(l)),n._toggleArray=t.grep(n._toggleArray,function(t){return t}),n._toggleString=n._toggleArray.join(c),n.filter(n._toggleString)):a.hasClass(n.controls.activeClass)||(t(n.selectors.filter).removeClass(n.controls.activeClass),r(a,i),n.filter(l))}n._execAction("_processClick",1,arguments)}else"function"==typeof n.callbacks.onMixBusy&&n.callbacks.onMixBusy.call(n._domNode,n._state,n),n._execAction("_processClickBusy",1,arguments)},_buildToggleArray:function(){var t=this,e=t._activeFilter.replace(/\s/g,"");if(t._execAction("_buildToggleArray",0,arguments),"or"===t.controls.toggleLogic)t._toggleArray=e.split(",");else{t._toggleArray=e.split("."),!t._toggleArray[0]&&t._toggleArray.shift();for(var a,i=0;a=t._toggleArray[i];i++)t._toggleArray[i]="."+a}t._execAction("_buildToggleArray",1,arguments)},_updateControls:function(a,i){var n=this,r={filter:a.filter,sort:a.sort},o=function(t,e){try{i&&"filter"===s&&"none"!==r.filter&&""!==r.filter?t.filter(e).addClass(n.controls.activeClass):t.removeClass(n.controls.activeClass).filter(e).addClass(n.controls.activeClass)}catch(a){}},s="filter",l=null;n._execAction("_updateControls",0,arguments),a.filter===e&&(r.filter=n._activeFilter),a.sort===e&&(r.sort=n._activeSort),r.filter===n.selectors.target&&(r.filter="all");for(var c=0;2>c;c++)l=n.controls.live?t(n.selectors[s]):n["_$"+s+"Buttons"],l&&o(l,"[data-"+s+'="'+r[s]+'"]'),s="sort";n._execAction("_updateControls",1,arguments)},_filter:function(){var e=this;e._execAction("_filter",0);for(var a=0;a<e._$targets.length;a++){var i=t(e._$targets[a]);i.is(e._activeFilter)?e._$show=e._$show.add(i):e._$hide=e._$hide.add(i)}e._execAction("_filter",1)},_sort:function(){var t=this,e=function(t){for(var e=t.slice(),a=e.length,i=a;i--;){var n=parseInt(Math.random()*a),r=e[i];e[i]=e[n],e[n]=r}return e};t._execAction("_sort",0),t._startOrder=[];for(var a=0;a<t._$targets.length;a++){var i=t._$targets[a];t._startOrder.push(i)}switch(t._newSort[0].sortBy){case"default":t._newOrder=t._origOrder;break;case"random":t._newOrder=e(t._startOrder);break;case"custom":t._newOrder=t._newSort[0].order;break;default:t._newOrder=t._startOrder.concat().sort(function(e,a){return t._compare(e,a)})}t._execAction("_sort",1)},_compare:function(t,e,a){a=a?a:0;var i=this,n=i._newSort[a].order,r=function(t){return t.dataset[i._newSort[a].sortBy]||0},o=isNaN(1*r(t))?r(t).toLowerCase():1*r(t),s=isNaN(1*r(e))?r(e).toLowerCase():1*r(e);return s>o?"asc"===n?-1:1:o>s?"asc"===n?1:-1:o===s&&i._newSort.length>a+1?i._compare(t,e,a+1):0},_printSort:function(t){var e=this,a=t?e._startOrder:e._newOrder,i=e._$parent[0].querySelectorAll(e.selectors.target),n=i.length?i[i.length-1].nextElementSibling:null,r=document.createDocumentFragment();e._execAction("_printSort",0,arguments);for(var o=0;o<i.length;o++){var s=i[o],l=s.nextSibling;"absolute"!==s.style.position&&(l&&"#text"===l.nodeName&&e._$parent[0].removeChild(l),e._$parent[0].removeChild(s))}for(var o=0;o<a.length;o++){var c=a[o];if("default"!==e._newSort[0].sortBy||"desc"!==e._newSort[0].order||t)r.appendChild(c),r.appendChild(document.createTextNode(" "));else{var _=r.firstChild;r.insertBefore(c,_),r.insertBefore(document.createTextNode(" "),c)}}n?e._$parent[0].insertBefore(r,n):e._$parent[0].appendChild(r),e._execAction("_printSort",1,arguments)},_parseSort:function(t){for(var e=this,a="string"==typeof t?t.split(" "):[t],i=[],n=0;n<a.length;n++){var r="string"==typeof t?a[n].split(":"):["custom",a[n]],o={sortBy:e._helpers._camelCase(r[0]),order:r[1]||"asc"};if(i.push(o),"default"===o.sortBy||"random"===o.sortBy)break}return e._execFilter("_parseSort",i,arguments)},_parseEffects:function(){var t=this,e={opacity:"",transformIn:"",transformOut:"",filter:""},a=function(e,a,i){if(t.animation.effects.indexOf(e)>-1){if(a){var n=t.animation.effects.indexOf(e+"(");if(n>-1){var r=t.animation.effects.substring(n),o=/\(([^)]+)\)/.exec(r),s=o[1];return{val:s}}}return!0}return!1},i=function(t,e){return e?"-"===t.charAt(0)?t.substr(1,t.length):"-"+t:t},n=function(t,n){for(var r=[["scale",".01"],["translateX","20px"],["translateY","20px"],["translateZ","20px"],["rotateX","90deg"],["rotateY","90deg"],["rotateZ","180deg"]],o=0;o<r.length;o++){var s=r[o][0],l=r[o][1],c=n&&"scale"!==s;e[t]+=a(s)?s+"("+i(a(s,!0).val||l,c)+") ":""}};return e.opacity=a("fade")?a("fade",!0).val||"0":"1",n("transformIn"),t.animation.reverseOut?n("transformOut",!0):e.transformOut=e.transformIn,e.transition={},e.transition=t._getPrefixedCSS("transition","all "+t.animation.duration+"ms "+t.animation.easing+", opacity "+t.animation.duration+"ms linear"),t.animation.stagger=a("stagger")?!0:!1,t.animation.staggerDuration=parseInt(a("stagger")&&a("stagger",!0).val?a("stagger",!0).val:100),t._execFilter("_parseEffects",e)},_buildState:function(t){var e=this,a={};return e._execAction("_buildState",0),a={activeFilter:""===e._activeFilter?"none":e._activeFilter,activeSort:t&&e._newSortString?e._newSortString:e._activeSort,fail:!e._$show.length&&""!==e._activeFilter,$targets:e._$targets,$show:e._$show,$hide:e._$hide,totalTargets:e._$targets.length,totalShow:e._$show.length,totalHide:e._$hide.length,display:t&&e._newDisplay?e._newDisplay:e.layout.display},t?e._execFilter("_buildState",a):(e._state=a,void e._execAction("_buildState",1))},_goMix:function(t){var e=this,a=function(){e._chrome&&31===e._chrome&&r(e._$parent[0]),e._setInter(),i()},i=function(){var t=window.pageYOffset,a=window.pageXOffset;document.documentElement.scrollHeight;e._getInterMixData(),e._setFinal(),e._getFinalMixData(),window.pageYOffset!==t&&window.scrollTo(a,t),e._prepTargets(),window.requestAnimationFrame?requestAnimationFrame(n):setTimeout(function(){n()},20)},n=function(){e._animateTargets(),0===e._targetsBound&&e._cleanUp()},r=function(t){var e=t.parentElement,a=document.createElement("div"),i=document.createDocumentFragment();e.insertBefore(a,t),i.appendChild(t),e.replaceChild(t,a)},o=e._buildState(!0);e._execAction("_goMix",0,arguments),!e.animation.duration&&(t=!1),e._mixing=!0,e._$container.removeClass(e.layout.containerClassFail),"function"==typeof e.callbacks.onMixStart&&e.callbacks.onMixStart.call(e._domNode,e._state,o,e),e._$container.trigger("mixStart",[e._state,o,e]),e._getOrigMixData(),t&&!e._suckMode?window.requestAnimationFrame?requestAnimationFrame(a):a():e._cleanUp(),e._execAction("_goMix",1,arguments)},_getTargetData:function(t,e){var a,i=this;t.dataset[e+"PosX"]=t.offsetLeft,t.dataset[e+"PosY"]=t.offsetTop,i.animation.animateResizeTargets&&(a=i._suckMode?{marginBottom:"",marginRight:""}:window.getComputedStyle(t),t.dataset[e+"MarginBottom"]=parseInt(a.marginBottom),t.dataset[e+"MarginRight"]=parseInt(a.marginRight),t.dataset[e+"Width"]=t.offsetWidth,t.dataset[e+"Height"]=t.offsetHeight)},_getOrigMixData:function(){var t=this,e=t._suckMode?{boxSizing:""}:window.getComputedStyle(t._$parent[0]),a=e.boxSizing||e[t._vendor+"BoxSizing"];t._incPadding="border-box"===a,t._execAction("_getOrigMixData",0),!t._suckMode&&(t.effects=t._parseEffects()),t._$toHide=t._$hide.filter(":visible"),t._$toShow=t._$show.filter(":hidden"),t._$pre=t._$targets.filter(":visible"),t._startHeight=t._incPadding?t._$parent.outerHeight():t._$parent.height();for(var i=0;i<t._$pre.length;i++){var n=t._$pre[i];t._getTargetData(n,"orig")}t._execAction("_getOrigMixData",1)},_setInter:function(){var t=this;t._execAction("_setInter",0),t._changingLayout&&t.animation.animateChangeLayout?(t._$toShow.css("display",t._newDisplay),t._changingClass&&t._$container.removeClass(t.layout.containerClass).addClass(t._newClass)):t._$toShow.css("display",t.layout.display),t._execAction("_setInter",1)},_getInterMixData:function(){var t=this;t._execAction("_getInterMixData",0);for(var e=0;e<t._$toShow.length;e++){var a=t._$toShow[e];t._getTargetData(a,"inter")}for(var e=0;e<t._$pre.length;e++){var a=t._$pre[e];t._getTargetData(a,"inter")}t._execAction("_getInterMixData",1)},_setFinal:function(){var t=this;t._execAction("_setFinal",0),t._sorting&&t._printSort(),t._$toHide.removeStyle("display"),t._changingLayout&&t.animation.animateChangeLayout&&t._$pre.css("display",t._newDisplay),t._execAction("_setFinal",1)},_getFinalMixData:function(){var t=this;t._execAction("_getFinalMixData",0);for(var e=0;e<t._$toShow.length;e++){var a=t._$toShow[e];t._getTargetData(a,"final")}for(var e=0;e<t._$pre.length;e++){var a=t._$pre[e];t._getTargetData(a,"final")}t._newHeight=t._incPadding?t._$parent.outerHeight():t._$parent.height(),t._sorting&&t._printSort(!0),t._$toShow.removeStyle("display"),t._$pre.css("display",t.layout.display),t._changingClass&&t.animation.animateChangeLayout&&t._$container.removeClass(t._newClass).addClass(t.layout.containerClass),t._execAction("_getFinalMixData",1)},_prepTargets:function(){var e=this,a={_in:e._getPrefixedCSS("transform",e.effects.transformIn),_out:e._getPrefixedCSS("transform",e.effects.transformOut)};e._execAction("_prepTargets",0),e.animation.animateResizeContainer&&e._$parent.css("height",e._startHeight+"px");for(var i=0;i<e._$toShow.length;i++){var n=e._$toShow[i],r=t(n);n.style.opacity=e.effects.opacity,n.style.display=e._changingLayout&&e.animation.animateChangeLayout?e._newDisplay:e.layout.display,r.css(a._in),e.animation.animateResizeTargets&&(n.style.width=n.dataset.finalWidth+"px",n.style.height=n.dataset.finalHeight+"px",n.style.marginRight=-(n.dataset.finalWidth-n.dataset.interWidth)+1*n.dataset.finalMarginRight+"px",n.style.marginBottom=-(n.dataset.finalHeight-n.dataset.interHeight)+1*n.dataset.finalMarginBottom+"px")}for(var i=0;i<e._$pre.length;i++){var n=e._$pre[i],r=t(n),o={x:n.dataset.origPosX-n.dataset.interPosX,y:n.dataset.origPosY-n.dataset.interPosY},a=e._getPrefixedCSS("transform","translate("+o.x+"px,"+o.y+"px)");r.css(a),e.animation.animateResizeTargets&&(n.style.width=n.dataset.origWidth+"px",n.style.height=n.dataset.origHeight+"px",n.dataset.origWidth-n.dataset.finalWidth&&(n.style.marginRight=-(n.dataset.origWidth-n.dataset.interWidth)+1*n.dataset.origMarginRight+"px"),n.dataset.origHeight-n.dataset.finalHeight&&(n.style.marginBottom=-(n.dataset.origHeight-n.dataset.interHeight)+1*n.dataset.origMarginBottom+"px"))}e._execAction("_prepTargets",1)},_animateTargets:function(){var e=this;e._execAction("_animateTargets",0),e._targetsDone=0,e._targetsBound=0,e._$parent.css(e._getPrefixedCSS("perspective",e.animation.perspectiveDistance+"px")).css(e._getPrefixedCSS("perspective-origin",e.animation.perspectiveOrigin)),e.animation.animateResizeContainer&&e._$parent.css(e._getPrefixedCSS("transition","height "+e.animation.duration+"ms ease")).css("height",e._newHeight+"px");for(var a=0;a<e._$toShow.length;a++){var i=e._$toShow[a],n=t(i),r={x:i.dataset.finalPosX-i.dataset.interPosX,y:i.dataset.finalPosY-i.dataset.interPosY},o=e._getDelay(a),s={};i.style.opacity="";for(var l=0;2>l;l++){var c=0===l?c=e._prefix:"";e._ff&&e._ff<=20&&(s[c+"transition-property"]="all",s[c+"transition-timing-function"]=e.animation.easing+"ms",s[c+"transition-duration"]=e.animation.duration+"ms"),s[c+"transition-delay"]=o+"ms",s[c+"transform"]="translate("+r.x+"px,"+r.y+"px)"}(e.effects.transform||e.effects.opacity)&&e._bindTargetDone(n),e._ff&&e._ff<=20?n.css(s):n.css(e.effects.transition).css(s)}for(var a=0;a<e._$pre.length;a++){var i=e._$pre[a],n=t(i),r={x:i.dataset.finalPosX-i.dataset.interPosX,y:i.dataset.finalPosY-i.dataset.interPosY},o=e._getDelay(a);(i.dataset.finalPosX!==i.dataset.origPosX||i.dataset.finalPosY!==i.dataset.origPosY)&&e._bindTargetDone(n),n.css(e._getPrefixedCSS("transition","all "+e.animation.duration+"ms "+e.animation.easing+" "+o+"ms")),n.css(e._getPrefixedCSS("transform","translate("+r.x+"px,"+r.y+"px)")),e.animation.animateResizeTargets&&(i.dataset.origWidth-i.dataset.finalWidth&&1*i.dataset.finalWidth&&(i.style.width=i.dataset.finalWidth+"px",i.style.marginRight=-(i.dataset.finalWidth-i.dataset.interWidth)+1*i.dataset.finalMarginRight+"px"),i.dataset.origHeight-i.dataset.finalHeight&&1*i.dataset.finalHeight&&(i.style.height=i.dataset.finalHeight+"px",i.style.marginBottom=-(i.dataset.finalHeight-i.dataset.interHeight)+1*i.dataset.finalMarginBottom+"px"))}e._changingClass&&e._$container.removeClass(e.layout.containerClass).addClass(e._newClass);for(var a=0;a<e._$toHide.length;a++){for(var i=e._$toHide[a],n=t(i),o=e._getDelay(a),_={},l=0;2>l;l++){var c=0===l?c=e._prefix:"";_[c+"transition-delay"]=o+"ms",_[c+"transform"]=e.effects.transformOut,_.opacity=e.effects.opacity}n.css(e.effects.transition).css(_),(e.effects.transform||e.effects.opacity)&&e._bindTargetDone(n)}e._execAction("_animateTargets",1)},_bindTargetDone:function(e){var a=this,i=e[0];a._execAction("_bindTargetDone",0,arguments),i.dataset.bound||(i.dataset.bound=!0,a._targetsBound++,e.on("webkitTransitionEnd.mixItUp transitionend.mixItUp",function(n){(n.originalEvent.propertyName.indexOf("transform")>-1||n.originalEvent.propertyName.indexOf("opacity")>-1)&&t(n.originalEvent.target).is(a.selectors.target)&&(e.off(".mixItUp"),i.dataset.bound="",a._targetDone())})),a._execAction("_bindTargetDone",1,arguments)},_targetDone:function(){var t=this;t._execAction("_targetDone",0),t._targetsDone++,t._targetsDone===t._targetsBound&&t._cleanUp(),t._execAction("_targetDone",1)},_cleanUp:function(){var e=this,a=e.animation.animateResizeTargets?"transform opacity width height margin-bottom margin-right":"transform opacity",i=function(){e._$targets.removeStyle("transition",e._prefix)};e._execAction("_cleanUp",0),e._changingLayout?e._$show.css("display",e._newDisplay):e._$show.css("display",e.layout.display),e._$targets.css(e._brake),e._$targets.removeStyle(a,e._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),e._$hide.removeStyle("display"),e._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",e._prefix),e._sorting&&(e._printSort(),e._activeSort=e._newSortString,e._sorting=!1),e._changingLayout&&(e._changingDisplay&&(e.layout.display=e._newDisplay,e._changingDisplay=!1),e._changingClass&&(e._$parent.removeClass(e.layout.containerClass).addClass(e._newClass),e.layout.containerClass=e._newClass,e._changingClass=!1),e._changingLayout=!1),e._refresh(),e._buildState(),e._state.fail&&e._$container.addClass(e.layout.containerClassFail),e._$show=t(),e._$hide=t(),window.requestAnimationFrame&&requestAnimationFrame(i),e._mixing=!1,"function"==typeof e.callbacks._user&&e.callbacks._user.call(e._domNode,e._state,e),"function"==typeof e.callbacks.onMixEnd&&e.callbacks.onMixEnd.call(e._domNode,e._state,e),e._$container.trigger("mixEnd",[e._state,e]),e._state.fail&&("function"==typeof e.callbacks.onMixFail&&e.callbacks.onMixFail.call(e._domNode,e._state,e),e._$container.trigger("mixFail",[e._state,e])),e._loading&&("function"==typeof e.callbacks.onMixLoad&&e.callbacks.onMixLoad.call(e._domNode,e._state,e),e._$container.trigger("mixLoad",[e._state,e])),e._queue.length&&(e._execAction("_queue",0),e.multiMix(e._queue[0][0],e._queue[0][1],e._queue[0][2]),e._queue.splice(0,1)),e._execAction("_cleanUp",1),e._loading=!1},_getPrefixedCSS:function(t,e,a){var i=this,n={},r="",o=-1;for(o=0;2>o;o++)r=0===o?i._prefix:"",a?n[r+t]=r+e:n[r+t]=e;return i._execFilter("_getPrefixedCSS",n,arguments)},_getDelay:function(t){var e=this,a="function"==typeof e.animation.staggerSequence?e.animation.staggerSequence.call(e._domNode,t,e._state):t,i=e.animation.stagger?a*e.animation.staggerDuration:0;return e._execFilter("_getDelay",i,arguments)},_parseMultiMixArgs:function(t){for(var e=this,a={command:null,animate:e.animation.enable,callback:null},i=0;i<t.length;i++){var n=t[i];null!==n&&("object"==typeof n||"string"==typeof n?a.command=n:"boolean"==typeof n?a.animate=n:"function"==typeof n&&(a.callback=n))}return e._execFilter("_parseMultiMixArgs",a,arguments)},_parseInsertArgs:function(e){for(var a=this,i={index:0,$object:t(),multiMix:{filter:a._state.activeFilter},callback:null},n=0;n<e.length;n++){var r=e[n];"number"==typeof r?i.index=r:"object"==typeof r&&r instanceof t?i.$object=r:"object"==typeof r&&a._helpers._isElement(r)?i.$object=t(r):"object"==typeof r&&null!==r?i.multiMix=r:"boolean"!=typeof r||r?"function"==typeof r&&(i.callback=r):i.multiMix=!1}return a._execFilter("_parseInsertArgs",i,arguments)},_execAction:function(t,e,a){var i=this,n=e?"post":"pre";if(!i._actions.isEmptyObject&&i._actions.hasOwnProperty(t))for(var r in i._actions[t][n])i._actions[t][n][r].call(i,a)},_execFilter:function(t,e,a){var i=this;if(i._filters.isEmptyObject||!i._filters.hasOwnProperty(t))return e;for(var n in i._filters[t])return i._filters[t][n].call(i,a)},_helpers:{_camelCase:function(t){return t.replace(/-([a-z])/g,function(t){return t[1].toUpperCase()})},_isElement:function(t){return window.HTMLElement?t instanceof HTMLElement:null!==t&&1===t.nodeType&&"string"===t.nodeName}},isMixing:function(){var t=this;return t._execFilter("isMixing",t._mixing)},filter:function(){var t=this,e=t._parseMultiMixArgs(arguments);t._clicking&&(t._toggleString=""),t.multiMix({filter:e.command},e.animate,e.callback)},sort:function(){var t=this,e=t._parseMultiMixArgs(arguments);t.multiMix({sort:e.command},e.animate,e.callback)},changeLayout:function(){var t=this,e=t._parseMultiMixArgs(arguments);t.multiMix({changeLayout:e.command},e.animate,e.callback)},multiMix:function(){var t=this,a=t._parseMultiMixArgs(arguments);if(t._execAction("multiMix",0,arguments),t._mixing)t.animation.queue&&t._queue.length<t.animation.queueLimit?(t._queue.push(arguments),t.controls.enable&&!t._clicking&&t._updateControls(a.command),t._execAction("multiMixQueue",1,arguments)):("function"==typeof t.callbacks.onMixBusy&&t.callbacks.onMixBusy.call(t._domNode,t._state,t),t._$container.trigger("mixBusy",[t._state,t]),t._execAction("multiMixBusy",1,arguments));else{t.controls.enable&&!t._clicking&&(t.controls.toggleFilterButtons&&t._buildToggleArray(),t._updateControls(a.command,t.controls.toggleFilterButtons)),t._queue.length<2&&(t._clicking=!1),delete t.callbacks._user,a.callback&&(t.callbacks._user=a.callback);var i=a.command.sort,n=a.command.filter,r=a.command.changeLayout;t._refresh(),i&&(t._newSort=t._parseSort(i),t._newSortString=i,t._sorting=!0,t._sort()),n!==e&&(n="all"===n?t.selectors.target:n,t._activeFilter=n),t._filter(),r&&(t._newDisplay="string"==typeof r?r:r.display||t.layout.display,t._newClass=r.containerClass||"",(t._newDisplay!==t.layout.display||t._newClass!==t.layout.containerClass)&&(t._changingLayout=!0,t._changingClass=t._newClass!==t.layout.containerClass,t._changingDisplay=t._newDisplay!==t.layout.display)),t._$targets.css(t._brake),t._goMix(a.animate^t.animation.enable?a.animate:t.animation.enable),t._execAction("multiMix",1,arguments)}},insert:function(){var t=this,e=t._parseInsertArgs(arguments),a="function"==typeof e.callback?e.callback:null,i=document.createDocumentFragment(),n=function(){return t._refresh(),t._$targets.length?e.index<t._$targets.length||!t._$targets.length?t._$targets[e.index]:t._$targets[t._$targets.length-1].nextElementSibling:t._$parent[0].children[0]}();if(t._execAction("insert",0,arguments),e.$object){for(var r=0;r<e.$object.length;r++){var o=e.$object[r];i.appendChild(o),i.appendChild(document.createTextNode(" "))}t._$parent[0].insertBefore(i,n)}t._execAction("insert",1,arguments),"object"==typeof e.multiMix&&t.multiMix(e.multiMix,a)},prepend:function(){var t=this,e=t._parseInsertArgs(arguments);t.insert(0,e.$object,e.multiMix,e.callback)},append:function(){var t=this,e=t._parseInsertArgs(arguments);t.insert(t._state.totalTargets,e.$object,e.multiMix,e.callback)},getOption:function(t){var a=this,i=function(t,a){for(var i=a.split("."),n=i.pop(),r=i.length,o=1,s=i[0]||a;(t=t[s])&&r>o;)s=i[o],o++;return t!==e?t[n]!==e?t[n]:t:void 0};return t?a._execFilter("getOption",i(a,t),arguments):a},setOptions:function(e){var a=this;a._execAction("setOptions",0,arguments),"object"==typeof e&&t.extend(!0,a,e),a._execAction("setOptions",1,arguments)},getState:function(){var t=this;return t._execFilter("getState",t._state,t)},forceRefresh:function(){var t=this;t._refresh(!1,!0)},destroy:function(e){var a=this,i=t.MixItUp.prototype._bound._filter,n=t.MixItUp.prototype._bound._sort;a._execAction("destroy",0,arguments),a._$body.add(t(a.selectors.sort)).add(t(a.selectors.filter)).off(".mixItUp");for(var r=0;r<a._$targets.length;r++){var o=a._$targets[r];e&&(o.style.display=""),delete o.mixParent}a._execAction("destroy",1,arguments),i[a.selectors.filter]&&i[a.selectors.filter]>1?i[a.selectors.filter]--:1===i[a.selectors.filter]&&delete i[a.selectors.filter],n[a.selectors.sort]&&n[a.selectors.sort]>1?n[a.selectors.sort]--:1===n[a.selectors.sort]&&delete n[a.selectors.sort],delete t.MixItUp.prototype._instances[a._id]}},t.fn.mixItUp=function(){var a,i=arguments,n=[],r=function(e,a){var i=new t.MixItUp,n=function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()};i._execAction("_instantiate",0,arguments),e.id=e.id?e.id:"MixItUp"+n(),i._instances[e.id]||(i._instances[e.id]=i,i._init(e,a)),i._execAction("_instantiate",1,arguments)};return a=this.each(function(){if(i&&"string"==typeof i[0]){var a=t.MixItUp.prototype._instances[this.id];if("isLoaded"===i[0])n.push(a?!0:!1);else{var o=a[i[0]](i[1],i[2],i[3]);o!==e&&n.push(o)}}else r(this,i[0])}),n.length?n.length>1?n:n[0]:a},t.fn.removeStyle=function(a,i){return i=i?i:"",this.each(function(){for(var n=this,r=a.split(" "),o=0;o<r.length;o++)for(var s=0;4>s;s++){switch(s){case 0:var l=r[o];break;case 1:var l=t.MixItUp.prototype._helpers._camelCase(l);break;case 2:var l=i+r[o];break;case 3:var l=t.MixItUp.prototype._helpers._camelCase(i+r[o])}if(n.style[l]!==e&&"unknown"!=typeof n.style[l]&&n.style[l].length>0&&(n.style[l]=""),!i&&1===s)break}n.attributes&&n.attributes.style&&n.attributes.style!==e&&""===n.attributes.style.value&&n.attributes.removeNamedItem("style")})}}(jQuery);
var $connectPath = 'http://'+window.location.hostname+'/liveSite/';

$(document).ready(function(){
//get_logo();
//get_mobile_logo();
modify_content_width();
//load_globals();
init_load_globals();
load_map_quest();
load_google_map();
nonlinks();
lightBoxImgs();
displayBackButton();
on_resize();
add_token();
// Needed for sliders
$sliderFunctionStarted = false;
setTimeout(function(){ check_floating_element_position(); }, 500);
setTimeout(function(){ check_onscreen_on_load(); }, 1000);
toggle_contact_numbers();
//toggle_contact_numbers_init();
});


function toggle_contact_numbers_init(){
	$(".multiPhoneRowTitle").trigger("click");
}

function toggle_contact_numbers(){ console.log("Function Init");
	$(".multiPhoneRowTitle").click(function(){ console.log("Run Func");
		$(".multiPhoneRowWrapper").slideToggle("slow");
	});
}


function buttonLoader(button) {
	    var buttonWidth = button.width();
		button.html('<div class="button-loader" style="width:'+buttonWidth+'px;"></div>');
}
function buttonError(button,origHtml) {
	    var buttonWidth = button.width();
		button.html('<div class="button-error" style="width:'+buttonWidth+'px;"></div>');
		setTimeout(function(){ button.html(origHtml); },3000);
}
function buttonFinished(button,origHtml) {
	    var buttonWidth = button.width();
		button.html('<div class="button-finished" style="width:'+buttonWidth+'px;"></div>');
		setTimeout(function(){ button.html(origHtml); },3000);
}


function add_token(){
		var dataString = '&session=token' + '&mode=get_sessions';
					$.ajax({
						type: "POST",
						url: "../scripts/connect_live_sites.php",
						data: dataString,
						success: function(r){
							//console.log(r); 
							$(".module_slider_structure_wrap form").attr("data-token",r);
						 }
					});
}

function on_resize(){
	$(window).resize(function(){
		check_floating_element_position();
	});
}



function displayBackButton(){
	var homeDiv = $('#homeDiv').length;
		if (!homeDiv){
			var back_button_content = $("#back_button_content").html();
			$(".maincontent").append(back_button_content);
		}
}


function get_logo(){
	var dataString = '&mode=get_logo';
					$.ajax({
						type: "POST",
						url: $connectPath+"connect.php",
						data: dataString,
						success: function(r){
							//console.log(r); 
							$(".logo img").attr("src",r);
						 }
					});
}
function get_mobile_logo(){
	var dataString = '&mode=get_mobile_logo';
					$.ajax({
						type: "POST",
						url: $connectPath+"connect.php",
						data: dataString,
						success: function(r){
							//console.log(r); 
							$(".mobile_logo img").attr("src",r);
						 }
					});
}









// ========================================
// Disable Cursor from non-linked links
// ========================================
function nonlinks(){
	$(".menu a").each(function(){
		var attr = $(this).attr("href");
		if (typeof attr === typeof undefined && attr !== true) {
			$(this).css({"cursor":"default"});
			$(this).addClass("nolink");
			
		}
		nolinkFollow();
	});
}
function nolinkFollow(){
	$(".nolink").click(function(e){
		console.log("YO NoFollow");
		e.preventDefault();
	});
}








// ========================================
// LightBox Images
// ========================================
function lightBoxImgs(){
	$("a").each(function(){
		var rel = $(this).attr("rel");
		var href = $(this).attr("href");
		var title = $(this).attr("title");
		var description = $(this).attr("data-description");
		//console.log(attr);
		if (typeof rel !== typeof undefined && rel !== false) {
			console.log(rel.substring(0, 8));
			if (rel.substring(0, 8)==='lightbox'){
				$(this).click(function(e){
					var maxWidth = '';
					var maxHeight = '';
					closeLightBoxImgs();
					e.preventDefault();
					$(".lightBoxTitle").html(title);
					$(".lightBoxBody").html('<div class="loading_container"></div>');
					$("body").append('<img id="getImgWidth" style="display:none;" src="'+href+'">');
					setTimeout(function(){
						maxWidth = $("#getImgWidth").width();
						maxHeight = $("#getImgWidth").height();
						if (maxWidth>=600) { maxWidth = 600; }
						if (maxHeight>=600) { maxHeight = 600; }
						var marginLeft = maxWidth / 2; console.log(marginLeft);
						$(".lightBoxBody").html('<img src="'+href+'" style="width:100%;max-width:'+maxWidth+'px;max-height:'+maxHeight+'px">');
						$(".lightBoxWrapper").css({"max-width":maxWidth+"px","margin-left":"-"+marginLeft+"px"});
						$(".lightBoxDescription").html(description);
						if (description) { $(".lightBoxDescription").show(); }
						$("#getImgWidth").remove();
					},800);
					$(".opacBackground").fadeIn();
					$(".lightBoxWrapper").fadeIn();
					
				});
			}
		}
	});
}
function closeLightBoxImgs(){
	$(".lightBoxClose, .opacBackground").click(function(){
		$(".opacBackground").fadeOut();
		$(".lightBoxWrapper").fadeOut();
		setTimeout(function(){ 
			$(".lightBoxWrapper").css({"max-width":"600px","margin-left":"-300px"}); 
			$(".lightBoxTitle").html('');
			$(".lightBoxDescription").html('');
			$(".lightBoxDescription").hide();
		}, 500);
	});
}









function check_floating_element_position(){
	$(".floating").each(function(){
		var original_left_offset = $(this).attr('data-marginleft');
		$(this).css('left', '50%');
		$(this).css('margin-left', original_left_offset+'px');
		
		var element_left_offset = $(this).offset().left;
		var element_width = parseInt($(this).css('width'));
		var center = $(window).width() / 2;
		var finright = element_left_offset - center;
		var rightOffset = center + finright + element_width;
		
		//console.log('----------------');
		//console.log('element_left_offset: '+element_left_offset);
		//console.log('original_left_offset: '+original_left_offset);
		//console.log('element_width: '+element_width);
		//console.log('center: '+center);
		//console.log('finright: '+finright);
		//console.log('rightOffset: '+rightOffset);
		//console.log($(window).width());
		
		
		if (rightOffset>=$(window).width()) { 
			$(this).css('margin-left', '-'+element_width-8+'px');
			$(this).css('left', '100%');
		}
		
		if (element_left_offset<='8') { 
			$(this).css('left', '0');
			$(this).css('margin-left', '8px'); 
		}
		
	});
}







// ==========================
// Load Globals
// ==========================
function init_load_globals(){
	$(".floating").each(function(){
		//$(this).attr('data-marginleft',$(this).css('margin-left'));
		var parent = $(this);
		var dropZone = $(window);
		var center = dropZone.width() / 2;
		var element_left_offset = parent.offset().left;
		var finright = element_left_offset - center;
		var fintop = parent.offset().top;
		$(this).css('left', '50%');
		$(this).css('margin-left', finright);
		$(this).css('top', fintop);
		$(this).css('position', 'absolute');
		$(this).attr('data-marginleft', finright);
		$(this).css('right', '');
		$(this).css('margin-right', '');
		$(this).children(".floating").css('width', '100% !important');
	});
}

function load_globals() {	
	var horizontal_top_globals = $("#horizontal_top_globals").html();
	var horizontal_bottom_globals = $("#horizontal_bottom_globals").html();
	var vertical_left_globals = $("#vertical_left_globals").html();
	var vertical_right_globals = $("#vertical_right_globals").html();
	var floating_globals = $("#floating_globals").html();
	var custom_global_content = $("#custom_global_content").html(); $("#custom_global_content").html("");
	//var global_css_placeholder = $("#global_css_placeholder").html();
	
	//setTimeout(function(){ $("head").append(global_css_placeholder); }, 500);

	if (vertical_left_globals || vertical_right_globals) {
		$(".maincontent").wrapInner('<div class="inner_wrap horizontal_sort move_disabled vertical_sort_enabled"></div>');
		$(".inner_wrap").before(vertical_left_globals);
		$(".inner_wrap").before(vertical_right_globals);
		$(".maincontent").append('<div style="clear:both;"></div>');
		setTimeout(function(){ modify_content_width(); }, 300);
	}	
	
	$(".maincontent").before(replaceAll(horizontal_top_globals,"scripttype", "script"));
	$(".maincontent").after(replaceAll(horizontal_bottom_globals,"scripttype", "script"));
	
	//console.log(horizontal_top_globals);
	
	function replaceAll(txt, replace, with_this) {
         return txt.replace(new RegExp(replace, 'g'),with_this);
    }
	
	
	$(".content_editor .site_wrapper").append(replaceAll(floating_globals,"scripttype", "script"));
		$(".floating").each(function(){
			//$(this).attr('data-marginleft',$(this).css('margin-left'));
			var parent = $(this);
			var dropZone = $(window);
			var center = dropZone.width() / 2;
			var element_left_offset = parent.offset().left;
			var finright = element_left_offset - center;
			var fintop = parent.offset().top;
			$(this).css('left', '50%');
			$(this).css('margin-left', finright);
			$(this).css('top', fintop);
			$(this).css('position', 'absolute');
			$(this).attr('data-marginleft', finright);
			$(this).css('right', '');
			$(this).css('margin-right', '');
			$(this).children(".floating").css('width', '100% !important');
		});
		
		
	$("#horizontal_top_globals").remove();
	$("#horizontal_bottom_globals").remove();
	$("#vertical_left_globals").remove();
	$("#vertical_right_globals").remove();
	$("#floating_globals").remove();
}



function modify_content_width() {
	var sitewidth = parseInt($(".content_editor .site_width").css("width"));
	var globalwidth = parseInt($(".ver_global").css("width"));
	var innerwidth = (sitewidth - globalwidth) - 18;
	var get_parcent = ((innerwidth / sitewidth) * 100) - 0.7;
	$(".inner_wrap").css({"width":get_parcent+"% !important","max-width":innerwidth+"px !important"});
	console.log(sitewidth+' | '+globalwidth+' | '+innerwidth+' | '+get_parcent);
}










// ==========================
// MapQuest Load Map <--- Old function, only used for site that still use and ID rather than a Class. We will romove this eventually
// ==========================
function load_map_quest() {
	if ($("#map").length) {
		
		
						//----------------------	
						$this = $("#map");
						var width = $this.attr("data-width");
						var height = $this.attr("data-height");
						var address = $this.attr("data-address");
						var city = $this.attr("data-city");
						var state = $this.attr("data-state");
						var zipcode = $this.attr("data-zipcode");
						var test = $this.attr("data-test");
						$zoom = $this.attr("data-zoom");
						$randnum = Math.floor(Math.random() * 6000000000) + 100000;
						$this.attr("id",$randnum);

						$this.css({"width":width,"height":height});
						var geocoder;
						var map;
						var address = address+', '+city+', '+state+', '+zipcode;
						//------------------------	

							  geocoder = new google.maps.Geocoder();
							  var latlng = new google.maps.LatLng(-34.397, 150.644);
							  var myOptions = {
								zoom: parseInt($zoom),
								center: latlng,
								mapTypeControl: true,
								mapTypeControlOptions: {
								  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
								},
								navigationControl: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP
							  };
							  map = new google.maps.Map(document.getElementById($randnum), myOptions);
							  if (geocoder) {
								geocoder.geocode({
								  'address': address
								}, function(results, status) {
								  if (status == google.maps.GeocoderStatus.OK) {
									if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
									  map.setCenter(results[0].geometry.location);

									  var infowindow = new google.maps.InfoWindow({
										content: '<b>' + address + '</b>',
										size: new google.maps.Size(150, 50)
									  });

									  var marker = new google.maps.Marker({
										position: results[0].geometry.location,
										map: map,
										title: address
									  });
									  google.maps.event.addListener(marker, 'click', function() {
										infowindow.open(map, marker);
									  });

									} else {
									  console.log("No results found");
									}
								  } else {
									console.log("Geocode was not successful for the following reason: " + status);
								  }
								});
							  }
		
	
				/*var width = $("#map").attr("data-width");
				var height = $("#map").attr("data-height");
				var address = $("#map").attr("data-address");
				var city = $("#map").attr("data-city");
				var state = $("#map").attr("data-state");
				var zipcode = $("#map").attr("data-zipcode");
				$zoom = $("#map").attr("data-zoom");
				$("#map").css({"width":width,"height":height});
				$randnum = Math.floor(Math.random() * 6000000000) + 100000;
				$("#map").css({"width":width,"height":height});
				$("#map").attr("id",$randnum);
					
					var geocoder;
					var map;
					var address = address+', '+city+', '+state+', '+zipcode;

					function initialize() {
						console.log($zoom);
					  geocoder = new google.maps.Geocoder();
					  var latlng = new google.maps.LatLng(-34.397, 150.644);
					  var myOptions = {
						zoom: parseInt($zoom),
						center: latlng,
						mapTypeControl: true,
						mapTypeControlOptions: {
						  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
						},
						navigationControl: true,
						mapTypeId: google.maps.MapTypeId.ROADMAP
					  };
					  map = new google.maps.Map(document.getElementById($randnum), myOptions);
					  if (geocoder) {
						geocoder.geocode({
						  'address': address
						}, function(results, status) {
						  if (status == google.maps.GeocoderStatus.OK) {
							if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
							  map.setCenter(results[0].geometry.location);

							  var infowindow = new google.maps.InfoWindow({
								content: '<b>' + address + '</b>',
								size: new google.maps.Size(150, 50)
							  });

							  var marker = new google.maps.Marker({
								position: results[0].geometry.location,
								map: map,
								title: address
							  });
							  google.maps.event.addListener(marker, 'click', function() {
								infowindow.open(map, marker);
							  });

							} else {
							  console.log("No results found");
							}
						  } else {
							console.log("Geocode was not successful for the following reason: " + status);
						  }
						});
					  }
					}
					google.maps.event.addDomListener(window, 'load', initialize);*/
				
	}
}












// ==========================
// Load Google Map
// ==========================
function load_google_map() {
	if ($(".map").length) {


					//function initialize() {
						
						
						//----------------------	
						$(".map").each(function(i){
						$this = $(this);
						var width = $(this).attr("data-width");
						var height = $(this).attr("data-height");
						var address = $(this).attr("data-address");
						var city = $(this).attr("data-city");
						var state = $(this).attr("data-state");
						var zipcode = $(this).attr("data-zipcode");
						var test = $(this).attr("data-test");
						$zoom = $(this).attr("data-zoom");
						$randnum = Math.floor(Math.random() * 6000000000) + 100000;
						$this.attr("id",$randnum);

						$(this).css({"width":width,"height":height});
						var geocoder;
						var map;
						var address = address+', '+city+', '+state+', '+zipcode;
						//------------------------	

							  geocoder = new google.maps.Geocoder();
							  var latlng = new google.maps.LatLng(-34.397, 150.644);
							  var myOptions = {
								zoom: parseInt($zoom),
								center: latlng,
								mapTypeControl: true,
								mapTypeControlOptions: {
								  style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
								},
								navigationControl: true,
								mapTypeId: google.maps.MapTypeId.ROADMAP
							  };
							  map = new google.maps.Map(document.getElementById($randnum), myOptions);
							  if (geocoder) {
								geocoder.geocode({
								  'address': address
								}, function(results, status) {
								  if (status == google.maps.GeocoderStatus.OK) {
									if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
									  map.setCenter(results[0].geometry.location);

									  var infowindow = new google.maps.InfoWindow({
										content: '<b>' + address + '</b>',
										size: new google.maps.Size(150, 50)
									  });

									  var marker = new google.maps.Marker({
										position: results[0].geometry.location,
										map: map,
										title: address
									  });
									  google.maps.event.addListener(marker, 'click', function() {
										infowindow.open(map, marker);
									  });

									} else {
									  console.log("No results found");
									}
								  } else {
									console.log("Geocode was not successful for the following reason: " + status);
								  }
								});
							  }

						});
						
					//}
		
					//google.maps.event.addDomListener(window, 'load', initialize);
		
	}

}

















/*
====================
Animation Classes
====================
*/
$.fn.isElOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

$(window).scroll(function(){
	$('.from_left').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_left", 1000); } });
	$('.from_right').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_right", 1000); } });
	$('.from_bottom').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_bottom", 1000); } });
	$('.fade_in').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_fade_in", 1000); } });
});

function check_onscreen_on_load(){
	$('.from_left').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_left", 1000); } });
	$('.from_right').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_right", 1000); } });
	$('.from_bottom').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_from_bottom", 1000); } });
	$('.fade_in').each(function(){ if ($(this).isElOnScreen()) { $(this).addClass("animate_fade_in", 1000); } });
}
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(c," ")),u.json?JSON.parse(e):e}catch(n){}}function t(n,o){var i=u.raw?n:r(n);return e.isFunction(o)?o(i):i}var c=/\+/g,u=e.cookie=function(r,c,f){if(void 0!==c&&!e.isFunction(c)){if(f=e.extend({},u.defaults,f),"number"==typeof f.expires){var a=f.expires,d=f.expires=new Date;d.setTime(+d+864e5*a)}return document.cookie=[n(r),"=",i(c),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join("")}for(var p=r?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,x=s.length;x>m;m++){var v=s[m].split("="),k=o(v.shift()),l=v.join("=");if(r&&r===k){p=t(l,c);break}r||void 0===(l=t(l))||(p[k]=l)}return p};u.defaults={},e.removeCookie=function(n,o){return void 0===e.cookie(n)?!1:(e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n))}});
function check_for_scrollers(){$(".scrollable").each(function(){$(this).endlessScroll({width:"100%",height:"120px",steps:-2,speed:40,mousestop:!0})})}function hover_icon_images(){$(".hoverIconImg").each(function(){if(!$(this).parents(".hoverIconWrap").length){var t=$(this).attr("alt");$(this).wrap('<div class="hoverIconWrap"></div>'),$(this).after('<div class="hoverIconTitle">'+t+'</div><div class="hoverIconBG"><div class="hoverIconViewMore">View More</div></div>')}})}function mixitup(){$("#Container").mixItUp({animation:{effects:"fade scale(0.8)",duration:600},selectors:{filter:".miuFilterBtn"}})}setTimeout(function(){check_for_scrollers(),hover_icon_images()},800),function(t){t.fn.endlessScroll=function(e){e=t.extend({width:"100%",maxwidth:"400px",height:"100px",steps:-2,speed:40,mousestop:!0},e);var s=t(this),i=t(this).attr("id"),n=e.steps;s.css({overflow:"hidden",width:"100%","max-width":e.width,height:e.height,position:"relative",left:"0px",top:"0px"}),s.wrapInner("<nobr />"),s.mouseover(function(){e.mousestop&&(n=0)}),s.mouseout(function(){n=e.steps}),s.wrapInner("<div id='"+i+"1' />");var o=t("#"+i+"1");o.css({position:"absolute"}).clone().attr("id",i+"2").insertAfter(o);var r=t("#"+i+"2");a(o,r,e.steps>0);setInterval(function(){o.css({left:parseInt(o.css("left"))+n+"px"}),r.css({left:parseInt(r.css("left"))+n+"px"}),(parseInt(o.css("left"))<0||parseInt(o.css("left"))>o.width())&&a(o,r,e.steps>0)},e.speed);function a(t,e,s){t.css({left:s?"0px":t.width()+"px"}),e.css({left:s?-1*t.width()+"px":"0px"})}return s}}(jQuery),$(document).ready(function(){$(".miuImg").each(function(){$(".miuImg").width();var t=$(this).attr("alt"),e=$(this).data("addclass"),s=$(this).data("addcontent");if(console.log(s),s)s="<span>"+s+"</span>";else s='<span><div class="miuImgViewMore"></div></span>';$(this).wrap('<div class="miuImgWrap '+e+'"></div>'),$(this).after('<div class="miuImgTitle"><img class="imgExpander" src="http://imageserver.webpropartners.com/customJqueryImages/HoverIconImages/imgExpander.png" /><span>'+t+'</span></div><div class="miuImgBG">'+s+"</div>")}),mixitup(),$(".miuFilterBtn").click(function(){$(".miuFilterBtn").removeClass("miuFilterBtnClicked"),$(this).addClass("miuFilterBtnClicked")}),$(".miuBtnWrap button:first-child").trigger("click")}),$(document).ready(function(){$(".fancybox").fancybox({openEffect:"none",closeEffect:"none"}),$(".gallery-bootstrap-zoom").hover(function(){$(this).addClass("gallery-bootstrap-transition")},function(){$(this).removeClass("gallery-bootstrap-transition")})});
$(document).ready(function(e) {
	$menupos = $(".menu_wrapper").offset();
    $(window).scroll(function(){
		$windowTop = $(window).scrollTop();
		if ($menupos.top<=$windowTop && $windowTop>=90) { $(".menu_wrapper").css({"position":"fixed"}); }else{ $(".menu_wrapper").css({"position":"relative"}); } 
		/*//console.log($menupos.top+' | '+$windowTop);*/
	});












check_logo();
function check_logo(){
	if ($(".logo img").attr("src")===""){
		$(".logo img").attr("src","/designWizard/styles/Virginia_Slate/logo.png");
	}
}










	$(".mobile_menu_bg").on('click touch', function(){
		var bgcolor = $(".menu_wrapper").css("background-color");
		$(".menu_wrapper .menu ul").toggleClass("mobileMenuOpen", 400);
		$(".menu_wrapper .menu ul").css({"background-color":bgcolor});
        mobileMenuActivated()
	});
    function mobileMenuActivated(){
		$(".menu ul li a").unbind();
        $(".menu ul li a").on('click touch', function(){
            var bgcolor = $(this).css("background-color");
            $(this).next("ul").toggleClass("mobileMenuULOpen", 400);
            $(this).next("ul").css({"background-color":bgcolor});
        });
	}


});
$('.carousel').carousel();






