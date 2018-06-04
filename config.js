// settings
const api = "https://explorer.ird.cash";
const coinDifficultyTarget=175;
const symbol="IRD";
const coinUnits=100000000;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"https://irdpool.fr","api":"https://irdpool.fr:8117","status":true},
    {"id":2,"visible":true,"url":"https://irdpool.eu","api":"https://irdpool.eu:8443","status":true},
    {"id":3,"visible":true,"url":"https://irdpool.ca","api":"https://irdpool.ca:8117","status":true},
    {"id":4,"visible":true,"url":"https://irdpool.net","api":"https://irdpool.net:8117","status":true},
    {"id":5,"visible":true,"url":"https://irdpool.de","api":"https://irdpool.de/api","status":false},
    {"id":6,"visible":true,"url":"https://cryptoknight.cc/iridium","api":"https://cryptoknight.cc/rpc/iridium","status":true},
    {"id":7,"visible":true,"url":"https://mineallcrypto.com/iridium","api":"https://mineallcrypto.com/iridium/pool","status":false},
    {"id":8,"visible":true,"url":"http://ird.cashpool.us","api":"https://mig.ird.cash/cashpool","status":false},
    {"id":9,"visible":true,"url":"http://irdpool.tk","api":"https://mig.ird.cash/tk","status":false},
    {"id":10,"visible":true,"url":"http://irdpool.ru","api":"https://mig.ird.cash/ru","status":true},
    {"id":11,"visible":true,"url":"http://iridiumpool.duckdns.org","api":"https://mig.ird.cash/nl","status":true},
    {"id":12,"visible":true,"url":"http://irdpool.online","api":"https://mig.ird.cash/onl","status":true},
    {"id":13,"visible":true,"url":"http://iridiumcoin.sixpools.tk","api":"https://mig.ird.cash/six","status":false},
    {"id":14,"visible":true,"url":"http://youpool.io/IRD","api":"https://mig.ird.cash/io","status":false},
    {"id":15,"visible":true,"url":"http://ird.cryptoisme.com","api":"https://mig.ird.cash/cryptoisme","status":true},
    {"id":16,"visible":true,"url":"http://coinpoolit.webhop.me","api":"https://mig.ird.cash/coinpoolit","status":true},
    {"id":17,"visible":true,"url":"https://matamu.me/iridium","api":"https://matamu.me:5119","status":true},
    {"id":18,"visible":true,"url":"https://iridium.clevery.xyz","api":"https://iridium.clevery.xyz/api","status":true},
    {"id":19,"visible":true,"url":"http://ird.soyminero.es","api":"https://mig.ird.cash/soyminero","status":true}

];
const seedsNodes = [
    {"id":"rbx","url":"https://ns3024204.ip-178-33-231.eu"},
    {"id":"mtl","url":"https://ns523581.ip-158-69-127.net"},
    {"id":"sdn","url":"https://ns543550.ip-139-99-131.net"},
];