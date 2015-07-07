
$(document).ready(function() {
    var hash = window.location.hash.substring(1);
    if (hash.length != 0) {
        var elementToFocus = $("#"+hash).find("input");
        if (elementToFocus.is(":text")) {
          setTimeout(function(){
            elementToFocus.get(0).focus();
          }, 1);
        } else if (elementToFocus.is(":radio")) {
          setTimeout(function() {
            $(elementToFocus).filter(':checked').parent().focus();
            }, 1);
        }
    }


    if ($(".helpSlider").length == 1) {
        $(".helpSlider").children(".arrowDiv").removeClass("expanded");
        $(".helpSlider").children(".arrowDiv").addClass("collapsed");
    }else{
        //set the helpSliders arrow to be set to expanded on load
        $(".helpSlider").each(function(i) {
              if ($(this).siblings().is(":visible")) {
              $(this).children(".arrowDiv").removeClass("expanded");
              $(this).children(".arrowDiv").addClass("collapsed");
            }
        });
    }

    $(".helpSlider").on("click", function () {
        if ($(this).siblings().is(":visible")) {
            $(this).siblings().hide();
            $(this).children(".arrowDiv").removeClass("expanded")
            $(this).children(".arrowDiv").addClass("collapsed")
        } else {
            $(this).siblings().show();
            $(this).children(".arrowDiv").addClass("expanded")
            $(this).children(".arrowDiv").removeClass("collapsed")
        }
    });

    $("input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(this).parent().addClass("checkbox-checked");
            $(this).addClass("checkbox-checked");
        }else{
            $(this).parent().removeClass("checkbox-checked");
            $(this).removeClass("checkbox-checked");
        }
    });




  $(".jsHide").hide()
  $(".jsShow").show()
});

function parseNumberWithPound(n){
    var str = n.replace(/\£/g, '')
    return parseNumber(str)
}
function parseNumber(n){
    var str = n.replace(/\-/g, '')
    str = str.replace(/\,/g, '')
    if(validateInput(str))
        return parseFloat(str)
    else
        return false
}

function formatNumber(n){
    n ?  n = n.toFixed(2) : n = "0.00"
    return addCommas(n)
}

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function countDecimals(str) {
    if(typeof str.toString().split(".")[1] != "undefined")
        return str.toString().split(".")[1].length ;
     else
        return 0
}

function validateInput(str){
    return /^\d{0,10}(\.\d{0,2})?$/.test(str) && countDecimals(str) <= 2
}

function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}
