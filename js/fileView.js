/**
 *   @class: FileView
 *   @description: this class have a FileView constructor who is responsible to return a FileView refrence
 *   @author: Saorabh Kumar
 *   @date: 21st May, 2016
 */
var fileView = (function() {

    var FileView = function() {

    };

    FileView.prototype = {
        util: Papper.Util,
        /**
         *   @method: init
         *   @description: Responsible to get the modal methods and responsible to build the templates and bind the events.
         *   @author: Saorabh Kumar
         *   @date: 21st May, 2016
         */
        init: function( data ) {
            var oThis = this
                ;
            oThis.buildUIComponent( data )
                
        },
        buildUIComponent: function ( data ) {
            $(".content-"+ Papper.Util.activeTab ).html( data );
        }

    }
    //Returing a FileView refrence from here to expose it.
    return new FileView();
})();
