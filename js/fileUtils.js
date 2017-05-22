/**
 *   Papper is namespace for all Papper attributes and property
 *   this common need to include in all html pages
 *   @author: Saorabh Kumar
 *   @date: 21st May, 2016
 */

var  NSQ2 = NSQ2 || {};

var Papper = {
    homePageUrl: 'index.html',
    activeTab : {}
};
/**
 *   Papper.Util is contain utility methods
 *   @author: Saorabh Kumar
 *   @date: 21st May, 2016
 */
Papper.Util = {
    activeTab : {},
    /**
     *   @method: getFileDetails
     *   @description: this method to fetch external file details
     *   @author: Saorabh Kumar
     *   @date: 21st May, 2016
     */
    getFileDetails: function (url){
        var data = $.get({
              url: url, 
              cache: true
            });
        return data; 
    }
}
