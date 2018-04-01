// settings
var api = "http://localhost:13007/json_rpc";
var coinDifficultyTarget=175;
var symbol="IRD";
var coinUnits=100000000;
var blockchainExplorer = "https://explorer.ird.cash/?hash={id}#blockchain_block";

// handle url hash click
window.onhashchange = function(){
    routePage();
};


var currentPage;
// routing #
var xhrPageLoading;
function routePage(loadedCallback) {
    if (currentPage) currentPage.destroy();
    $('#page').html('');
    $('#loading').show();

    if (xhrPageLoading)
        xhrPageLoading.abort();

    $('.hot_link').parent().removeClass('active');
    var $link = $('a.hot_link[href="' + (window.location.hash || '#') + '"]');

    $link.parent().addClass('active');
    var page = $link.data('page');

    xhrPageLoading = $.ajax({
        url: page,
        cache: false,
        success: function (data) {
            $('#page').show().html(data);
            currentPage.init();
            if (loadedCallback) loadedCallback();
        }
    });
}

// common functions
function updateText(e, t){
    var el = document.getElementById(e);
    if (el.textContent !== t){
        el.textContent = t;
    }
    return el;
}

function getReadableHashRateString(h){
    var i = 0;
    var byteUnits = [' H/s', ' kH/s', ' Mh/s', ' Gh/s', ' TH/s', ' PH/s' ];
    while (h > 1000){
        h = h / 1000;
        i++;
    }
    return h.toFixed(2) + byteUnits[i];
}

function getReadableCoins(coins, digits, withoutSymbol){
    var amount = (parseInt(coins || 0) / coinUnits).toFixed(digits || coinUnits.toString().length - 1);
    return amount + (withoutSymbol ? '' : (' ' + symbol));
}

function shortenLargeNumber(num, digits, withoutSymbol) {
    var units = ['k', 'M'], decimal;

    for(var i=units.length-1; i>=0; i--) {
        decimal = Math.pow(1000, i+1);
        if(num <= -decimal || num >= decimal) {
            return +(num / decimal).toFixed(digits) + units[i] + (withoutSymbol ? '' : (' ' + symbol));
        }
    }
    return num + (withoutSymbol ? '' : (' ' + symbol));
}

function getBlockchainUrl(id) {
    return blockchainExplorer.replace('{symbol}', symbol.toLowerCase()).replace('{id}', id);
}