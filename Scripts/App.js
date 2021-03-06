"use strict";
jQuery(function (o) {
    o(document).ready(function () {
        AOS.init({
            duration: 1e3
        }), o(".js-scroll").click(function () {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var s = o(this.hash);
                if ((s = s.length ? s : o("[name=" + this.hash.slice(1) + "]")).length) return o("html,body").animate({
                    scrollTop: s.offset().top
                }, 1e3), !1
            }
        }), o(window).width() < 992 && (o(".links-section__links").mouseover(function () {
            var s = o(this).outerWidth() + "px",
                t = o(".links-section__list:first .links-section__links").offset().left,
                e = parseFloat(o(this).closest(".owl-stage").css("transform").split(",")[4]),
                i = o(this).offset().left - t + e + "px";
            o(".links-section__nav-scroll").css({
                "-webkit-transform": "translate(" + i + ")",
                "-ms-transform": "translate(" + i + ")",
                transform: "translate(" + i + ")",
                width: s
            })
        }), o(".links-section__links").mouseleave(function () {
            var s = o(".links-section__item.active .links-section__links").outerWidth() + "px",
                t = o(".links-section__list:first .links-section__links").offset().left,
                e = parseFloat(o(this).closest(".owl-stage").css("transform").split(",")[4]),
                i = o(".links-section__item.active .links-section__links").offset().left - t + e + "px";
            o(".links-section__nav-scroll").css({
                "-webkit-transform": "translate(" + i + ")",
                "-ms-transform": "translate(" + i + ")",
                transform: "translate(" + i + ")",
                width: s
            })
        })), 992 < o(window).width() && (o(".links-section__links").mouseover(function () {
            var s = o(this).outerWidth() + "px",
                t = o(".links-section__list:first .links-section__links").offset().left,
                e = o(this).offset().left - t + "px";
            o(".links-section__nav-scroll").css({
                "-webkit-transform": "translate(" + e + ")",
                "-ms-transform": "translate(" + e + ")",
                transform: "translate(" + e + ")",
                width: s
            })
        }), o(".links-section__links").mouseleave(function () {
            var s = o(".links-section__item.active .links-section__links").outerWidth() + "px",
                t = o(".links-section__list:first .links-section__links").offset().left,
                e = o(".links-section__item.active .links-section__links").offset().left - t + "px";
            o(".links-section__nav-scroll").css({
                "-webkit-transform": "translate(" + e + ")",
                "-ms-transform": "translate(" + e + ")",
                transform: "translate(" + e + ")",
                width: s
            })
        })), o("#sub_nav").scrollspy2({
            offset: -100,
            onChange: function (s) {
                var t = s[0].getAttribute("id"),
                    n = o('.links-section__links[href="#' + t + '"]'),
                    e = n.parents(".owl-item").index();
                e < o(".links-section__list .owl-item").length - 1 && o(".links-section__list").trigger("to.owl.carousel", [e]), setTimeout(function () {
                    var s = n.outerWidth() + "px",
                        t = o(".links-section__list:first .links-section__links").offset().left,
                        e = 0;
                    if (0 != o(".links-section__list .owl-stage").length) {
                        var i = parseFloat(n.closest(".owl-stage").css("transform").split(",")[4]);
                        e = (o(".links-section__list .owl-item").length, n.offset().left - t + i + "px")
                    } else e = n.offset().left - t + "px";
                    o(".links-section__nav-scroll").css({
                        "-webkit-transform": "translate(" + e + ")",
                        "-ms-transform": "translate(" + e + ")",
                        transform: "translate(" + e + ")",
                        width: s
                    })
                }, 300)
            }
        }, 1e3);
        var s = o(".links-section__wrapper").innerHeight();
        o(".links-section__dropdown").css("top", s);
        var t = o(".links-section__wrapper").offset().top;

        function e(s) {
            var t = 0,
                e = 0;
            s.css("height", "auto"), s.each(function () {
                e = o(this).height(), t < e && (t = e)
            }), s.height(t)
        }
        o(window).bind("scroll", function () {
            o(window).scrollTop() > t && !o(".links-section").hasClass("fixed") && (o(".links-section").fadeOut(100), o(".links-section").addClass("fixed"), o(".links-section").slideDown(500)), o(window).scrollTop() < t && o(".links-section").hasClass("fixed") && o(".links-section").removeClass("fixed")
        }), o(".dropdown-js").click(function (s) {
            s.preventDefault();
            var t = o(this).find(".svg-inline--fa");
            t.hasClass("fa-chevron-down") ? (t.removeClass("fa-chevron-down").addClass("fa-chevron-up"), o(".links-section__dropdown").slideDown()) : t.hasClass("fa-chevron-up") && (t.removeClass("fa-chevron-up").addClass("fa-chevron-down"), o(".links-section__dropdown").slideUp())
        }), o(".customers__nav-slider-js").slick({
            slidesToShow: 4,
            asNavFor: ".customers__slider-js",
            arrows: !1,
            draggable: !1,
            focusOnSelect: !0,
            responsive: [{
                breakpoint: 767,
                settings: {
                    centerMode: !0,
                    centerPadding: "60px",
                    infinite: !0,
                    draggable: !0,
                    slidesToShow: 1
                }
            }]
        }), o(".customers__slider-js").slick({
            slidesToShow: 1,
            arrows: !0,
            fade: !0,
            draggable: !1,
            autoplay: !0,
            autoplaySpeed: 5e3,
            pauseOnHover: !0,
            asNavFor: ".customers__nav-slider-js"
        }), o(".customers__slider-js").on("beforeChange", function (s, t) {
            var e, i, n;
            n = "customers__slider-item" == (e = o(t.$slider).find(".slick-current")).attr("class").split(" ")[0] ? {
                method: "pause",
                value: "true"
            } : {
                    event: "command",
                    func: "pauseVideo"
                }, null != (i = e.find("iframe").get(0)) && i.contentWindow.postMessage(JSON.stringify(n), "*")
        }), o(".products__slider-js").owlCarousel({
            autoWidth: !0,
            nav: !0,
            dots: !1,
            rewind: !0,
            responsive: {
                992: {
                    items: 1
                },
                1150: {
                    items: 2
                },
                1460: {
                    items: 3
                },
                1790: {
                    items: 4
                }
            }
        }), 
		/*New Owl Carousel for Customer Quotes*/
		o(".quotes__slider-js").owlCarousel({
			stagePadding: 200,
            loop:true,
			margin:10,
			nav:false,
			items:1,
			lazyLoad: true,
			autoplay:true,
			autoplayTimeout:8000,
			autoplayHoverPause:false,
            responsive: {
                0:{
            		items:1,
					stagePadding: 60
				},
				600:{
					items:1,
					stagePadding: 100
				},
				1000:{
					items:1,
					stagePadding: 200
				},
				1200:{
					items:1,
					stagePadding: 250
				},
				1400:{
					items:1,
					stagePadding: 300
				},
				1600:{
					items:1,
					stagePadding: 350
				},
				1800:{
					items:1,
					stagePadding: 400
				}
            }
        }), o(window).width() < 992 && o(".links-section__list").owlCarousel({
            autoWidth: !0,
            dots: !1,
            nav: !0,
            rewind: !0,
            items: 1
        }), o(window).on("resize", function () {
            e(o(".products__item-cell--image")), e(o(".products__item-cell--specs")), e(o(".products__item-cell--data")), e(o(".products__item-cell--features"))
        }).resize(), o(".customers__play-btn").click(function () {
            var s = o(this).siblings(".customers__video"),
                t = o(this).siblings(".customers__video-image"),
                e = o(this).siblings(".customers__shadow-layer");
            o(s).attr("src", o(s).data("src")).removeAttr("data-src"), o(s)[0].src += "&autoplay=1", o(this).hide(), o(e).hide(), o(t).css({
                opacity: "0"
            })
        })
    })
});