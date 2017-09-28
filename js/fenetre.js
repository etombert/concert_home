$(function(){ 
            $(".popup-light").click(function() { 
                var obj = $(this), 
                    popupClass = obj.data("popupClass"), 
                    popupWidth = obj.data("popupWidth"), 
                    objPopup =  $('.' + popupClass); 
                 
                objPopup 
                    .css("width", popupWidth) 
                    .prepend('<img src="img/cross.png" class="popup-btn-close" title="Close Window" alt="Close" />') 
                    .css({ 
                        // Si l'on regroupe les deux blocs CSS, le popup n'est pas bien positionné 
                        // Le popup doit avoir sa taille définitive avant le calcul de outerHeight et de outerWidth 
                        "margin-top":  -objPopup.outerHeight(true)/2, 
                        "margin-left": -objPopup.outerWidth(true)/2 
                    }) 
                    .fadeIn(); 
                 
                $("<div/>", { 
                    "class":"voile-noir", 
                    "css":{ 
                        "filter":"alpha(opacity=80)" 
                    } 
                }).appendTo("body").fadeIn(); 
                 
                return false; 
            }); 
             
            $("body").delegate(".popup-btn-close, .voile-noir", "click", function(){ 
                $('.voile-noir , .popup-block , .popup-block2, .popup-login, .popup-signup').fadeOut(function(){ 
                    $(".popup-btn-close, .voile-noir").remove(); 
                }); 
                 
                return false; 
            }); 
        }); 