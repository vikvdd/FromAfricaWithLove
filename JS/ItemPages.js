 // <------ CHANGE THIS LINK



$(document).ready(function() {
    var pageBody = document.getElementById('item-page');
    var page = pageBody.dataset.page;   
    var jsonSource = 'https://api.myjson.com/bins/ri81r';
    $(this).scrollTop(0);
    $.ajax({
        type: 'GET',
        url: jsonSource,
        dataType: 'json',
        success: jsonParser
    });
	
	var defaultImgHeight = 0;
    
    //dynamically load json data into html
    function jsonParser(json) {
        
        var numOfItems = 0;
        
        $.getJSON(jsonSource, function(data) {
            $.each(data.inventory[page], function(k, v) {
                numOfItems++;
                var name = v.name;
                var price = v.price;
                var img = v.image;
                var desc = v.description;
                $('#inv-tiles').append('<li class="inv-tile-cont"><div class="inv-tile-button" id="item' + numOfItems + '" data-artwork="' + img + '" data-price="' + price + '" data-name="' + name + '" data-desc="' + desc + '"><img class="inv-tile-img" src="Images/Inventory/' + img + '" alt="' + name + '"><span class="inv-titles">' + name + '</span></div></li>');
				
                if (numOfItem === 1){
					defaultImgHeight = $('#inv-tile-img').height();
					alert(defaultImgHeight + "");
				}
            });
    });
        
        
        
	//hide loading symbol when json is loaded
	$('.loader').css('display', 'none');
	$('.loader').css('display', 'none');
    }


    //change opacity of title when scrolling
    $(window).scroll(function(){
        $("#page-title").css("opacity", 1 - $(window).scrollTop() / 700);
        $("#down-arrow").css("opacity", 1 - $(window).scrollTop() / 250);
      });


    //Click for item info

    var imageDir = 'Images/Inventory/';
    var currentIndex;
    
    
    
    //get item data from clicked on item
    $('body').on('click', '.inv-tile-button' ,function(e) {
        var selectedItem = e.target;
        var parentItem = selectedItem.closest(".inv-tile-button");
        var parentItemId = parentItem.id;
        var allItems = document.getElementsByClassName("inv-tile-cont");
        
        
        for (var i = 0; i < allItems.length; i++){
            if (parentItemId === "item" + i)
                currentIndex = i;
        }
        
        //call open item view function with the correct data
        openItemView(parentItem, allItems);
        
        
        
        
        
    });
    
    
    //open item slide show view
    function openItemView(parentItem, allItems){
        var itemViewCont = $('#item-view-cont');
        var itemView = document.getElementById('item-view-cont');
        var itemTitle = $('#item-view-title');
        var itemImage = $('#item-view-img');
        var itemPrice = $('#item-view-price');
        var itemDesc = $('#item-view-desc');
		var itemViewDiv = document.getElementById('item-view');
        
        itemTitle.html(parentItem.dataset.name);
        itemImage.attr('src', imageDir + parentItem.dataset.artwork)
        itemPrice.html('&euro;' + parentItem.dataset.price);
        itemDesc.html(parentItem.dataset.desc);
		
		allItems[currentIndex].childNodes[0].childNodes[0].style.height = '100%';
		itemViewDiv.style.width = $(allItems[currentIndex].childNodes[0].childNodes[0]).outerWidth();
        
        itemViewCont.show(0).delay(0).fadeIn(0);
    }
    
    //detect click on left arrow and call appropriate method
	
	
    $('body').on('click', '#arrow-left', function(){
		
        var prevSlide = -1;
        changeSlide(prevSlide);
    });
    
    
    //detect click on right arrow and call appropriate method
    $('body').on('click', '#arrow-right', function() {
        var nextSlide = 1;
        changeSlide(nextSlide);
    });
    
    
    //method to change slides based on the direction given
    function changeSlide(direction){
        var allItems = document.getElementsByClassName("inv-tile-cont");
        
        currentIndex += direction;
        
        var newItem = allItems[currentIndex].childNodes[0]; 

        openItemView(newItem, allItems);
        
    }
    
    

    var itemViewCont = $('#item-view-cont');
    
    itemViewCont.click(function(e)
					  {
		closeSlide();
	});

    //close the item slide show view
	
	
	
    function closeSlide(){
		
        itemViewCont.hide();
    }
    
    
    //detect and standardize image sizes of items

    function setImageSize(){
    var items = document.getElementById('inv-tiles');
    var firstItem = document.getElementById('item1');
        
    alert(firstItem.id);
    
    
    }
    
});







