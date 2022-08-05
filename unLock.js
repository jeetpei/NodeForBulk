async function main() {
    require('dotenv').config();
    const { PRIVATE_KEY } = process.env;
    const Web3  = require("web3");
    API_URL = "http://127.0.0.1:5075"
    const web3 =  new Web3(API_URL);
    //const myAddress = '0x32327f6f25af4dfc99919eb4123590bea7c16b7b' //TODO: replace this address with your own public address

    //const nonce = await web3.eth.getTransactionCount(myAddress, '1'); // nonce starts counting from 0
   /* for(let i = 1; i <= 1000000; i++){
    const transaction = {
     'from': '0x32327f6f25af4dfc99919eb4123590bea7c16b7b',
     'to': '0x79afe5f7073b2867a453b3e612b42cb7c9f39099', // faucet address to return eth
     'gas': '0x221000',
     'gasPrice': '0x31700000000',
     'value': '0x000001',
     'nonce': `0x${++i}`,
     'chainId': '0xFA',
    };
        //const signedTx = await web3.eth.sendTransaction(transaction);
    const signedTx = await web3.eth.signTransaction(transaction, PRIVATE_KEY);
  //  for(let i = 1; i <= 100; i++){ 
  //  console.log(signedTx);
    web3.eth.sendSignedTransaction(signedTx.raw, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n !");
    } else {
      console.log("❗What the hack!!!", error)
    }
   });
}*/
	web3.personal.unlockAccount("0x79afe5f7073b2867a453b3e612b42cb7c9f39099", "12345678", 10000);
}
main();
