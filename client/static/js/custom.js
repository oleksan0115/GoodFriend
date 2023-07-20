$(".fourcolumn").owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  dots: false,
  autoplay: false,
  navText: ['<img src="img/Vector-36.svg">', '<img src="img/Vector-37.svg">'],
  autoplayTimeout: 500,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    768: {
      items: 3, //custom option not used by Owl Carousel, but used by the algorithm below
    },
    1024: {
      items: 4,
      nav: true,
      loop: false,
    },
    1100: {
      items: 4,
      nav: true,
      loop: false,
    },
    1400: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
$(".threecolumn").owlCarousel({
  items: 3,
  loop: true,
  margin: 15,
  dots: false,
  autoplay: false,
  navText: ['<img src="img/Vector-36.svg">', '<img src="img/Vector-37.svg">'],
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    768: {
      items: 3, //custom option not used by Owl Carousel, but used by the algorithm below
    },
    1000: {
      items: 2,
      nav: true,
      loop: false,
    },
    1100: {
      items: 2,
      nav: true,
      loop: false,
    },
    1400: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
$(document).ready(function () {
  var el = $(".oc1");

  var carousel;
  var carouselOptions = {
    margin: 20,
    nav: true,
    dots: false,
    slideBy: "page",
    responsive: {
      0: {
        items: 2,
        rows: 2, //custom option not used by Owl Carousel, but used by the algorithm below
      },
      768: {
        items: 4, //custom option not used by Owl Carousel, but used by the algorithm below
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
        //custom option not used by Owl Carousel, but used by the algorithm below
      },
    },
  };

  //Taken from Owl Carousel so we calculate width the same way
  var viewport = function () {
    var width;
    if (
      carouselOptions.responsiveBaseElement &&
      carouselOptions.responsiveBaseElement !== window
    ) {
      width = $(carouselOptions.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (
      document.documentElement &&
      document.documentElement.clientWidth
    ) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn("Can not detect viewport width.");
    }
    return width;
  };

  var severalRows = false;
  var orderedBreakpoints = [];
  for (var breakpoint in carouselOptions.responsive) {
    if (carouselOptions.responsive[breakpoint].rows > 1) {
      severalRows = true;
    }
    orderedBreakpoints.push(parseInt(breakpoint));
  }

  //Custom logic is active if carousel is set up to have more than one row for some given window width
  if (severalRows) {
    orderedBreakpoints.sort(function (a, b) {
      return b - a;
    });
    var slides = el.find("[data-slide-index]");
    var slidesNb = slides.length;
    if (slidesNb > 0) {
      var rowsNb;
      var previousRowsNb = undefined;
      var colsNb;
      var previousColsNb = undefined;

      //Calculates number of rows and cols based on current window width
      var updateRowsColsNb = function () {
        var width = viewport();
        for (var i = 0; i < orderedBreakpoints.length; i++) {
          var breakpoint = orderedBreakpoints[i];
          if (width >= breakpoint || i == orderedBreakpoints.length - 1) {
            var breakpointSettings =
              carouselOptions.responsive["" + breakpoint];
            rowsNb = breakpointSettings.rows;
            colsNb = breakpointSettings.items;
            break;
          }
        }
      };

      var updateCarousel = function () {
        updateRowsColsNb();

        //Carousel is recalculated if and only if a change in number of columns/rows is requested
        if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
          var reInit = false;
          if (carousel) {
            //Destroy existing carousel if any, and set html markup back to its initial state
            carousel.trigger("destroy.owl.carousel");
            carousel = undefined;
            slides = el.find("[data-slide-index]").detach().appendTo(el);
            el.find(".fake-col-wrapper").remove();
            reInit = true;
          }

          //This is the only real 'smart' part of the algorithm

          //First calculate the number of needed columns for the whole carousel
          var perPage = rowsNb * colsNb;
          var pageIndex = Math.floor(slidesNb / perPage);
          var fakeColsNb =
            pageIndex * colsNb +
            (slidesNb >= pageIndex * perPage + colsNb
              ? colsNb
              : slidesNb % colsNb);

          //Then populate with needed html markup
          var count = 0;
          for (var i = 0; i < fakeColsNb; i++) {
            //For each column, create a new wrapper div
            var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(
              el
            );
            for (var j = 0; j < rowsNb; j++) {
              //For each row in said column, calculate which slide should be present
              var index =
                Math.floor(count / perPage) * perPage +
                (i % colsNb) +
                j * colsNb;
              if (index < slidesNb) {
                //If said slide exists, move it under wrapper div
                slides
                  .filter("[data-slide-index=" + index + "]")
                  .detach()
                  .appendTo(fakeCol);
              }
              count++;
            }
          }
          //end of 'smart' part

          previousRowsNb = rowsNb;
          previousColsNb = colsNb;

          if (reInit) {
            //re-init carousel with new markup
            carousel = el.owlCarousel(carouselOptions);
          }
        }
      };

      //Trigger possible update when window size changes
      $(window).on("resize", updateCarousel);

      //We need to execute the algorithm once before first init in any case
      updateCarousel();
    }
  }

  //init
  carousel = el.owlCarousel(carouselOptions);
});
$(document).ready(function () {
  var el = $(".oc2");

  var carousel;
  var carouselOptions = {
    margin: 20,
    nav: true,
    dots: false,
    slideBy: "page",
    responsive: {
      0: {
        items: 2,
        rows: 2, //custom option not used by Owl Carousel, but used by the algorithm below
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
        //custom option not used by Owl Carousel, but used by the algorithm below
      },
    },
  };

  //Taken from Owl Carousel so we calculate width the same way
  var viewport = function () {
    var width;
    if (
      carouselOptions.responsiveBaseElement &&
      carouselOptions.responsiveBaseElement !== window
    ) {
      width = $(carouselOptions.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (
      document.documentElement &&
      document.documentElement.clientWidth
    ) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn("Can not detect viewport width.");
    }
    return width;
  };

  var severalRows = false;
  var orderedBreakpoints = [];
  for (var breakpoint in carouselOptions.responsive) {
    if (carouselOptions.responsive[breakpoint].rows > 1) {
      severalRows = true;
    }
    orderedBreakpoints.push(parseInt(breakpoint));
  }

  //Custom logic is active if carousel is set up to have more than one row for some given window width
  if (severalRows) {
    orderedBreakpoints.sort(function (a, b) {
      return b - a;
    });
    var slides = el.find("[data-slide-index]");
    var slidesNb = slides.length;
    if (slidesNb > 0) {
      var rowsNb;
      var previousRowsNb = undefined;
      var colsNb;
      var previousColsNb = undefined;

      //Calculates number of rows and cols based on current window width
      var updateRowsColsNb = function () {
        var width = viewport();
        for (var i = 0; i < orderedBreakpoints.length; i++) {
          var breakpoint = orderedBreakpoints[i];
          if (width >= breakpoint || i == orderedBreakpoints.length - 1) {
            var breakpointSettings =
              carouselOptions.responsive["" + breakpoint];
            rowsNb = breakpointSettings.rows;
            colsNb = breakpointSettings.items;
            break;
          }
        }
      };

      var updateCarousel = function () {
        updateRowsColsNb();

        //Carousel is recalculated if and only if a change in number of columns/rows is requested
        if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
          var reInit = false;
          if (carousel) {
            //Destroy existing carousel if any, and set html markup back to its initial state
            carousel.trigger("destroy.owl.carousel");
            carousel = undefined;
            slides = el.find("[data-slide-index]").detach().appendTo(el);
            el.find(".fake-col-wrapper").remove();
            reInit = true;
          }

          //This is the only real 'smart' part of the algorithm

          //First calculate the number of needed columns for the whole carousel
          var perPage = rowsNb * colsNb;
          var pageIndex = Math.floor(slidesNb / perPage);
          var fakeColsNb =
            pageIndex * colsNb +
            (slidesNb >= pageIndex * perPage + colsNb
              ? colsNb
              : slidesNb % colsNb);

          //Then populate with needed html markup
          var count = 0;
          for (var i = 0; i < fakeColsNb; i++) {
            //For each column, create a new wrapper div
            var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(
              el
            );
            for (var j = 0; j < rowsNb; j++) {
              //For each row in said column, calculate which slide should be present
              var index =
                Math.floor(count / perPage) * perPage +
                (i % colsNb) +
                j * colsNb;
              if (index < slidesNb) {
                //If said slide exists, move it under wrapper div
                slides
                  .filter("[data-slide-index=" + index + "]")
                  .detach()
                  .appendTo(fakeCol);
              }
              count++;
            }
          }
          //end of 'smart' part

          previousRowsNb = rowsNb;
          previousColsNb = colsNb;

          if (reInit) {
            //re-init carousel with new markup
            carousel = el.owlCarousel(carouselOptions);
          }
        }
      };

      //Trigger possible update when window size changes
      $(window).on("resize", updateCarousel);

      //We need to execute the algorithm once before first init in any case
      updateCarousel();
    }
  }

  //init
  carousel = el.owlCarousel(carouselOptions);
});
$(document).ready(function () {
  var el = $(".oc3");

  var carousel;
  var carouselOptions = {
    margin: 20,
    nav: true,
    dots: false,
    slideBy: "page",
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 4, //custom option not used by Owl Carousel, but used by the algorithm below
      },
      1000: {
        items: 4,
      },
      1300: {
        items: 5,
        //custom option not used by Owl Carousel, but used by the algorithm below
      },
    },
  };

  //Taken from Owl Carousel so we calculate width the same way
  var viewport = function () {
    var width;
    if (
      carouselOptions.responsiveBaseElement &&
      carouselOptions.responsiveBaseElement !== window
    ) {
      width = $(carouselOptions.responsiveBaseElement).width();
    } else if (window.innerWidth) {
      width = window.innerWidth;
    } else if (
      document.documentElement &&
      document.documentElement.clientWidth
    ) {
      width = document.documentElement.clientWidth;
    } else {
      console.warn("Can not detect viewport width.");
    }
    return width;
  };

  var severalRows = false;
  var orderedBreakpoints = [];
  for (var breakpoint in carouselOptions.responsive) {
    if (carouselOptions.responsive[breakpoint].rows > 1) {
      severalRows = true;
    }
    orderedBreakpoints.push(parseInt(breakpoint));
  }

  //Custom logic is active if carousel is set up to have more than one row for some given window width
  if (severalRows) {
    orderedBreakpoints.sort(function (a, b) {
      return b - a;
    });
    var slides = el.find("[data-slide-index]");
    var slidesNb = slides.length;
    if (slidesNb > 0) {
      var rowsNb;
      var previousRowsNb = undefined;
      var colsNb;
      var previousColsNb = undefined;

      //Calculates number of rows and cols based on current window width
      var updateRowsColsNb = function () {
        var width = viewport();
        for (var i = 0; i < orderedBreakpoints.length; i++) {
          var breakpoint = orderedBreakpoints[i];
          if (width >= breakpoint || i == orderedBreakpoints.length - 1) {
            var breakpointSettings =
              carouselOptions.responsive["" + breakpoint];
            rowsNb = breakpointSettings.rows;
            colsNb = breakpointSettings.items;
            break;
          }
        }
      };

      var updateCarousel = function () {
        updateRowsColsNb();

        //Carousel is recalculated if and only if a change in number of columns/rows is requested
        if (rowsNb != previousRowsNb || colsNb != previousColsNb) {
          var reInit = false;
          if (carousel) {
            //Destroy existing carousel if any, and set html markup back to its initial state
            carousel.trigger("destroy.owl.carousel");
            carousel = undefined;
            slides = el.find("[data-slide-index]").detach().appendTo(el);
            el.find(".fake-col-wrapper").remove();
            reInit = true;
          }

          //This is the only real 'smart' part of the algorithm

          //First calculate the number of needed columns for the whole carousel
          var perPage = rowsNb * colsNb;
          var pageIndex = Math.floor(slidesNb / perPage);
          var fakeColsNb =
            pageIndex * colsNb +
            (slidesNb >= pageIndex * perPage + colsNb
              ? colsNb
              : slidesNb % colsNb);

          //Then populate with needed html markup
          var count = 0;
          for (var i = 0; i < fakeColsNb; i++) {
            //For each column, create a new wrapper div
            var fakeCol = $('<div class="fake-col-wrapper"></div>').appendTo(
              el
            );
            for (var j = 0; j < rowsNb; j++) {
              //For each row in said column, calculate which slide should be present
              var index =
                Math.floor(count / perPage) * perPage +
                (i % colsNb) +
                j * colsNb;
              if (index < slidesNb) {
                //If said slide exists, move it under wrapper div
                slides
                  .filter("[data-slide-index=" + index + "]")
                  .detach()
                  .appendTo(fakeCol);
              }
              count++;
            }
          }
          //end of 'smart' part

          previousRowsNb = rowsNb;
          previousColsNb = colsNb;

          if (reInit) {
            //re-init carousel with new markup
            carousel = el.owlCarousel(carouselOptions);
          }
        }
      };

      //Trigger possible update when window size changes
      $(window).on("resize", updateCarousel);

      //We need to execute the algorithm once before first init in any case
      updateCarousel();
    }
  }

  //init
  carousel = el.owlCarousel(carouselOptions);
});

/*FAQs*/
var coll = document.getElementsByClassName(" btn-accoding");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
/*User Profile Popup*/
$(document).ready(function () {
  $(".user").click(function () {
    $(".usershow").show();
  });
  $(".closed").click(function () {
    $(".usershow").hide();
  });
  $(".overlay").click(function () {
    $(".usershow").hide();
  });
});
/*SignIn Popup*/
$(document).ready(function () {
  $("#signin").click(function () {
    $(".login-box").show();
  });
  $("#closed").click(function () {
    $(".login-box").hide();
  });
  $(".overlay").click(function () {
    $(".login-box").hide();
  });
});
/*SignUp Popup*/
$(document).ready(function () {
  $("#signup").click(function () {
    $(".sign-box").show();
  });
  $("#closeds").click(function () {
    $(".sign-box").hide();
  });
  $(".overlay").click(function () {
    $(".sign-box").hide();
  });
});
/*User Information Popup*/
$(document).ready(function () {
  $("#setting").click(function () {
    $(".user-information").show();
  });
  $("#closeduser").click(function () {
    $(".user-information").hide();
  });
  $("#mcloseduser").click(function () {
    $(".user-information").hide();
  });
  $(".overlay").click(function () {
    $(".user-information").hide();
  });
});
/*Bet Slip Popup*/
$(document).ready(function () {
  $("#slip").click(function () {
    $(".bestslip").show();
  });
  $("#closedslip").click(function () {
    $(".bestslip").hide();
  });
});
/*Mobile Bet Slip Popup*/
$(document).ready(function () {
  $("#mslip").click(function () {
    $(".bestslip").show();
  });
  $("#closedslip").click(function () {
    $(".bestslip").hide();
  });
});
/*Mobile chat Popup*/
$(document).ready(function () {
  $("#deskchat").click(function () {
    if($("body").hasClass("right-chat")){
      $("#deskchat").removeClass("btn-color");
    }else{
      $("#deskchat").addClass("btn-color");
    }
    $(".chat").toggle();
  });
  $("#chat").click(function () {
    $(".chat").toggle();
  });
  $("#cancel").click(function () {
    if($("body").hasClass("right-chat")){
      $("#deskchat").removeClass("btn-color");
    }
    $(".chat").hide();
  });
});
/*Mobile chat Popup*/
$(document).ready(function () {
  $("#menu").click(function () {
    $(".left-side-bar").toggle();
    $("#menu p").toggleClass("active");
  });
  $("#closed_menu").click(function () {
    $(".left-side-bar").hide();
  });
});

/*Smoll Menu*/
$("#lefbutton").on("click", function () {
  $("body").toggleClass("current");
  window.dispatchEvent(new Event("resize"));
});
/*Chat Menu*/
$("#deskchat").on("click", function () {
  $("body").toggleClass("right-chat");
  window.dispatchEvent(new Event("resize"));
});
$("#chat").on("click", function () {
  $("body").toggleClass("right-chat deskchat");
  $("#chat p").toggleClass("active");
  window.dispatchEvent(new Event("resize"));
});
$("#cancel").on("click", function () {
  $("body").toggleClass("right-chat");
  window.dispatchEvent(new Event("resize"));
});
/* Table Drag */
var slider1 = document.querySelector(".tabledrag1");
var slider2 = document.querySelector(".tabledrag2");
var slider3 = document.querySelector(".tabledrag3");
var slider4 = document.querySelector(".tabledrag4");
var slider5 = document.querySelector(".tabledrag5");

if (slider1) {
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider1.offsetLeft;
    scrollLeft = slider1.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider1.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider1.offsetLeft;
    const scroll = x - startX;
    slider1.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider1.addEventListener("mousedown", startDragging, false);
  slider1.addEventListener("mouseup", stopDragging, false);
  slider1.addEventListener("mouseleave", stopDragging, false);
}
if (slider2) {
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider2.offsetLeft;
    scrollLeft = slider2.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider2.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider2.offsetLeft;
    const scroll = x - startX;
    slider2.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider2.addEventListener("mousedown", startDragging, false);
  slider2.addEventListener("mouseup", stopDragging, false);
  slider2.addEventListener("mouseleave", stopDragging, false);
}
if (slider3) {
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider3.offsetLeft;
    scrollLeft = slider3.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider3.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider3.offsetLeft;
    const scroll = x - startX;
    slider3.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider3.addEventListener("mousedown", startDragging, false);
  slider3.addEventListener("mouseup", stopDragging, false);
  slider3.addEventListener("mouseleave", stopDragging, false);
}
if (slider4) {
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider4.offsetLeft;
    scrollLeft = slider4.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider4.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider4.offsetLeft;
    const scroll = x - startX;
    slider4.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider4.addEventListener("mousedown", startDragging, false);
  slider4.addEventListener("mouseup", stopDragging, false);
  slider4.addEventListener("mouseleave", stopDragging, false);
}
if (slider5) {
  let mouseDown = false;
  let startX, scrollLeft;

  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider5.offsetLeft;
    scrollLeft = slider5.scrollLeft;
  };
  let stopDragging = function (event) {
    mouseDown = false;
  };

  slider5.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - slider5.offsetLeft;
    const scroll = x - startX;
    slider5.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  slider5.addEventListener("mousedown", startDragging, false);
  slider5.addEventListener("mouseup", stopDragging, false);
  slider5.addEventListener("mouseleave", stopDragging, false);
}
$(window).resize(function () {
  //console.log("window was resized");
  var csize = $(window).width();
  //console.log(csize);
  if (csize > 990) {
    $(".left-side-bar").css("display", "block");
    if ($("body").hasClass("right-chat deskchat")) {
      //$(".right-bar").css("display", "block");
      $("body").removeClass("right-chat");
    }
  }
  if (csize < 990) {
    $(".left-side-bar").css("display", "none");
  }
});
/*Bet Slip Drag*/
document.addEventListener('DOMContentLoaded', function () {
  const ele = document.getElementById('body_fix');
  ele.style.cursor = 'grab';

  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing';
      ele.style.userSelect = 'none';

      pos = {
          left: ele.scrollLeft,
          top: ele.scrollTop,
          // Get the current mouse position
          x: e.clientX,
          y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele.scrollTop = pos.top - dy;
      ele.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
      ele.style.cursor = 'grab';
      ele.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
  };

  // Attach the handler
  ele.addEventListener('mousedown', mouseDownHandler);
});