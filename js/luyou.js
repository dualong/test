var app=angular.module("myapp",['ngRoute'],RouteConfig);
	function RouteConfig($routeProvider){
	  $routeProvider
	    .when('/',{
	      templateUrl:"tmpl/index.html"
	    })
	     .when('/list',{
	      templateUrl:"tmpl/list.html"
	    })
	      .when('/cart',{
	      templateUrl:"cart.html"
	    })
	      .when('/cart1',{
	      templateUrl:"cart1.html"
	    })
	     .otherwise({
			 
			 template:"/"	
			 })
	}

app.directive('direc',function(){
    // 1.为什么返回?
    return {
        restrict:'AE', //四种都可以渲染
        replace : true, 
        compile:function(){
        // console.log("OK");
        	// 每渲染一次执行一次
        	var mySwiper = new Swiper ('.swiper-container1', {
			   autoplay : 1000,
					autoplayStopOnLast : true,
					loop : true,
					pagination : '.swiper-pagination',
			});
			var mySwiper = new Swiper ('.swiper-container2', {
			  slidesPerView :3,
					freeMode:true,
					spaceBetween :10,
			});
        }
    };
});
	app.controller("cont",function($scope,$http){
			// $scope.add1=function(){
				$http({
					method:"GET",
					url:"./php/index.php",

				}).then(function(succ){
					$scope.data=succ.data;
					  angular.forEach($scope.data,function(item,index){
		            	item.num=0;
		            	item.price=-(-(item.price));
           		 })
				},function(err){

			})

			$scope.set=function(goodsId,bool){
            	// console.log(goodsId);
            	angular.forEach($scope.data,function(item,index){
            		if(goodsId==item.goodsId){
            			if(bool){
							if(item.num==0){
								item.num=1;
								 $scope.cart.push(item);
							}else{
								item.num++;
							}
            			}else{
            					item.num--;
            					item.num=item.num<=0?0:item.num;
            			}
            		}

            	})
          	
            }
            $scope.cart=[];
            // $scope.sumPrice=function(){
            //     var allPrice=0;  
            //     var allnum=0; 
            //     angular.forEach($scope.cart,function(item,index){
            //        // 计算总价 
            //         allPrice+=item.num*item.price;
            //         allnum+=item.num;
            //         if(item.num<=0){$scope.cart.splice(index,1)};
            //     })
            //     return allPrice;
            //     // return allnum;
            // }
            $scope.$watch("cart",function(){
				$scope.allPrice=0;
				$scope.allNum=0;
				angular.forEach($scope.cart,function(item,index){
					//总价
					$scope.allPrice+=item.num*item.price;
					$scope.allNum+=item.num;
					if(item.num<=0){$scope.cart.splice(index,1)};
				})
			},true);
				
	});

	function fei(){
		var flyer = $('<img class="u-flyer" src="./img/3.png">');

			
            //鼠标在页面点击开始位置计算.
			var top = $(window).scrollTop();
			
			var dh = event.pageY;

			var newh = dh - top;


			// 购物车按钮  end在那图片飘到哪
			var oDiv = $('.btn').offset();

			var newdh = oDiv.top - top;

			// 我可以设置初始,结束,图片宽度
			flyer.fly({
				start: {
					left: event.pageX,
					top: newh,
					// width:1000,
					// height:1000,
					// 初始的图片样式我可以设置在class类里面
				},
				end: {
					left: oDiv.left,
					top: newdh,
					width: 0,
					height: 0
				},
				onEnd:function(){
					this.destory();
				}
			});
		};
	
			