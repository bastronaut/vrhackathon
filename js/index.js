
require('./evil-hax');

window.WebVRConfig = {
    FORCE_ENABLE_VR: true, // Default: false.
    // CARDBOARD_UI_DISABLED: false,
    // BUFFER_SCALE: 2.0
};


require('aframe');
require('aframe-animation-component');

console.info('PRESS [CTRL] + [ALT] + I to start Aframe inspector');

//example component
AFRAME.registerComponent('backgroundswitch', {
    schema: {type: 'selector'},
    init: function() {

        this.targetEntity = this.data;

        this.el.addEventListener('click', evt => {
            toggleBackground(this.targetEntity.id);
            toggleMusic(this.targetEntity.id);
        });
    },
    tick: function(t,dt){
        //console.log(t,dt)
    },
    remove: function() {
    }
});



function toggleBackground(backgroundid) {
  var backgroundelement =  document.getElementById("background");
  backgroundelement.setAttribute("src", "assets/"+backgroundid+".jpg");
}

function toggleMusic(backgroundid) {
  // target the music element
  var element =  document.getElementById("river");
   element.setAttribute("sound", "src: url(assets/"+backgroundid+".mp3); autoplay: true")
}

// example system
AFRAME.registerSystem('some-system', {
    init: function() {
        this.entities = [];
    },
    registerMe: function(el) {
        this.entities.push({ el: el });
    },
    unregisterMe: function(el) {
        let item = this.entities.filter( entity => entity.el === el ),
            idx = this.entities.indexOf(item);
        this.entities.splice(idx,1);

    }
});
