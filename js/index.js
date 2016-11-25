
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
AFRAME.registerComponent('toggle-for', {
    schema: {type: 'selector'},
    init: function() {

        this.targetEntity = this.data;
        console.info('init data', this.data);

        this.el.addEventListener('click', evt => {
            console.log(this.data);
            if( this.targetEntity.is('toggled')){
                console.info('toggled off');
                this.targetEntity.removeState('toggled');
                this.targetEntity.emit('toggleoff');
                this.targetEntity.emit('toggle');

            }else{
                console.info('toggled on');
                this.targetEntity.addState('toggled');
                this.targetEntity.emit('toggleon');
                this.targetEntity.emit('toggle');
                document.getElementById("background").setAttribute("src", "assets/background2.jpg");


            }
        });
    },
    tick: function(t,dt){
        //console.log(t,dt)
    },
    remove: function() {
    }
});

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
