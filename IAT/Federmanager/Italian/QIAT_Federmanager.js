define(['pipAPI', 'https://oldsword.github.io/IAT/Federmanager/code/code_IAT_Italian.js'], function(APIConstructor, iatExtension){
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
				{word: 'Società'},
				{word: 'Salario'},
				{word: 'Ufficio'},
				{word: 'Professionale'},
				{word: 'Management'},
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
           	{word: 'Wedding'},
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
            			{word: 'Franco'},
				{word: 'Paolo'},
				{word: 'Daniele'},
				{word: 'Giovanni'},
				{word: 'Lorenzo'}
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
          			{word: 'Rebecca'},
				{word: 'Giulia'},
				{word: 'Laura'},
				{word: 'Martina'},
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
		fb_strong_Att1WithCatA_Att2WithCatB : 'Your responses suggested a strong automatic association for attribute1 with categoryA and attribute2 with categoryB.',
                fb_moderate_Att1WithCatA_Att2WithCatB : 'Your responses suggested a moderate automatic association for attribute1 with categoryA and attribute2 with categoryB.',
                fb_slight_Att1WithCatA_Att2WithCatB : 'Your responses suggested a slight automatic association for attribute1 with categoryA and attribute2 with categoryB.',
                fb_equal_CatAvsCatB : 'Your responses suggested little or no automatic association between attribute2 and attribute1 with categoryA and categoryB.'
	});
});
