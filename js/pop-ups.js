/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/
//About Page Pop Up
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
					disablePopupcategories();
					disablePopupContact();
					centerPopupAbout();
					loadPopupAbout();
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
			});
			$(function()
			{
				$('#popupAbout').jScrollPane();
				$('.popupAbout').jScrollPane(
					{
						showArrows: true,
						horizontalGutter: 10
					}
				);
			});
//categories Page Pop Up
			var popupcategoriesStatus = 0;
			
			function loadPopupcategories(){
				if(popupcategoriesStatus==0){
					$("#popupcategories").fadeIn("slow");
					popupcategoriesStatus = 1;
				}
			}
			
			function disablePopupcategories(){
				if(popupcategoriesStatus==1){
					$("#popupcategories").fadeOut("slow");
					popupcategoriesStatus = 0;
				}
			}
			
			function centerPopupcategories(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupcategoriesHeight = $("#popupcategories").height();
				var popupcategoriesWidth = $("#popupcategories").width();
				$("#popupcategories").css({
					"position": "absolute",
					"top": windowHeight/2-popupcategoriesHeight/2,
					"left": windowWidth/2-popupcategoriesWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupcategories").fadeOut();
				popupcategoriesStatus = 0;
				$("#categories").click(function(){
				$("#popupcategories").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupContact();					
					centerPopupcategories();
					loadPopupcategories();
				});
				$("#popupcategoriesClose").click(function(){
					disablePopupcategories();
				});
			});
			$(function()
			{
				$('#popupcategories').jScrollPane();
				$('.popupcategories').jScrollPane(
					{
						showArrows: true,
						horizontalGutter: 10
					}
				);
			});
//Contact Page Pop Up
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupcategories();					
					centerPopupContact();
					loadPopupContact();
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
			});
			$(function()
			{
				$('#popupContact').jScrollPane();
				$('.popupContact').jScrollPane(
					{
						showArrows: true,
						horizontalGutter: 10
					}
				);
			});
