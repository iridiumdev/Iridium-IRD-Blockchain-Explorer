// settings
var api = "https://explorer.beta.ird.cash";
var coinDifficultyTarget=175;
var symbol="IRD";
var coinUnits=100000000;
var blockchainExplorer = "?hash={id}#block";
var transactionExplorer = "?hash={id}#transaction";

// poolList ["enabled", "url", "api", "status"]
var poolList = [
    {"id":1,"visible":true,"url":"https://irdpool.fr","api":"https://irdpool.fr:8117","status":true},
    {"id":2,"visible":true,"url":"https://irdpool.eu","api":"https://irdpool.eu:8443","status":true},
    {"id":3,"visible":true,"url":"https://irdpool.ca","api":"https://irdpool.ca:8117","status":true},
    {"id":4,"visible":true,"url":"https://irdpool.net","api":"https://irdpool.net:8117","status":true},
    {"id":5,"visible":true,"url":"https://irdpool.de","api":"https://irdpool.de/api","status":true},
    {"id":6,"visible":true,"url":"https://cryptoknight.cc/iridium","api":"https://cryptoknight.cc/rpc/iridium","status":true},
    {"id":7,"visible":true,"url":"https://mineallcrypto.com/iridium","api":"https://mineallcrypto.com/iridium/pool","status":true},
    {"id":8,"visible":true,"url":"http://ird.cashpool.us","api":"https://explorer.ird.cash/cashpool","status":true},
    {"id":9,"visible":true,"url":"http://irdpool.tk","api":"https://explorer.ird.cash/tk","status":true},
    {"id":10,"visible":true,"url":"http://irdpool.ru","api":"https://explorer.ird.cash/ru","status":true},
    {"id":11,"visible":true,"url":"http://iridiumpool.duckdns.org","api":"https://explorer.ird.cash/nl","status":true},
    {"id":12,"visible":true,"url":"http://irdpool.online","api":"https://explorer.ird.cash/onl","status":true},
    {"id":13,"visible":true,"url":"http://iridiumcoin.sixpools.tk","api":"https://explorer.ird.cash/six","status":true},
    {"id":14,"visible":true,"url":"http://youpool.io/IRD","api":"https://explorer.ird.cash/io","status":true}
];