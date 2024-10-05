// 1. Create a variable to hold your NFTs
let nfts = [];

// 2. The mintNFT function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the array above.
function mintNFT(name, rarity, description) {
    const nft = {
        name: name,
        rarity: rarity,
        description: description
    };
    nfts.push(nft);
    console.log(`NFT named '${name}' has been minted!`);
}

// 3. The listNFTs function will go through the array of NFTs
// and print their metadata using console.log()
function listNFTs() {
    nfts.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log("Name: " + nft.name);
        console.log("Rarity: " + nft.rarity);
        console.log("Description: " + nft.description);
        console.log('------------------');
    });
}

// 4. The getTotalSupply function returns the number of NFTs minted.
function getTotalSupply() {
    return nfts.length;
}

// Call the functions below

mintNFT("CryptoPunk", "Rare", "A unique punk-style NFT.");
mintNFT("Bored Ape", "Epic", "A bored ape NFT from the famous collection.");
mintNFT("Cool Cat", "Legendary", "A legendary cool cat NFT.");

listNFTs();

console.log("Total NFTs minted: " + getTotalSupply());


