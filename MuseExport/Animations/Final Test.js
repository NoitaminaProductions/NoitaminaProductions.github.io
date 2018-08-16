(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.FinalTest = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Head
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABjAAQAAApgdAcQgdAdgpAAQgoAAgdgdQgcgcAAgpQAAgoAcgdQAdgdAoAAQApAAAdAdQAdAdAAAog");
	this.shape.setTransform(91.9,530.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhFBFQgcgcgBgpQABgoAcgdQAdgcAoAAQApAAAdAcQAcAdAAAoQAAApgcAcQgdAdgpABQgogBgdgdg");
	this.shape_1.setTransform(91.9,530.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(95));

	// Body
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhRIxQgHgGgDgIQgDgLACgYIAWiuQAEgZAIgkIANg9IAhimIgBgFQgCgNAEgKQABgGAEgEIgBgDQgHhVAAiaQAAhmAEgyIAEg5IAEgfQgoAkgYAxQgIAQgLAdIgPAmQgKAXgFASIgJAmIgPBJQgIAhAAAUIgBARQgBAJgDAGQgIAOgSgBQgQgBgIgPQgGgNAFgaIAVhoQAKg1AJgZQAFgRANggIAJgZQASgrAJgRQALgSAJgNQAMgQATgUIAhgiQATgUAKgFIAGgCQAFgHAGgEQAJgFAIACQAHACAGAGQAFAGACAJIABAJQAIAFAKAMQAXAdAHAOQAMAVALAqIA5DPIAQBdQAFAYgEAMQgCAJgIAHQgHAGgJAAQgMgBgIgNQgFgJgDgOIgKhAQgFgogGgXIgPg1IgbhfQgHgegJgXIgIgVQgHgOgGgJIgGA5QgGBDABB4IABB/QAAAnAEAZIADAZIABABQADAFAAAJQABAHgFAUIgDAPIAIAuQAGAfABAQQABARABAjIAFAqQABAJgBASIAAAbQABAOAFAaQAKAwAHAvIADAiIABAeQABASACAMQACARgBAFQgCAJgKAFQgKAFgKgBQgPgCgGgLQgEgHAAgTQABgxgMhIQgMhMgCgUIgGhhIgBAGIgTBlIgbDMQgBARgFAKQgIAPgNABIgBAAQgIAAgHgGg");
	this.shape_2.setTransform(88.5,594);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(642.9,844.4,41.3,131.4);
// library properties:
lib.properties = {
	id: '74B9D4BA1E79FB499994F62DB0E803E6',
	width: 1150,
	height: 650,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['74B9D4BA1E79FB499994F62DB0E803E6'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;