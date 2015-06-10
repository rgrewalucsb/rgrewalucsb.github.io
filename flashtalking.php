<html>
	<head>
  <title>PHP Test</title>
	</head>
	<body>
 	<?php 
 	$url = "http://cdn.flashtalking.com/temp/charlie/feedstest/waitrose.xml";
	$xml = new SimpleXMLElement(file_get_contents($url));

	// pre tags to format nicely
	echo '<pre>';
	print_r($xml);
	echo '</pre>';


 	?> 
	</body>
</html>