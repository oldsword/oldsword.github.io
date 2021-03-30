define(['pipAPI', 'https://oldsword.github.io/IAT/quiat0.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		{
			fullscreen:false, //Should we show the task in full screen? A Qualtrics-only feature because in the usual Minno, we can go full-screen right at the beginning of the study.
        
			isTouch:false, //Set whether the task is on a touch device.
			//Set the canvas of the task
			canvas : {
				maxWidth: 725,
				proportions : 0.7,
				background: '#ffffff',
				borderWidth: 5,
				canvasBackground: '#ffffff',
				borderColor: 'lightblue'
			}
	});
});
