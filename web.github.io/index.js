document.addEventListener('DOMContentLoaded', function () {
    var splide_reviews = new Splide('.splide', {
        perPage: 1,
        width: '100%',
        perMove: 1,
        gap: '2rem',
        autoplay: false,
        interval: 5000,
        type  : 'loop',
    });
    
    splide_reviews.mount();

    var clientsSlider1 = new Splide( '#clients-gallery-1', {
        type: "loop",
        width: "140%",
        perMove: 1,
        perPage: 14,
        gap: "1em",
        autoWidth: true,
        arrows: false,
        pagination: false,
        drag: false,
        autoplay: true,
        interval: 4000,
        speed: 1200,
        breakpoints: {
            780: {
                height: "100px",
            }
        }
    });
    clientsSlider1.mount();

//     var clientsSlider2 = new Splide( '#clients-gallery-2', {
//         type: "loop",
//         width: "140%",
//         perMove: 1,
//         perPage: 16,
//         gap: "1em",
//         autoWidth: true,
//         arrows: false,
//         pagination: false,
//         drag: false,
//         autoplay: true,
//         interval: 5000,
//         speed: 1200,
//     });
//     clientsSlider2.mount();
// });

$(function(){
    $(".formcarryForm").submit(function(e){
      e.preventDefault();
      var href = $(this).attr("action");
      
      $.ajax({
          type: "POST",
          url: href,
          data: new FormData(this),
          dataType: "json",
          processData: false,
          contentType: false,
          success: function(response){
            if(response.status == "success"){
                alert("We received your submission, thank you!");
            }
            else if(response.code === 422){
              alert("Field validation failed");
              $.each(response.errors, function(key) {
                $('[name="' + key + '"]').addClass('formcarry-field-error');
              });
            }
            else{
              alert("An error occured: " + response.message);
            }
          },
          error: function(jqXHR, textStatus){
            const errorObject = jqXHR.responseJSON
  
            alert("Request failed, " + errorObject.title + ": " + errorObject.message);
          },
          complete: function(){
            history.pushState({ formOpen: false }, '', '/');
            popupForm.style.display = 'none';
          }
      });
    });
  });
});



const startCard = document.getElementById("start-card");
const mainCard = document.getElementById("main-card");
const vipCard = document.getElementById("card-vip");

document.addEventListener("DOMContentLoaded", () => {
    vipCard.addEventListener("mouseover", () => {
        mainCard.style.transform = "scale(.9)";
    });
    vipCard.addEventListener("mouseout", () => {
        mainCard.style.transform = "scale(1)";
    });

    startCard.addEventListener("mouseover", () => {
        mainCard.style.transform = "scale(.9)";
    });
    startCard.addEventListener("mouseout", () => {
        mainCard.style.transform = "scale(1)";
    });
});

