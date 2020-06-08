<div id="app">
  <html>
	<head>
		<title>Peliculas</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
			<link rel="stylesheet" href="assets/css/main.css" />
    		<link rel="stylesheet" href="assets/css/slider.css" />
    	
                 <link rel="stylesheet" href="assets/css/busqui.css" />
		<link rel="stylesheet" href="loadin.css">
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
  
	</head>
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
        <label>Search title:</label>
  </div>
  <div class="wrapper">
    <div class="card" v-for="post in filteredList">
      <a v-bind:href="post.link" target="_blank">
        <img v-bind:src="post.img"/>
        <small>Año: {{ post.author }}</small>
        {{ post.title }},
        {{ post.lang }}
      </a>
    </div>
  </div>
</div>
