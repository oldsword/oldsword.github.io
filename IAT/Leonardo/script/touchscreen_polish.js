define(['pipAPI', 'https://oldsword.github.io/IAT/Leonardo/code/polish/touchscreen_code_polish.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Kariera', //Will appear in the data.
			title : {
				media : {word : 'Kariera'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           			{word: 'Kariera'},
				{word: 'Firma'},
				{word: 'Pensja'},
				{word: 'Biuro'},
				{word: 'Specjalista'},
				{word: 'Zarządzanie'},
				{word: 'Biznes'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Rodzina', //Will appear in the data.
			title : {
				media : {word : 'Rodzina'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           			{word: 'Ślub'},
				{word: 'Małżeństwo'},
				{word: 'Rodzice'},
				{word: 'Krewni'},
				{word: 'Rodzina'},
				{word: 'Dom'}, 
				{word: 'Dzieci'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Mężczyzna',
			title : {
				media : {word : 'Mężczyzna'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Piotr'},
				{word: 'Krzysztof'},
				{word: 'Andrzej'},
				{word: 'Tomasz'},
				{word: 'Jan'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Kobieta',
			title : {
				media : {word : 'Kobieta'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Anna'},
				{word: 'Maria'},
				{word: 'Katarzyna'},
				{word: 'Małgorzata'},
				{word: 'Agnieszka'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},

		base_url : {//Where are your images at?
			image : 'https://baranan.github.io/minno-tasks/images/'
		},
   		//Should we randomize which attribute is on the right, and which on the left?
		randomAttSide : false, // Accepts 'true' and 'false'. If false, then attribute2 on the right.

		//Should we randomize which category is on the right first?
		randomBlockOrder : false, //Accepts 'true' and 'false'. If false, then category1 on the left first.
		showDebriefing: false,
    fullscreen: true
	});
});
