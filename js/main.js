var obj = {
	init: function(){
		obj.stickitHeader();
		obj.searchExpand();
        obj.navMenu();
        obj.hoverGrid();
	},
	stickitHeader: function(){
		$('.nav').stickit({extraHeight: 0});
	},
    navMenu:function(){
        function e(){
            document.getElementById("mySidenav").style.height="280px"
        }
        function o(){
            document.getElementById("mySidenav").style.height="0"
        }
        $("#openNav").click(function(o){
            o.preventDefault(),
            //$(".header").removeClass("p-menu-nav"),
            $("#mySidenav").addClass("active-menu"),
            $("body").addClass("overflowBody"),
            e()
        }),
        $("#closeNav").click(function(e){
            e.preventDefault(),
            $("#mySidenav").removeClass("active-menu"),
            $("body").removeClass("overflowBody"),
            //$("body").hasClass("p-bloque")&&($(".header").hasClass("stick")||$(".header").addClass("p-menu-nav")),
            o()
        })
    },
	searchExpand: function(){
		function buttonUp(){
            var inputVal = $('.searchbox-input').val();
            inputVal = $.trim(inputVal).length;
            if( inputVal !== 0){
                $('.searchbox-icon').css('display','none');
            } else {
                $('.searchbox-input').val('');
                $('.searchbox-icon').css('display','block');
            }
        }
		var submitIcon = $('.searchbox-icon');
        var inputBox = $('.searchbox-input');
        var searchBox = $('.searchbox');
        var isOpen = false;
        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('searchbox-open');
                inputBox.focus();
                isOpen = true;
            } else {
                searchBox.removeClass('searchbox-open');
                inputBox.focusout();
                isOpen = false;
            }
        });  
        submitIcon.mouseup(function(){
            return false;
        });
        searchBox.mouseup(function(){
            return false;
        });
        $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
        });
	},
    hoverGrid: function(){
        if($(".grid-container").length){
            $(".grid-container").mouseover(function() {
                $(this).find(".item-first").removeClass("item-grid-bg");
            }).mouseout(function() {
                $(this).find(".item-first").addClass("item-grid-bg");
            });
        }
    }
}
$(document).ready(function(){
	obj.init();
});
