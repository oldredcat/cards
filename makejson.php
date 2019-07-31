<?php

//	make main file
$main = [
	'total'		=> 25,
	'images'	=> 'assets/images/',
];

file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . 'json' . DIRECTORY_SEPARATOR . 'main.json', json_encode($main, JSON_UNESCAPED_UNICODE));

//	items
$item = [
	'life'		=> 1,
	'waranty'	=> 1,
	'image'		=> 'links.png',
	'title'		=> '<b>100%</b> тематические форумы<br>ручное размещение',
	'text'		=> 'Nullam lobortis a nunc id interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras posuere, lacus sit amet pulvinar imperdiet, elit ipsum efficitur lacus, eu rhoncus felis justo vitae odio. Maecenas justo velit, accumsan eget ex at, lacinia convallis lorem. Praesent a vehicula ligula. Fusce gravida imperdiet massa, id cursus massa imperdiet rutrum. Vivamus et semper lacus. Suspendisse vitae rutrum purus.',
	'user'		=> 'User Name',
	'star'		=> 5.0,
	'votes'		=> 260,
	'price'		=> 460,
	'link'		=> '#',
];

for($i=0;$i<$main['total'];$i++){
	file_put_contents(__DIR__ . DIRECTORY_SEPARATOR . 'json' . DIRECTORY_SEPARATOR . $i . '.json', json_encode($item, JSON_UNESCAPED_UNICODE));
}
