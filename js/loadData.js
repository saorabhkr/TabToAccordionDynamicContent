/**
 *   @class: loadFlightData
 *   @description: this class make initial calls
 *   @author: Saorabh Kumar
 *   @date: 21st May, 2016
 */

(function ( ns ) {
    function init (url, activeTab) {
      loadFileData(url, activeTab); 
    }
    function loadFileData(url, activeTab ){
      Papper.Util.activeTab = activeTab;
      var filesData = Papper.Util.getFileDetails(url);
      //On success 
      filesData.done(function ( data ) {
        //Exposing fileView init with data
        fileView.init( data, Papper.Util.activeTab );
      })
      .fail(function () {
        console.log("error");
      })
      .always(function () {
        console.log("complete");
      });
    }
  ns.init = init;

})( this.loadFileData = this.loadFileData || {} )
