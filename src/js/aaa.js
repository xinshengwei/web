var $ = require("./com/jquery-1.11.0.min.js");
require("./com/swiper.min.js");
var swiperAnimateCache=require("com/swiper.animate1.0.2.min.js").swiperAnimateCache;
var swiperAnimate=require("com/swiper.animate1.0.2.min.js").swiperAnimate;
var tpl=require("tpl/index.string")
$("body").prepend(tpl);
var mySwiper = new Swiper('.swiper-container',{
                direction : 'vertical',
                autoplay :5000,
                pagination: '.swiper-pagination',
                onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                    swiperAnimateCache(swiper); //隐藏动画元素 
                    swiperAnimate(swiper); //初始化完成开始动画
                  }, 
                  onSlideChangeEnd: function(swiper){ 
                    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
                  }
                })
            $(".audio").on("click",function(){
                //console.log()
                //animationPlayState 规定属性是运行还是暂停
                if($("audio")[0].paused == false){
                    $("audio")[0].pause();
                    $("#imgs").attr("src","img/audio2.png");
                    $("#imgs").css("animationPlayState","paused");
                    $(".img1").css("display","none");
                }else{
                    $("audio")[0].play();
                    $("#imgs").attr("src","img/audio1.png");
                    $("#imgs").css("animationPlayState","running");
                    $(".img1").css("display","block");
                }
            })