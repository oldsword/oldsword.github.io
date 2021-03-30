define(['pipAPI', 'https://oldsword.github.io/IAT/quiat0.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		errorCorrection : false,
		finalText : 'clicca la barra spaziatrice',
	});
});
