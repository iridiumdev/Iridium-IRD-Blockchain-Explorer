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
    {"id":5,"visible":true,"url":"https://cryptoknight.cc/iridium","api":"https://cryptoknight.cc/rpc/iridium","status":true,"flag":"DE","loc":"Germany"},
    {"id":6,"visible":true,"url":"http://iridiumpool.duckdns.org","api":"https://mig.ird.cash/nl","status":true,"flag":"NL","loc":"Netherlands"},
    {"id":7,"visible":true,"url":"http://ird.cryptoisme.com","api":"https://mig.ird.cash/cryptoisme","status":true,"flag":"ID","loc":"Indonesia"},
    {"id":8,"visible":true,"url":"https://coinpoolit.webhop.me/ird","api":"https://ns3128504.ip-51-68-204.eu:8119","status":true,"flag":"IT","loc":"Italy"},
    {"id":9,"visible":true,"url":"https://ird.soyminero.es","api":"https://mig.ird.cash/soyminero","status":true,"flag":"ES","loc":"Spain"},
    {"id":10,"visible":true,"url":"https://iridium.cnpools.space","api":"https://iridium.cnpools.space:8119","status":false,"flag":"US","loc":"New-York"},
    {"id":11,"visible":true,"url":"https://ird.codpool.com","api":"https://pool1.codpool.com:8118","status":true,"flag":"US","loc":"New-York"},
    {"id":12,"visible":true,"url":"https://webird.semipool.com","api":"https://mig.ird.cash/semipool","status":true,"flag":"FR","loc":"France"}
];
const mmList = [
    {"id":1,"visible":true,"pair":"AEON",url:"https://webaeon.semipool.com","api":"https://webaeon.semipool.com/api/pool/altblocks/ird?page=0&limit=20","status":true,"flag":"FR","loc":"France"},
    {"id":2,"visible":true,"pair":"XTRI",url:"https://webxtri.semipool.com","api":"https://webxtri.semipool.com/api/pool/altblocks/ird?page=0&limit=20","status":true,"flag":"FR","loc":"France"},
    {"id":3,"visible":true,"pair":"ARQ",url:"https://webarq.semipool.com","api":"https://webarq.semipool.com/api/pool/altblocks/ird?page=0&limit=20","status":true,"flag":"FR","loc":"France"},
    {"id":4,"visible":true,"pair":"AEON",url:"https://aeon.minercountry.com/ird","api":"https://aeon.minercountry.com/irdapi/stats","status":true,"flag":"GB","loc":"London"},
    {"id":5,"visible":true,"pair":"ARQ",url:"https://arqidium.smartcoinpool.com","api":"https://iridium.smartcoinpool.com:9019/stats","status":true,"flag":"US","loc":"Tennessee"},
    {"id":6,"visible":true,"pair":"AEON",url:"https://aeon.hackerknowledge.de","api":"https://pool.ird.hackerknowledge.de:8319/stats","status":true,"flag":"DE","loc":"Germany"},
    {"id":7,"visible":true,"pair":"ARQ",url:"https://arqma.minercountry.com","api":"https://arqma.minercountry.com/mapi/stats","status":true,"flag":"GB","loc":"London"},
    {"id":8,"visible":true,"pair":"ARQ",url:"https://arq.hackerknowledge.de","api":"https://pool.ird.hackerknowledge.de:8319/stats","status":true,"flag":"DE","loc":"Germany"},
    {"id":9,"visible":true,"pair":"XTRI",url:"https://xtridium.minercountry.com","api":"https://xtridium.minercountry.com/mapi/stats","status":true,"flag":"CA","loc":"Montreal"},
    {"id":10,"visible":true,"pair":"ARQ",url:"https://iridium-arqma.bluerockpools.net","api":"https://iridium-arqma.bluerockpools.net:8114/stats","status":true,"flag":"US","loc":"Minneapolis"}
];

const seedsNodes = [
    {"id":"sdn","url":"https://explorer.ird.cash/sdn"},
    {"id":"exp","url":"https://explorer.ird.cash/exp"},
    {"id":"ams","url":"https://explorer.ird.cash/ams"},
];
