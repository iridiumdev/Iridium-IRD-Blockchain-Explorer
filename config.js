// settings
const api = "https://explorer.ird.cash";
const coinDifficultyTarget=175;
const symbol="IRD";
const coinUnits=100000000;
const blockchainExplorer = "?hash={id}#block";
const transactionExplorer = "?hash={id}#transaction";

// poolList ["id","visible", "url", "api", "enabled"]
const poolList = [
    {"id":1,"visible":true,"url":"https://irdpool.fr","api":"https://irdpool.fr:8117","status":true,"flag":"FR","loc":"France"},
    {"id":2,"visible":true,"url":"https://irdpool.eu","api":"https://irdpool.eu:8443","status":true,"flag":"FR","loc":"France"},
    {"id":3,"visible":true,"url":"https://irdpool.ca","api":"https://irdpool.ca:8117","status":true,"flag":"CA","loc":"Canada"},
    {"id":4,"visible":true,"url":"https://irdpool.net","api":"https://irdpool.net:8117","status":true,"flag":"AU","loc":"Australia"},
    {"id":5,"visible":true,"url":"https://irdpool.de","api":"https://irdpool.de/api","status":false,"flag":"DE","loc":"Germany"},
    {"id":6,"visible":true,"url":"https://cryptoknight.cc/iridium","api":"https://cryptoknight.cc/rpc/iridium","status":true,"flag":"DE","loc":"Germany"},
    {"id":7,"visible":true,"url":"https://mineallcrypto.com/iridium","api":"https://mineallcrypto.com/iridium/pool","status":false,"flag":"RU","loc":"Russia"},
    {"id":8,"visible":true,"url":"http://ird.cashpool.us","api":"https://mig.ird.cash/cashpool","status":false},
    {"id":9,"visible":true,"url":"http://irdpool.tk","api":"https://mig.ird.cash/tk","status":false},
    {"id":10,"visible":true,"url":"http://irdpool.ru","api":"https://mig.ird.cash/ru","status":true,"flag":"RU","loc":"Russia"},
    {"id":11,"visible":true,"url":"http://iridiumpool.duckdns.org","api":"https://mig.ird.cash/nl","status":true,"flag":"NL","loc":"Netherlands"},
    {"id":12,"visible":true,"url":"http://irdpool.online","api":"https://mig.ird.cash/onl","status":true,"flag":"RU","loc":"Russia"},
    {"id":13,"visible":false,"url":"http://iridiumcoin.sixpools.tk","api":"https://mig.ird.cash/six","status":false},
    {"id":14,"visible":true,"url":"http://youpool.io/IRD","api":"https://mig.ird.cash/io","status":false},
    {"id":15,"visible":true,"url":"http://ird.cryptoisme.com","api":"https://mig.ird.cash/cryptoisme","status":true,"flag":"ID","loc":"Indonesia"},
    {"id":16,"visible":true,"url":"http://coinpoolit.webhop.me","api":"https://mig.ird.cash/coinpoolit","status":true,"flag":"IT","loc":"Italy"},
    {"id":17,"visible":true,"url":"https://matamu.me/iridium","api":"https://matamu.me:5119","status":true,"flag":"DE","loc":"Germany"},
    {"id":18,"visible":true,"url":"https://iridium.clevery.xyz","api":"https://iridium.clevery.xyz/api","status":true,"flag":"FR","loc":"France"},
    {"id":19,"visible":true,"url":"http://ird.soyminero.es","api":"https://mig.ird.cash/soyminero","status":true,"flag":"ES","loc":"Spain"},
    {"id":20,"visible":true,"url":"https://iridium.cnpools.space","api":"https://cnpools.dedyn.io:18119","status":true,"flag":"US","loc":"New-York"},
    {"id":21,"visible":true,"url":"http://irdpool.cryptonine.my","api":"https://mig.ird.cash/cryptonine","status":true,"flag":"SG","loc":"Singapore"},
    {"id":22,"visible":true,"url":"http://iridium.miningpoolhouse.com","api":"https://mig.ird.cash/mph","status":true,"flag":"DE","loc":"Germany"},
    {"id":23,"visible":true,"url":"https://ird.codpool.com","api":"https://pool1.codpool.com:8118","status":true,"flag":"US","loc":"New-York"},
    {"id":24,"visible":true,"url":"http://ird.wahaobi.com","api":"https://mig.ird.cash/hk","status":true,"flag":"CN","loc":"Hong Kong"}

];
const seedsNodes = [
    {"id":"rbx","url":"https://ns3024204.ip-178-33-231.eu"},
    {"id":"mtl","url":"https://ns523581.ip-158-69-127.net"},
    {"id":"sdn","url":"https://ns543550.ip-139-99-131.net"},
];