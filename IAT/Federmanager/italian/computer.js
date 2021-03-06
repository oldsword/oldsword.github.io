define(['pipAPI', 'https://oldsword.github.io/IAT/Federmanager/code/computer_code.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({

		category1 : {
			name : 'Carriera', //Will appear in the data.
			title : {
				media : {word : 'Carriera'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           			{word: 'Carriera'},
				{word: 'Azienda'},
				{word: 'Salario'},
				{word: 'Ufficio'},
				{word: 'Professionista'},
				{word: 'Manager'},
				{word: 'Business'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Famiglia', //Will appear in the data.
			title : {
				media : {word : 'Famiglia'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
           			{word: 'Nozze'},
				{word: 'Matrimonio'},
				{word: 'Genitori'},
				{word: 'Parenti'},
				{word: 'Famiglia'},
				{word: 'Casa'}, 
				{word: 'Bambini'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
		attribute1 :
		{
			name : 'Uomo',
			title : {
				media : {word : 'Uomo'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
            	{word: 'Francesco'},
				{word: 'Leonardo'},
				{word: 'Alessandro'},
				{word: 'Lorenzo'},
				{word: 'Riccardo'}
			],
			//Stimulus css
			stimulusCss : {color:'#0000FF','font-size':'2.3em'}
		},
		attribute2 :
		{
			name : 'Donna',
			title : {
				media : {word : 'Donna'},
				css : {color:'#0000FF','font-size':'1.8em'},
				height : 4 //Used to position the "Or" in the combined block.
			},
			stimulusMedia : [ //Stimuli content as PIP's media objects
          {word: 'Sofia'},
				{word: 'Giulia'},
				{word: 'Alice'},
				{word: 'Emma'},
				{word: 'Anna'}
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
