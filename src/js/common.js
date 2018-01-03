var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    },
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        { string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {
            /* For Newer Netscapes (6+) */
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Internet Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {
            /* For Older Netscapes (4-) */
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ]
};
BrowserDetect.init();

function initStyleB() {
    if(BrowserDetect.browser === 'Internet Explorer' && BrowserDetect.version === 10){
        $('body').addClass('ie10')
    } else if(BrowserDetect.browser === 'Internet Explorer' && BrowserDetect.version === 9){
        $('body').addClass('ie9')
    }
}
initStyleB();

function initDropDownGos() {
    $('.wrapper-gos-site').click(function () {
        $(this).toggleClass('active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".wrapper-gos-site.active").length)
            return;
        $(".wrapper-gos-site.active").closest('.block-gos-site').find('.active').removeClass('active');
        event.stopPropagation();
    });
}

function initDropDownLang() {
    $('.block-dropdown_lang').click(function () {
        $(this).toggleClass('active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".block-dropdown_lang.active").length)
            return;
        $(".block-dropdown_lang.active").closest('.wrapper-second-header_lang').find('.active').removeClass('active');
        event.stopPropagation();
    });
}

function initDropDownSoc() {
    $('.wrapper-link-social-network').click(function () {
        $(this).toggleClass('active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest(".wrapper-link-social-network.active").length)
            return;
        $(".wrapper-link-social-network.active").closest('.block-second-header-sm').find('.active').removeClass('active');
        event.stopPropagation();
    });
}

function initMasonry() {
    $('.page-o').masonry({
        // options
        itemSelector: '.map-site-content_list-item'
    });
}

function initMasonryPage() {
    $('.page-m').masonry({
        // options
        itemSelector: '.map-site-content_list-item',
        initLayout: true
    });
}

function initClosePopupBtn() {
    $('.btn-close-c').click(function () {
        $.fancybox.close();
    })
}


function initSliderHeader() {
    var mySwiper = new Swiper('.block-swiper-container-header', {
        speed: 1000,
        spaceBetween: 100,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        virtualTranslate: false,
        touchReleaseOnEdges: false,
        simulateTouch: false
    });
}

function initSliderMobNews() {

    if ($(window).width() < 914) {
        var mySwiper = new Swiper('.block-wrapper-sticky-mobile_swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
        });
    }

    $(window).on('resize', function () {
        if ($(window).width() < 914) {
            var mySwiper = new Swiper('.block-wrapper-sticky-mobile_swiper', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                spaceBetween: 30,
            });
        }
    });
}

function initTabsHeader() {
    $('ul.tabs li').click(function () {
        $('ul.tabs li').removeClass('current');
        $(this).addClass('current');
    })
}

function initTabsSoc() {
    $('ul.tabs-s li').click(function () {
        var tab_id = $(this).attr('data-tabs');

        $('ul.tabs-s li').removeClass('current-s');
        $('.tab-content-s').removeClass('current-s');

        $(this).addClass('current-s');
        $("#" + tab_id).addClass('current-s');
    })
}

function initSliderHeaderNews() {
    $('.swiper-wrapper-news').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true,
        adaptiveHeight: true,
        dots: true
    });
}

function initSliderAnchor() {
    $('.swiper-anchor-slider').slick();

    var nextAnchor = $('.swiper-anchor-slider > .slick-next');
    var prevAnchor = $('.swiper-anchor-slider > .slick-prev');

    $(window).scroll(function (event) {
        var scrollTop = $(this).scrollTop();
        var scrollHeader = $('.container-wrapper-second-header').height();

        if ($('.container-anchor-slider').hasClass('active')) {
            if (scrollTop >= scrollHeader) {
                $('.container-wrapper-header').css({
                    "margin-top": "-100%",
                });
                $('.container-anchor-slider').css({
                    "margin-top": "0%",
                });
            } else {
                $('.container-anchor-slider').css({
                    "margin-top": "-100%",
                });
                $('.container-wrapper-header').css({
                    "margin-top": "0%"
                })
            }
        }
    });

    $(nextAnchor).click(function () {
        setTimeout(function () {
            var elementClick = $('.swiper-anchor-slider').find('.slick-active').find('.anchor-slider').attr('href');
            var destination = $(elementClick).offset().top - 100;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        }, 200)
    });

    $(prevAnchor).click(function () {
        setTimeout(function () {
            var elementClick = $('.swiper-anchor-slider').find('.slick-active').find('.anchor-slider').attr('href');
            var destination = $(elementClick).offset().top - 100;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 800);
            return false;
        }, 200)
    })

}

function initSliderDopCondition() {
    var swiper = new Swiper('.wrapper-admission-campaign_slider-swiper', {
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        breakpoints: {
            930: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });
}

function initSliderText() {
    var swiper = new Swiper('.content-row-wrapper_text-slider', {
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop: false
    });

    $('.content-row-wrapper_text-slider').each(function () {
        var eachBlock = $(this).length;
        if(eachBlock === 1){
            $('.swiper-slide').click(function () {
                if ($(this).hasClass('swiper-slide-next')){
                    swiper.slideNext()
                }
            });
        }
    });
}

function initStickyVideo() {
    $('.sticky').Stickyfill();
}

function initStickyPrint() {
    var heightStickyPrint = ($('.container-wrapper-second-header').height() + $('.content-row-wrapper').height()) / 4;
    var heightWindow = $(window).height() - $('.wrapper_row-social-print').height() - 50;

    $(".sticky-print").stick_in_parent({
        offset_top: heightWindow,
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > heightStickyPrint) {
            $('.wrapper_row-social-print').css({
                "bottom": "50px"
            })
        } else {
            $('.wrapper_row-social-print').css({
                "bottom": "-1000px"
            })
        }
    });
}

function initSearch() {
    $('.js-search-open').on('click', function () {
        $('.js-search-site').fadeIn(250);
        $('body').addClass('modal-open');
        setTimeout(function () {
            $('.map-site-content_search .input').focus();
        }, 300);
    });
    $('.js-search-close').on('click', function () {
        $('.js-search-site').fadeOut(250);
        $('body').removeClass('modal-open');
        // resetForm($('.js-search-site').find('.js-form'));
    });
}

function initSearchMapSite() {
    $('.js-search-open-map-site').on('click', function () {
        $('.js-map-site').fadeIn(250);
        $('body').addClass('modal-open');
        // $('.js_site-main_search > .input-border-bottom').focus();
        initMasonry({
            initLayout: true
        });
        setTimeout(function () {
            $('.page-o').css({
                "opacity": "1"
            })
        }, 500);
    });
    $('.js-search-close-map').on('click', function () {
        $('.js-map-site').fadeOut(250);
        $('.page-o').css({
            "opacity": "0"
        });
        $('body').removeClass('modal-open');
    });
    $('.mobile-menu_dop-link').on('click', function () {
        setTimeout(function () {
            $('.js-map-site').fadeOut(250);
            $('body').removeClass('modal-open');
        }, 800);
    });
}

function initScrollHeader() {
    var lastScrollTop = 0;
    var headerHeight = $('.container-wrapper-second-header').height() - 60;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        var tr0 = function () {
            $('.block-header-menu').css({
                "transition": "margin-top .0s ease"
            });
        };
        var tr1 = function () {
            $('.block-header-menu').css({
                "transition": "margin-top .1s ease"
            });
        };
        if (st > lastScrollTop) {

            if ($(window).width() > 768) {
                $('.block-header-menu').css({
                    "margin-top": "50px",
                });
                setTimeout(tr0,100)
            } else if ($(window).width() < 1280) {
                $('.block-header-logo').css({
                    "display": "none"
                });
            } else {
                $('.block-header-menu').css({
                    "margin-top": "20px"
                });
            }
            $('.container-wrapper-header').css({
                "background": "-moz-linear-gradient(top, rgba(21,46,98,0.9) 0%, rgba(18,51,119,0.4) 50%, rgba(18,51,119,0) 100%)",
                "background": "-webkit-linear-gradient(top, rgba(21,46,98,0.9) 0%,rgba(18,51,119,0.4) 50%,rgba(18,51,119,0) 100%)",
                "background": "linear-gradient(to bottom, rgba(21,46,98,0.9) 0%,rgba(18,51,119,0.4) 50%,rgba(18,51,119,0) 100%)",
                "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#e6152e62', endColorstr='#00123377',GradientType=0 )"
            });
            $('.block-header-logo').css({
                "width": "78px"
            });
            $('.swiper-pagination.index-pag').css({
                "display": "none"
            })
        } else {
            if ($(window).width() > 768) {
                $('.block-header-menu').css({
                    "margin-top":"90px"
                });
                setTimeout(tr1,150)
            } else {
                $('.block-header-menu').css("margin-top", "20px");
            }
            $('.container-wrapper-header').css({
                "background": "initial",
                "filter": "none"
            });
            $('.block-header-logo').css({
                "width": "120px"
            });
            $('.swiper-pagination.index-pag').css({
                "display": "block"
            });

        }

        if ($(window).width() < 1280) {
            if (st > lastScrollTop) {
                $('.block-header-logo').css({
                    "opacity": "0"
                });
                $('.block-header-logo-mobile').css({
                    "opacity": "0"
                })
            } else {
                $('.block-header-logo').css({
                    "opacity": "1"
                });
                $('.block-header-logo-mobile').css({
                    "opacity": "1"
                })
            }
        }

        if (st > headerHeight) {
            if ($(window).width() > 768) {
                $('.block-header-menu').css({
                    "margin-top": "15px"
                });
            } else {
                $('.block-header-menu').css("margin-top", "0");
            }
            $('.swiper-pagination.index-pag').css({
                "display": "none"
            });
            $('.container-wrapper-header').css({
                "background": "#08285e",
                "height": "50px"
            });
        }
    });
}

function initSimpleParallax() {
    var scrolled = $(window).scrollTop() + 1;
    $('.block-wrapper-sticky-mobile').css({"transform": "translate3d(0px, " + -(scrolled * 0.9) + "px, 0px)"});

    if ($(window).width() < 1180) {
        var scrolled = $(window).scrollTop() + 1;
        $('.block-wrapper-sticky-mobile').css({"transform": "translate3d(0px, " + -(scrolled * 0) + "px, 0px)"});
    }

    $(window).on('resize', function () {
        if ($(window).width() < 1180) {
            var scrolled = $(window).scrollTop() + 1;
            $('.block-wrapper-sticky-mobile').css({"transform": "translate3d(0px, " + -(scrolled * 0) + "px, 0px)"});
        }
    });
}

function initDropShow() {
    $('.js-drop-open-mobile > p').each(function () {
        $(this).on('click', function () {
            // $(this).find('.down').toggleClass('up');
            if ($(this).closest('.js-drop-open-mobile').hasClass('upOpen')) {
                $(this).closest('.js-drop-open-mobile').removeClass('upOpen');
                $(this).closest('.js-drop-open-mobile').find('.mobile-menu_dop').slideUp(300);
                $(this).find('.icon-arrow').removeClass('up-arrow');
            } else {
                $(this).closest('.js-drop-open-mobile').addClass('upOpen');
                $(this).closest('.js-drop-open-mobile').find('.mobile-menu_dop').slideDown(300);
                $(this).find('.icon-arrow').addClass('up-arrow');
            }
        })
    })
}

function initDropQShow() {
    $('.js-drop-open').each(function () {
        $(this).on('click', function () {
            $(this).find('.wrapper-accordion-question').slideToggle(300);
        })
    })
}

function initDropQShowNav() {
    $('.js-drop-open').each(function () {
        $(this).on('click', function () {
            if ($(this).hasClass('upOpen')) {
                $(this).removeClass('upOpen');
                $(this).find('.wrapper-accordion-nav').slideUp(300);
                $(this).find('.icon-arrow').removeClass('up-arrow');
            } else {
                $(this).addClass('upOpen');
                $(this).find('.wrapper-accordion-nav').slideDown(300);
                $(this).find('.icon-arrow').addClass('up-arrow');
            }
        })
    })
}

function initDropStaff() {
    $('.js-drop-open-table').each(function () {
        $(this).on('click', function () {
            if ($(this).hasClass('upOpen')) {
                $(this).removeClass('upOpen');
                $(this).closest('.wrapper-teaching-staff_table-row').find('.box-info-teaching-staff').slideUp(300);
                $(this).closest('.wrapper-teaching-staff_table-row').find('.wrapper-teaching-staff_table-row_icon').removeClass('up-arrow');
            } else {
                $(this).addClass('upOpen');
                $(this).closest('.wrapper-teaching-staff_table-row').find('.box-info-teaching-staff').slideDown(300);
                $(this).closest('.wrapper-teaching-staff_table-row').find('.wrapper-teaching-staff_table-row_icon').addClass('up-arrow');
            }
        })
    })
}

function initDropSpecialties() {
    $('.js-drop-open-secialties').each(function () {
        $(this).on('click', function () {
            if ($(this).hasClass('upOpen')) {
                $(this).removeClass('upOpen');
                $(this).find('.content-accordion').slideUp(300);
                $(this).find('.btn-open-secialties > span').text('+').css('right', '5px');
            } else {
                $(this).addClass('upOpen');
                $(this).find('.content-accordion').slideDown(300);
                $(this).find('.btn-open-secialties > span').text('–').css('right', '7px');
            }
        })
    })
}

function initMenu() {
    var clearSetTimeout;
    var menuDelay = 200;
    $('.js-menu-category .menu_categories li a').on('mouseover', function (e) {
        var __self = this;
        var _e = e;
        // $('body').addClass('modal-open');
        clearSetTimeout = setTimeout(function () {
            var fade = 0;
            if (!globalSetting.menuFirstOpen) {
                fade = 300;
                globalSetting.menuFirstOpen = true;
                menuDelay = 0;
            }
            else fade = 0;
            if ($(__self).data('index') == undefined) _e.preventDefault();
            else {
                //находим нужную вкладку
                var thisTab = $('.js-menu-category-content').find("[data-index='" + $(__self).data('index') + "']")
                var thisTabActivIndex = $('.js-menu-category').find('.menu_categories').find('.active').data('index');
                var thisTabActiv = $('.js-menu-category-content').find("[data-index='" + thisTabActivIndex + "']")

                //добавление активного пункта меню
                $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').addClass('no-active');
                $(__self).addClass('active').removeClass('no-active');

                //показываем ее и скрываем остальные
                if (thisTabActivIndex == undefined) {
                    setTimeout(function () {
                        $('.select2-results__options').mCustomScrollbar();
                    }, 0);
                    thisTab.toggle().addClass('rver');
                }

                thisTabActiv.slideUp({
                    duration: 0,
                    complete: function () {
                        thisTab.slideToggle(0).removeClass('rver');
                    }
                });

                // thisTab.slideToggle(fade).siblings().slideToggle(0);
                thisTab.find('.js-menu-hover').children().first().addClass('active').siblings().removeClass('active');
                thisTab.find('.wrapp_content').css("display", "none");
                thisTab.find('.wrapp_content').first().css("display", "inline-block");

            }
        }, menuDelay);

    });

    $('.js-menu-category .menu_categories li a.menu-no').on('mouseover', function (e) {
        clearTimeout(clearSetTimeout);
        menuDelay = 200;
        $('.js-menu-category-content-item').fadeOut(0);
        $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');
    });

    $('.js-menu-category .menu_categories li a').on('mouseleave', function (e) {
        clearTimeout(clearSetTimeout);
        globalSetting.menuFirstOpen = false;
    });

    $('.js-menu-category').on('mouseleave', function (e) {
        clearTimeout(clearSetTimeout);
        // $('body').removeClass('modal-open');
        menuDelay = 200;
        $('.js-menu-category-content-item').fadeOut(0);
        $('.js-menu-category').find('.menu_categories').children().find('a').removeClass('active').removeClass('no-active');

    });

    //ховеры на табы слева
    $('.js-left-menu-hover').on('mouseenter', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.js-menu-category-content-item').find('.wrapp_content').css("display", "none");
        $('.js-menu-category-content-item').find("[data-tab-content='" + $(this).data('tab') + "']").css("display", "inline-block");
    });

    // ховеры на пункты меню
    $('.js-menu-item-hover .menu-center ul li a').on('mouseenter', function () {
        $('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').addClass('no-active');
        $(this).addClass('active').removeClass('no-active');
    })
    $('.js-menu-item-hover').on('mouseleave', function () {
        $('.js-menu-item-hover').find('.menu-center').find('ul').children().find('a').removeClass('no-active');
    })
}

function initSelect() {
    var closeSelect = $(".select2.select-popup").select2();
    $(".select2").select2();

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".w-p"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            closeSelect.select2("close");
        }
    });

    $('.select2').on('select2:open', function (e) {
        $('.select2-results__options').mCustomScrollbar('destroy');
        setTimeout(function () {
            $('.select2-results__options').mCustomScrollbar();
        }, 0);
    });
}

function initAnchor() {
    $("a.anchor-touch").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 100;

        // var numberBtnSlider = $(this).attr('data-slider-number');
        // $('.swiper-anchor-slider').slick('slickGoTo', numberBtnSlider);

        $('.active-anchor').removeClass();
        $(this).closest('li').addClass('active-anchor');
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
}

function scrollUp() {
    $('.container-scroll-top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $('.topAnchorLink').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 1300) {
            $('.container-scroll-top').fadeIn('fast');
        } else {
            $('.container-scroll-top').fadeOut('fast');
        }
    });
}

function initCounter() {
    $('.number-counter').countUp();
}

function formResponse(form) {
    if (form.closest('.wrapper-popup').length) {
        var cont = form.closest('.wrapper-popup'),
            resp = cont.next('.response');
        if (resp.length) {
            cont.fadeOut("slow", function () {
                resp.fadeIn("slow");
            });
        }
    }
}

function initValidForm() {
    var form_valid = $(".js-form");
    if (form_valid.length) {
        form_valid.each(function () {
            var form_this = $(this);
            $.validate({
                form: form_this,
                borderColorOnError: true,
                scrollToTopOnError: false,
                modules: 'html5',
                onSuccess: function ($form) {
                    formResponse(form_this);
                }
            });
        });
    }
}

function initRevealator() {
    Revealator.effects_padding = '-400';
}

function initNoClass() {
    $('.revealator-zoomin').each(function () {
        $(this).addClass('no-anim');
    })
}

function initIncomingLink() {
    $('.incoming-link').mouseenter(function () {
        $(this).find('.incoming-link-txt_pod').fadeIn('100')
    })
}

function initFilter() {
    $('.wrapper-teaching-staff_table-title_name').click(function () {
        if ($(this).find('.icon-filter').closest('.icon-filter').hasClass('up')) {
            $(this).find('.icon-filter').closest('.icon-filter').removeClass('up');
            $(this).find('.icon-filter').closest('.icon-filter').addClass('down');
        } else {
            $(this).find('.icon-filter').closest('.icon-filter').removeClass('down');
            $(this).find('.icon-filter').closest('.icon-filter').addClass('up');
        }
    })
}

function initSmallMenu() {
    if ($('.small-menu-center').length) {
        $('.small-menu-center').closest('.menu_categories-content').addClass('small-width');
    }
}

function initSliderScroll() {
    $(window).scroll(function () {
        var $sections = $('.wrapper-date-content');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 150;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('data-number-news');
            if (scroll > top && scroll < bottom) {
                $('.swiper-anchor-slider').slick('slickGoTo', id);
            }
        })
    });
}

function initClosePopup() {
    $('.block-forgot-password a').click(function () {
        $.fancybox.close();
    });

    $('.block-registration a').click(function () {
        $.fancybox.close();
    })
}

function initDisabledSel() {

    var thisVal = $(this).val('');

    $('#select1').on('select2:select select2:unselect', function (evt) {
        if (thisVal == '') {
            $('#select2 .select2').addClass('disabled-select')
        } else {
            $('#select2 .select2').removeClass('disabled-select')
        }
    });

    $('#select2').on('select2:select select2:unselect', function (evt) {
        if (thisVal == '') {
            $('#select3 .select2').addClass('disabled-select')
        } else {
            $('#select3 .select2').removeClass('disabled-select')
        }
    });
}

function initDatePicker() {
    var startDate;
    var endDate;
    var dateT;
    var dateFormat;

    $(document.body).on('click', '.container-calendar', function (e) {
        $(e.currentTarget).find('.week-picker').datepicker('show');
    });

    var selectCurrentWeek = function () {
        window.setTimeout(function () {
            $('.week-picker').datepicker('widget').find('.ui-datepicker-current-day a').addClass('ui-state-active')
        }, 1);
    };

    $('.week-picker').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: "dd.mm.yy",
        onSelect: function (dateText, inst) {
            dateT = $(this).datepicker('getDate');

            startDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() - dateT.getDay() + 1);
            endDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() - dateT.getDay() + 7);
            dateFormat = inst.settings.dateFormat || $.datepicker._defaults.dateFormat;
            $('span.startDate').text($.datepicker.formatDate(dateFormat, startDate, inst.settings));
            $('span.endDate').text($.datepicker.formatDate(dateFormat, endDate, inst.settings));
            $('.week-picker').datepicker("setDate", $.datepicker.formatDate(dateFormat, endDate, inst.settings));
            $('input.startDate').val($.datepicker.formatDate(dateFormat, startDate, inst.settings)).trigger('change');
            $('input.endDate').val($.datepicker.formatDate(dateFormat, endDate, inst.settings));

            selectCurrentWeek();
        },
        beforeShow: function () {
            selectCurrentWeek();
        },
        beforeShowDay: function (date) {
            var cssClass = '';
            if (date >= startDate && date <= endDate)
                cssClass = 'ui-datepicker-current-day';
            return [true, cssClass];
        },
        onChangeMonthYear: function (year, month, inst) {
            selectCurrentWeek();
        }
    }).datepicker('widget').addClass('ui-weekpicker');

    jQuery(function ($) {
        $.datepicker.setDefaults($.datepicker.regional['ru']);
    });

    $('.ui-weekpicker .ui-datepicker-calendar tr').mousemove(function () {
        $(this).find('td a').addClass('ui-state-hover');
    });
    $('.ui-weekpicker .ui-datepicker-calendar tr').mouseleave(function () {
        $(this).find('td a').removeClass('ui-state-hover');
    });

    function updateWeekStartEnd() {
        var date = $('.week-picker').datepicker('getDate') || new Date();
        startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1);
        endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 7);
    }

    updateWeekStartEnd();

    function updateDateText(inst) {
        var dateFormat = inst !== 'start' && inst.settings.dateFormat ? inst.settings.dateFormat : $.datepicker._defaults.dateFormat;

        $('span.startDate').text($.datepicker.formatDate(dateFormat, startDate, inst.settings));
        $('span.endDate').text($.datepicker.formatDate(dateFormat, endDate, inst.settings));
    }

    updateDateText('start');

    function updateDateVal(inst) {
        var dateFormat = inst !== 'start' && inst.settings.dateFormat ? inst.settings.dateFormat : $.datepicker._defaults.dateFormat;

        $('input.startDate').val($.datepicker.formatDate(dateFormat, startDate, inst.settings));
        $('input.endDate').val($.datepicker.formatDate(dateFormat, endDate, inst.settings));
        $('.week-picker').datepicker("setDate", $.datepicker.formatDate(dateFormat, endDate, inst.settings));
    }

    updateDateVal('start');

    // Неделя вперед
    $('.btn-next-date').on("click", function () {
        var id = document.getElementById('week-picker'),
            insts = window.$.datepicker._getInst(id);

        dateT = $('.week-picker').datepicker('getDate');
        startDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() - dateT.getDay() + 1);
        endDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() - dateT.getDay() + 7);
        dateFormat = insts.settings.dateFormat || $.datepicker._defaults.dateFormat;

        $('span.startDate').text($.datepicker.formatDate(dateFormat, startDate, insts.settings));
        $('span.endDate').text($.datepicker.formatDate(dateFormat, endDate, insts.settings));
        $('input.startDate').val($.datepicker.formatDate(dateFormat, startDate, insts.settings));
        $('input.endDate').val($.datepicker.formatDate(dateFormat, endDate, insts.settings));
    });

    // Неделя назад
    $('.btn-prev-date').on("click", function () {
        var id = document.getElementById('week-picker'),
            insts = window.$.datepicker._getInst(id);

        dateT = $('.week-picker').datepicker('getDate');
        dateFormat = insts.settings.dateFormat || $.datepicker._defaults.dateFormat;

        if (insts.settings.minDate === insts.lastVal || insts.settings.maxDate === insts.lastVal) {
            startDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() - dateT.getDay() + 1);
            endDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() - dateT.getDay() + 7);
        }else{
            startDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() + dateT.getDay() - 13);
            endDate = new Date(dateT.getFullYear(), dateT.getMonth(), dateT.getDate() + dateT.getDay() - 7);
        }

        $('span.startDate').text($.datepicker.formatDate(dateFormat, startDate, insts.settings));
        $('span.endDate').text($.datepicker.formatDate(dateFormat, endDate, insts.settings));
        $('input.startDate').val($.datepicker.formatDate(dateFormat, startDate, insts.settings));
        $('input.endDate').val($.datepicker.formatDate(dateFormat, endDate, insts.settings));
    });

}

function initPlayer() {
    var players = $('.snipet-video');
    players.each(function () {
        var _ = $(this);
        _.on('click', function (e) {
            _.addClass('played').find('iframe')[0].src += "?&autoplay=1";
            e.preventDefault();
        });
    });
}

function initFixTable() {
    function gid(i) {
        return document.getElementById(i);
    }

    function CEL(s) {
        return document.createElement(s);
    }

    function ACH(p, c) {
        p.appendChild(c);
    }

    function getScrollWidth() {
        var dv = CEL('div');
        dv.style.overflowY = 'scroll';
        dv.style.width = '50px';
        dv.style.height = '50px';
        dv.style.position = 'absolute';
        dv.style.visibility = 'hidden'; //при display:none размеры нельзя узнать. visibility:hidden - сохраняет геометрию, а выше было position=absolute - не сломает разметку
        ACH(document.body, dv);
        var scrollWidth = dv.offsetWidth - dv.clientWidth;
        document.body.removeChild(dv);
        return (scrollWidth);
    }

    function FixHeaderCol(tbl, fixRows, fixCols, ww, hh) {
        var scrollWidth = getScrollWidth(),
            cont = CEL('div'),
            tblHead = CEL('table'),
            tblCol = CEL('table'),
            tblFixCorner = CEL('table');
        cont.className = 'divFixHeaderCol';
        cont.style.width = ww + '%';
        cont.style.height = hh + 'px';
        tbl.parentNode.insertBefore(cont, tbl);
        ACH(cont, tbl);

        var rows = tbl.rows,
            rowsCnt = rows.length,
            i = 0,
            j = 0,
            colspanCnt = 0,
            columnCnt = 0,
            newRow, newCell, td;

        // Берем самую первую строку (это rows[0]) и получаем истинное число столбцов в ТАБЛИЦЕ (учитывается colspan)
        for (j = 0; j < rows[0].cells.length; j++) {
            columnCnt += rows[0].cells[j].colSpan;
        }
        var delta = columnCnt - fixCols;

        // Пробежимся один раз по всем строкам и построим наши фиксированные таблицы
        for (i = 0; i < rowsCnt; i++) {
            columnCnt = 0;
            colspanCnt = 0;
            newRow = rows[i].cloneNode(true), td = rows[i].cells;
            for (j = 0; j < td.length; j++) {
                columnCnt += td[j].colSpan; //кол-во столбцов в данной строке с учетом colspan
                if (i < fixRows) { //ну и заодно фиксируем заголовок
                    newRow.cells[j].style.width = getComputedStyle(td[j]).width;
                    ACH(tblHead, newRow);
                }
            }

            newRow = CEL('tr');
            for (j = 0; j < fixCols; j++) {
                if (!td[j]) continue;
                colspanCnt += td[j].colSpan;
                if (columnCnt - colspanCnt >= delta) {
                    newCell = td[j].cloneNode(true);
                    newCell.style.width = getComputedStyle(td[j]).width;
                    newCell.style.height = td[j].clientHeight - parseInt(getComputedStyle(td[j]).paddingBottom) - parseInt(getComputedStyle(td[j]).paddingTop) + 'px';
                    ACH(newRow, newCell);
                }
            }
            if (i < fixRows) {
                ACH(tblFixCorner, newRow);
            }
            ACH(tblCol, newRow.cloneNode(true));
        } // Закончили пробегаться один раз по всем строкам и строить наши фиксированные таблицы

        tblFixCorner.style.position = 'absolute';
        tblFixCorner.style.zIndex = '3';
        tblFixCorner.className = 'fixRegion';
        tblHead.style.position = 'absolute';
        tblHead.style.zIndex = '2';
        tblHead.style.width = tbl.offsetWidth +'px';
        tblHead.className = 'fixRegion';
        tblCol.style.position = 'absolute';
        tblCol.style.zIndex = '2';
        tblCol.className = 'fixRegion';

        cont.insertBefore(tblHead, tbl);
        cont.insertBefore(tblFixCorner, tbl);
        cont.insertBefore(tblCol, tbl);

        var bodyCont = CEL('div');
        bodyCont.style.cssText = 'position:relative;';

        // Горизонтальная прокрутка
        var divHscroll = CEL('div'),
            d1 = CEL('div');
        divHscroll.style.cssText = 'width:100%; bottom:0; overflow-x:auto; overflow-y:hidden; position:absolute; z-index:3;';
        if ($(window).width() < 1025){
            divHscroll.style.cssText = 'width:100%; bottom:0; overflow-x:auto; overflow-y:hidden; position:absolute; z-index:3; display: none;';
        }
        divHscroll.onscroll = function() {
            var x = -this.scrollLeft + 'px';
            bodyCont.style.left = x;
            tblHead.style.left = x;
        }

        d1.style.width = tbl.offsetWidth + scrollWidth + 'px';
        d1.style.height = '2px';

        ACH(divHscroll, d1);
        ACH(cont, divHscroll);
        ACH(bodyCont, tbl);
        ACH(cont, bodyCont);

        // Вертикальная прокрутка
        var divVscroll = CEL('div'),
            d2 = CEL('div');
        divVscroll.style.cssText = 'height:100%; right:0; overflow-x:hidden; overflow-y:auto; position:absolute; z-index:3';
        divVscroll.onscroll = function() {
            var y = -this.scrollTop + 'px';
            bodyCont.style.top = y;
            tblCol.style.top = y;
        }

        d2.style.height = tbl.offsetHeight + scrollWidth + 'px';
        d2.style.width = scrollWidth + 'px';

        ACH(divVscroll, d2);
        ACH(cont, divVscroll);

        cont.addEventListener('wheel', myWheel);

        function myWheel(e) {
            e = e || window.event;
            var delta = e.deltaY || e.detail || e.wheelDelta;
            var z = delta > 0 ? 1 : -1;
            divVscroll.scrollTop = divVscroll.scrollTop + z * 17;
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        }
    } //FixHeaderCol

    function FixAction(el) {
        var heightTdHead = $('.FixedTables').find('thead').height();
        var heightTable = $('.FixedTables').height() + 80;
        // поиск по id
        $(".FixedTables").each(function() {
            var Id = $(this).get(0).id;
            var dataCol = $(this).data('col');
            // console.log(dataCol);
            FixHeaderCol(gid(Id), 0, dataCol, 100, heightTable);
        });

        $('.fixRegion').find('.header-td').css({"height": heightTdHead + 2 + "px"});
    }

    FixAction();
}

function initAnhorHash() {
    if ( window.location.hash ) scroll(0,0);
    setTimeout( function() { scroll(0,0); }, 1);

    $(function() {
        if(window.location.hash) {
            var locHash = window.location.hash;
            var searchAnchor = $('[data-anchor="'+locHash+'"]');
            $('html, body').animate({
                scrollTop: searchAnchor.offset().top - 100 + 'px'
            }, 1000, 'swing');
        }
    });
}

function initSetting() {
    globalSetting.menuFirstOpen = false;
    globalSetting.menuOtherDel1 = false;
}

var globalSetting = [];
initSetting();

$(window).scroll(function (e) {
    initSimpleParallax();
});

initClosePopupBtn();
initSliderHeader();
initTabsHeader();
initSliderHeaderNews();
initStickyVideo();
initSearch();
initSearchMapSite();
initTabsSoc();
initScrollHeader();
initSimpleParallax();
initDropShow();
initSliderMobNews();
initSliderDopCondition();
initSliderText();
initMenu();
initDropQShow();
initDropQShowNav();
initDropStaff();
initSelect();
initAnchor();
initDropDownLang();
initDropDownGos();
initDropSpecialties();
initMasonry();
initMasonryPage();
initRevealator();
scrollUp();
initCounter();
initValidForm();
initDropDownSoc();
initIncomingLink();
initStickyPrint();
initFilter();
initSmallMenu();
initSliderScroll();
initClosePopup();
initDisabledSel();
initPlayer();
initFixTable();

if ($(window).width() > 1024) {
    initSliderAnchor();
}
$(window).on('resize', function () {
    if ($(window).width() > 1024) {
        initSliderAnchor();
    }
    initStickyPrint();
});

if ($(window).width() < 1024) {
    initNoClass();
}
$(window).on('resize', function () {
    if ($(window).width() < 1024) {
        initNoClass();
    }
});

if ($(window).width() < 931) {
    initAnhorHash();
}

class Accordion {
	constructor(item, trig, hid){
    this.items = {}
    this.items.item = item
	  this.items.$item = $(this.items.item)
	  this.items.trigger = trig
		this.items.hidden = hid
    this.items.settings = {
      height: 0,
      currentHeight: 0,
      active: false
    }
    this.items.trigger.on('click', (e) => this.toggleAccordion(e, this.items))
	}
	toggleAccordion(e, items){
	    if (!items.settings.active){
	        e.preventDefault()
	        this.showItem(e, items)
        console.log('show')
      }
      else{
	        this.hideItem(e, items)
        console.log('hide')
      }
  }
  hideItem(e, items){
	  this.removeItemClasses(e, items)
    items.settings.active = false
  }
  showItem(e, items){
	  this.addItemClasses(e, items)
    items.settings.active = true
  }
  addItemClasses(e, items){
    items.$item.addClass('active')
	  items.trigger.addClass('active')
	  items.hidden.addClass('active')
  }
  removeItemClasses(e, items){
	  items.$item.removeClass('active')
	  items.trigger.removeClass('active')
	  items.hidden.removeClass('active')
  }
}


// Video width
$(document).ready(function () {

    // Resive video
    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize(".video-container .poster img");
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    if ($('.js-accordion').length){
        let accordionsArr = [];
        $('.js-accordion').filter(function(key, item){
            accordionsArr[key] = new Accordion(item, $(item).find('.js-acc-trigger'), $(item).find('.js-acc-hidden'))
        })
    }
    if ($('.js-inner-accordion').length){
        let innerAccordionsArr = [];
        $('.js-inner-accordion').filter(function(key, item){
            innerAccordionsArr[key] = new Accordion(item, $(item).find('.js-inner-acc-trigger'), $(item).find('.js-inner-acc-hidden'))
        })
    }

});

/** Reusable Functions **/

/********************************************************************/

function scaleVideoContainer() {

    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);

}

function initBannerVideoSize(element) {

    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element) {

    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        videoWidth,
        videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width'),
            windowAspectRatio = windowHeight / windowWidth;

        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({'top': -(videoHeight - windowHeight) / 2 + 'px', 'margin-left': 0});
        } else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'});
        }

        $(this).width(videoWidth).height(videoHeight);

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');


    });
}

