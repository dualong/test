<?php

	$DataList= '[
		{"goodsId":"101010","img":"img/cart1.jpg","describe":
		"大卫 车载迷你灭火器 车家两用500g干粉灭火器 年检必备 火焰红 ","price":"39.00","name":"灭火器"
		},{"goodsId":"221010","img":"img/cart2.jpg","describe":
		"龟牌/Turtle Wax 多功能泡沫清洁剂 桔子橙 G-436 内饰清洁 罐喷装","price":"12.00","name":"泡沫清洁剂"
		},{"goodsId":"102510","img":"img/cart3.jpg","describe":
		"香百年/Carori 汽车座式香水 金巴黎二代法国曼士植物香水座 ","price":"200","name":"座式香水"
		},{"goodsId":"211320","img":"img/cart6.jpg","describe":
		"途虎定制超级便宜的非常好的 360度旋转出风口车载手机支架","price":"10","name":"手机支架"
		},{"goodsId":"231320","img":"img/cart7.jpg","describe":
		"TAWA 户外野营绑绳帆布吊床 室内宿舍单人秋千寝室吊床【彩虹】1421   ","price":"100","name":"帆布吊床"
		},{"goodsId":"231329","img":"img/cart8.jpg","describe":
		"WD-40 车家两用 除锈润滑剂除湿 防锈 润滑剂螺丝松动剂【300ml】  ","price":"10","name":"除锈剂"
		},
		{"goodsId":"101010","img":"img/cart1.jpg","describe":
		"大卫 车载迷你灭火器 车家两用500g干粉灭火器 年检必备 火焰红 ","price":"39.00","name":"灭火器"
		},{"goodsId":"221010","img":"img/cart2.jpg","describe":
		"龟牌/Turtle Wax 多功能泡沫清洁剂 桔子橙 G-436 内饰清洁 罐喷装","price":"12.00","name":"泡沫清洁剂"
		},{"goodsId":"102510","img":"img/cart3.jpg","describe":
		"香百年/Carori 汽车座式香水 金巴黎二代法国曼士植物香水座 ","price":"200","name":"座式香水"
		},{"goodsId":"211320","img":"img/cart6.jpg","describe":
		"途虎定制超级便宜的非常好的 360度旋转出风口车载手机支架","price":"10","name":"手机支架"
		},{"goodsId":"231320","img":"img/cart7.jpg","describe":
		"TAWA 户外野营绑绳帆布吊床 室内宿舍单人秋千寝室吊床【彩虹】1421   ","price":"100","name":"帆布吊床"
		},{"goodsId":"231329","img":"img/cart8.jpg","describe":
		"WD-40 车家两用 除锈润滑剂除湿 防锈 润滑剂螺丝松动剂【300ml】  ","price":"10","name":"除锈剂"
		}
	]';



	if ($_SERVER["REQUEST_METHOD"] == "GET") {
  echo $DataList;
} elseif ($_SERVER["REQUEST_METHOD"] == "POST"){
  echo $DataList;
}