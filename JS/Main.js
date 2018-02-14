
var contactBox = document.getElementById("contact");
var contactOpen = document.getElementById("contact-info");
var contactActive = false;
var contactInfo = $('#contact-info');
var contactTitle = $('#contact-title');
var contactCont = $('#contact-cont');
var contactTileCont = $('#contact-tiles-cont');

var invTitle = document.getElementById("inv-header");
var invTile = document.getElementById("inv-tiles");

var invBG = $('#main-bg-overlay');
var leftInvPanel = $('#inv-left');
var rightInvPanel = $('#inv-right');
var panelHeight = invBG.css('height');

var selectInput = $('#inv-select-input');
var selectForm = $('#inv-select-Form');
var selectButton = $('#inv-select-button');

/* Event Listeners */

contactOpen.addEventListener('click', ToggleContact, false);

/* Inventory Update */

//Import json data for main inventory

var jsonSource = 'https://api.myjson.com/bins/16gc1f'; // <------ CHANGE THIS LINK

$(document).ready(function() {
    $(this).scrollTop(0);
    $.ajax({
        type: 'GET',
        url: jsonSource,
        dataType: 'json',
        success: jsonParser
    });
});

function jsonParser(json) {
    $.getJSON(jsonSource, function(data) {
        $.each(data.inventory, function(k, v) {
            var name = v.name;
            var img = v.image;
            var page = v.page;
            $('#inv-tiles').append('<a class="inv-tile-cont" href="' + page + '"><div><img class="inv-tile-img" src="Images/Inventory/' + img + '" alt="' + name + '"><span class="inv-titles">' + name + '</span></div></a>')
        });
    $.getJSON(jsonSource, function(data) {
        $.each(data.inventory, function(k, v) {
            var name = v.name;
            var page = v.page;
            selectInput.append('<option value="' + page + '">' + name + '</option>')
        });
    });
});
    
//loading json symbol
    
    $('.loader').css('display', 'none');
}


//main title opacity scroll

$(window).scroll(function(){
    $("#head-title").css("opacity", 1 - $(window).scrollTop() / 700);
    $("#down-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
  });


/* Contact Info */

//open contact info tile

function ToggleContact() {
    
    if (contactActive){
        contactCont.css('height', '50px')
        contactActive = false;
         contactCont.css('width', '100px');
        contactInfo.css('width', '100px');
        contactTitle.css('display', 'none');
    }
    else{
        contactCont.css('width', '300px');
        contactInfo.css('width', '300px');
        contactActive = true;
    }
}

contactCont.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){ 
    if (contactInfo.css('width') === '300px'){
        contactCont.css('height', '300px')
        contactTitle.css('display', 'inline-block');
    }
});



selectButton.click(function (e) {
    
    
    
});



/* Inventory */

leftInvPanel.css('height', panelHeight);
rightInvPanel.css('height', panelHeight);
