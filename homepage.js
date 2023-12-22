$(function(){

  var $slider = $('.carousel')
  var $sliderContainer = $('.carousel-image-container')
  var $slides = $('.carousel-image')

  var slideWidth = $slides.width()
  var slideHeight = $slides.height()
  var slideCount = $slides.length
  var totalWidth = slideCount * slideWidth

  //frame
  $slider.css({
    width:slideWidth,
    height:slideHeight
  })

  //container utk slide
  $sliderContainer.css({
    width:totalWidth,
    marginLeft: - slideWidth
  })

  $('#left-arrow').on('click',function(){
    $sliderContainer.animate({
        left: + slideWidth
    },"slow",
      () => {
        $('.carousel-image:last-child').prependTo('.carousel-image-container')
        $('.ccarousel-image-container').css('left','0')
      })
  })

  $('#right-arrow').on('click',function(){
    $sliderContainer.animate({
      left: - slideWidth
    },"slow",
      () => {
        $('.carousel-image:first-child').appendTo('.carousel-image-container')
        $('.carousel-image-container').css('left','0')
      })
  })

})