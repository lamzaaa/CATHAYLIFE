/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = () => {
	let headerHeight = $("header").outerHeight();
	let bannerHeight = $("#section-banner").outerHeight();
	$(window).scroll(function () {
		if ($(this).scrollTop() > headerHeight) {
			$("#scroll-top").addClass("show-scroll");
		} else {
			$("#scroll-top").removeClass("show-scroll");
		}
	});

	$("#scroll-top").on("click", function (e) {
		e.preventDefault();
		$("html,body").animate({
			scrollTop: 0,
		});
	});
};

/*==================== MAIN MENU MOBILE ====================*/
const mainMenu = () => {
	$("header .navbar-bottom")
		.find(".btn-toggle")
		.on("click", function () {
			$(this).toggleClass("active");
			$(this).siblings(".nav-main").toggleClass("active");
		});
	$("#overlay").on("click", function () {
		let $this = $(this);
		$this.removeClass("active");
		$(".btn-toggle").removeClass("active");
		$("header").find(".navbar-main .navbar-nav").removeClass("active");
	});
	$("header .navbar .navbar-main .navbar-top .wrapper-search")
		.find(".search-icon")
		.on("click", function () {
			$(this).siblings(".form-group").toggleClass("active");
		});
	$(".btn-sub ").on("click", function () {
		$(this).toggleClass("active");
		$(this).parent().next().slideToggle();
	});
};

/*==========LISTBANNER SLIDER==========*/
const swiperInit = () => {
	let myswiper = new Swiper(".home-banner .swiper-container", {
		loop: false,
		speed: 3500,
		effect: "fade",
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		fadeEffect: {
			crossFade: true,
		},
		pagination: {
			el: ".home-banner .swiper-pagination",
			clickable: true,
		},
	});
	let benefit = new Swiper(".wrapper-benefit-list .swiper-container", {
		speed: 300,
		loop: false,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl:
				".wrapper-benefit-list .swiper-container .swiper-button-next",
			prevEl:
				".wrapper-benefit-list .swiper-container .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			376: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1025: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			1280: {
				spaceBetween: 10,
				slidesPerView: 4,
			},
		},
	});
	let planning = new Swiper(".wrapper-planning .swiper-container", {
		speed: 300,
		loop: false,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".wrapper-planning .swiper-container .swiper-button-next",
			prevEl: ".wrapper-planning .swiper-container .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			376: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1280: {
				spaceBetween: 30,
				slidesPerView: 3,
			},
		},
	});
	let fieldSlide = new Swiper(".slide-knowledge .swiper-container", {
		speed: 300,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".slide-knowledge .swiper-button-next",
			prevEl: ".slide-knowledge .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1280: {
				spaceBetween: 30,
				slidesPerView: 4,
			},
		},
	});

	let gallerySlide = new Swiper(".wrapper-slide .swiper-container", {
		spaceBetween: 1,
		centeredSlides: true,
		roundLengths: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	let newsOther = new Swiper(".slide-other-news .swiper-container", {
		speed: 300,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".slide-other-news .swiper-button-next",
			prevEl: ".slide-other-news .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			375: {
				slidesPerView: 1,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1280: {
				spaceBetween: 30,
				slidesPerView: 2,
			},
		},
	});
	let slideColumn = new Swiper(".wrap-slide-human .swiper-container", {
		speed: 800,
		slidesPerView: 4,
		slidesPerColumn: 2,
		slidesPerColumnFill: "row",
		slidesPerGroup: 8,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".wrap-slide-human .swiper-button-next",
			prevEl: ".wrap-slide-human .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
				pagination: {
					el: ".wrap-slide-human .swiper-pagination",
					clickable: true,
				},
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
				pagination: {
					el: ".wrap-slide-human .swiper-pagination",
					clickable: true,
				},
			},
			575: {
				slidesPerView: 3,
				pagination: {
					el: ".wrap-slide-human .swiper-pagination",
					clickable: true,
				},
			},
			991: {
				slidesPerView: 3,
				pagination: {
					el: ".wrap-slide-human .swiper-pagination",
					clickable: true,
				},
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});
	let slideStory = new Swiper(".wrap-story-slide .swiper-container", {
		speed: 300,
		loop: true,
		observer: true,
		observeParents: true,
		navigation: {
			nextEl: ".wrap-story-slide .swiper-button-next",
			prevEl: ".wrap-story-slide .swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
				pagination: {
					el: ".wrap-story-slide .swiper-pagination",
					clickable: true,
				},
			},
			375: {
				slidesPerView: 2,
				spaceBetween: 10,
				pagination: {
					el: ".wrap-story-slide .swiper-pagination",
					clickable: true,
				},
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 10,
				pagination: {
					el: ".wrap-story-slide .swiper-pagination",
					clickable: true,
				},
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
				pagination: {
					el: ".wrap-story-slide .swiper-pagination",
					clickable: true,
				},
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
				pagination: {
					el: ".wrap-story-slide .swiper-pagination",
					clickable: true,
				},
			},
			1025: {
				slidesPerView: 3,
				spaceBetween: 20,
				pagination: {
					el: ".wrap-story-slide .swiper-pagination",
					clickable: true,
				},
			},
			1280: {
				spaceBetween: 30,
				slidesPerView: 4,
			},
		},
	});
};

// ===========================CHECK BANNER========================= //
const checkLayoutBanner = () => {
	let heightHeader = $("header").outerHeight();
	let mainBanner = $("#section-banner");
	if (mainBanner.length == 0) {
		$("main").css("padding-top", heightHeader);
	} else {
		$("main").css("padding-top", 0);
	}
};

/*=================== MAPPING =========================*/
const initMapping = () => {
	$(".navbar-bottom .btn-defaul").mapping({
		mobileWrapper: ".navbar .navbar-main .navbar-nav",
		mobileMethod: "appendTo",
		desktopWrapper: ".navbar .navbar-main .navbar-top .wrapper-list ul",
		desktopMethod: "appento",
		breakpoint: 575.98,
	});
};

/*===================SCROLL DOWN==========================*/
const scrollDown = () => {
	$(".slide-button").on("click", function (e) {
		e.preventDefault();
		$("html, body").animate(
			{
				scrollTop: $($(this).attr("href")).offset().top,
			},
			500,
			"linear"
		);
	});
};
/*===================BACKGROUNDELEMENT===========*/
const setBackgroundElement = () => {
	$("[setBackground]").each(function () {
		var background = $(this).attr("setBackground");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-size": "cover",
			"background-position": "center center",
		});
	});
	$("[setBackgroundRepeat]").each(function () {
		var background = $(this).attr("setBackgroundRepeat");
		$(this).css({
			"background-image": "url(" + background + ")",
			"background-repeat": "repeat",
		});
	});
};

/*==================HEADER WHEN SCROLL============*/
const activeHeaderWhenScroll = () => {
	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 0 && $(window).width() >= 992) {
			document.querySelector("header").classList.add("header-croll-down");
		} else {
			document
				.querySelector("header")
				.classList.remove("header-croll-down");
		}
	});
};
/*====================POPUP HOME==============================*/
const homePopup = () => {
	$(document).ready(function () {
		$("#popup_1").fancybox().trigger("click");
	});
};

/*=====================ACTIVE CATE=========================*/
const activeCatelog = () => {
	if ($("#tool-item").length >= 1 && $(window).width() < 992) {
		$("#tool-item").on("click", function () {
			$("section").find(".catelogry").toggleClass("active");
		});
	}
	if ($(window).width() < 1200) {
		$("#tool-item").on("click", function () {
			$(this).next().toggleClass("active");
		});
	}
};

/*======================SLIDE TABS=================================*/
const slideTab = () => {
	$(".tabs")
		.find(".swiper-inner")
		.on("click", function () {
			let $panel = $(this).closest(".tab-panel");
			$panel.find(".swiper-inner.active").removeClass("active");
			$(this).addClass("active");
			let panelToShow = $(this).attr("data-href");
			$panel.find(".panel.active").fadeOut(300, showNextPanel);

			function showNextPanel() {
				$(this).removeClass("active");
				$("#" + panelToShow).fadeIn(300, function () {
					$(this).addClass("active").fadeIn(300);
				});
			}
		});
	$(".recruit-list")
		.find("#select-box")
		.on("change", function () {
			if ($(this).children(":selected")) {
				let panelToShow = $("#select-box option").attr("value");
				$(".recruit-list")
					.find(".tab-content.active")
					.fadeOut(300, showNextPanel);

				function showNextPanel() {
					$("#" + panelToShow).fadeIn(300, function () {
						$(".recruit-list")
							.find(".tab-content")
							.addClass("active")
							.fadeIn(300);
					});
				}
			}
		});
};
/*======================CHANGEPLACEHOLDER=================================*/
const changePlaceholder = () => {
	$(".subscribe .subscribefrm")
		.find("input")
		.attr("placeholder", "Địa chỉ email...");
};
/*======================PHAN TRANG=================================*/
const phantrang = () => {
	$(".modulepager")
		.find(".pagination")
		.find("li>a.NextPage, li>a.LastPage, li>a.BackPage, li>a.FirstPage")
		.parent()
		.hide();
};

/*======================TOGGLE NAV=================================*/
const toggleNav = () => {
	$(".report-page .navbar")
		.find(".dropdown .caption em")
		.on("click", function () {
			$(".report-page .navbar").find(".dropdown-menu").slideToggle();
		});
	if ($(window).width() < 575.98) {
		$(".recruit-list .wrapper-top .wrapper-filter .dropdown .title")
			.find("em")
			.on("click", function () {
				$(".recruit-list .wrapper-top .wrapper-filter .dropdown")
					.find(".dropdown-menu")
					.slideToggle();
			});
	}
};

/*==================== SCROLL SECTION ===================*/
const crollToDiv = () => {
	$(".wrapper-list ul li a").on("click", function () {
		$(this).parent("li").addClass("active");
		if (this.hash !== "") {
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top,
				},
				function () {
					window.location.hash = hash;
				}
			);
		}
		$(".wrapper-list ul li a").not(this).parent("li").removeClass("active");
	});
};

/*================TABSPANEL======================*/
const tabs = () => {
	$(".tabs > li").on("click", function () {
		let $panel = $(this).closest(".tab-panels");
		$panel.find("li.active").removeClass("active");
		$(this).addClass("active");
		let panelToShow = $(this).attr("rel");
		$panel.find(".tab-content .panel.active").fadeOut(300, showNextPanel);

		function showNextPanel() {
			$(this).removeClass("active");
			$("#" + panelToShow).fadeIn(300, function () {
				$(this).addClass("active").fadeIn(300);
			});
		}
	});
	if ($(window).width() < 576) {
		$("#toggle-tool").on("click", function () {
			$(this).siblings(".tabs").toggleClass("active");
		});
	}
};

/*====================FAQLIST=================*/
const faqList = () => {
	$("#faq-list .title").on("click", function () {
		$(this).parent().toggleClass("active");
		$(this).next(".desc").slideToggle();
		$("#faq-list .title").not(this).siblings(".desc").slideUp();
		$("#faq-list .title").not(this).parent().removeClass("active");
	});
	$(".note-box .title").on("click", function () {
		$(this).toggleClass("active");
		$(this).siblings(".desc").slideToggle();
	});
};

/*==================== LOAD FUNCTION ====================*/
$(document).ready(function () {
	mainMenu();
	scrollTop();
	swiperInit();
	tabs();
	faqList();
	initMapping();
	// scrollDown();
	// setBackgroundElement();
	activeHeaderWhenScroll();
	// // homePopup();
	checkLayoutBanner();
	// activeCatelog();
	// slideTab();
	// changePlaceholder();
	// phantrang();
	// toggleNav();
	crollToDiv();
	/*==================== LIST TAB =========================*/
	var theTabs = $(".nav-tabs li");
	var i;

	function theTabClicks(tabClickEvent) {
		var clickedTab = tabClickEvent.currentTarget;
		var tabParent =
			tabClickEvent.currentTarget.parentNode.parentNode.parentNode;
		var theTabs = tabParent.querySelectorAll(".nav-tabs li");
		for (var i = 0; i < theTabs.length; i++) {
			theTabs[i].classList.remove("active");
		}

		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var contentPanes = tabParent.querySelectorAll(".tab-panel");
		for (i = 0; i < contentPanes.length; i++) {
			contentPanes[i].classList.remove("active");
		}
		var anchorReference = tabClickEvent.target;
		var activePaneId = anchorReference.getAttribute("href");
		var activePane = tabParent.querySelector(activePaneId);
		activePane.classList.add("active");
	}
	for (i = 0; i < theTabs.length; i++) {
		theTabs[i].addEventListener("click", theTabClicks);
	}
});
