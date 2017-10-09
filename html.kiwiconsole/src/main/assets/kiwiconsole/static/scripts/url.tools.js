var URLTools=(function(){
    function URLTools () {
    }
    URLTools.prototype.getQueryStringByQuery=function(urlQuery,key){
        var theRequest = new Object();
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i");
        var r = urlQuery.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        return null;
    }
    
    URLTools.prototype.getQueryString=function(key){
        return this.getQueryStringByQuery(location.search, key);
    }
    
    return URLTools;
})();
export default URLTools
