import Wrapper from "@/app/wrapper"
import Quarters from "../Box"


function Course() {
  return (
    <section>
        <Wrapper>
            <div className="flex flex-wrap justify-between mt-10 mb-20">
                <div className="w-full lg:w-7/12 order-last lg:order-none mt-10 lg:mt-0">
                    {/* Course Description */}
                    <div className="">
                        {/* Left Side */}
                        <div className="">
                            <h2 className="font-bold text-lg text-blue-500 mb-3">W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps</h2>
                            <h1 className="font-bold text-5xl mb-5">Course Description:</h1>
                            <p className="text-base text-slate-500 font-medium mb-10">In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc. Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.</p>
                        </div>
                    </div>
                    {/* Course Outling */}
                    <div className="flex flex-col md:flex-row h-[200px] justify-between mb-52 md:mb-10">
                        <div className="text-3xl font-bold justify-center basis-1/2 border-4 border-blue-500 rounded-t-lg md:rounded-tr-none md:rounded-l-lg p-10 pt-20">
                            Specialized Program
                        </div>
                        <div className="justify-center basis-1/2 p-10 border-4 border-blue-500 rounded-b-lg md:rounded-bl-none md:rounded-r-lg bg-blue-500 pt-16">
                            <h1 className="text-white font-bold text-3xl mb-2">Duration</h1>
                            <h2 className="text-white text-lg">13 Weeks</h2>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold mb-7">Course Outline: </h1>
                        <h2 className="text-3xl font-normal mb-4">Blockchain and Metaverse Theory</h2>
                        <a className="text-lg text-blue-600 underline" href="https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0">The Metaverse: And How It Will Revolutionize Everything by Matthew Ball</a>
                        <a className="text-lg text-blue-600 underline" href="https://www.packtpub.com/product/mastering-blockchain-fourth-edition/9781803241067">Mastering Blockchain - Fourth Edition by Imran Bashir</a>
                        <h3 className="text-3xl font-semibold mb-4">Smart Contract Development in Solidity</h3>
                        <a className="text-lg text-blue-600 underline" href="https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181">Solidity Programming Essentials - Second Edition By Ritesh Modi</a>
                        <a className="text-lg text-blue-600 underline" href="https://github.com/panaverse/defi-dapps-solidity-smart-contracts">Solidity Learning Repo</a>
                        <h3 className="text-3xl font-semibold mb-4">Dapp Development using Ethers.js and Next.js 13</h3>
                        <a href="https://github.com/panaverse/dapps-nextjs" className="text-lg text-blue-600 underline">Dapp Learning Repo</a>
                        <h2 className="mt-4 font-semibold text-3xl mb-4">Tokennomics</h2>
                        <h3 className="text-3xl font-semibold mb-4">Blockchain Project: Create a Token and Launch ICO/IEO/IDO</h3>
                        <h3>As you probably know, the ICO ("Initial Coin Offering") industry has been booming, and it's completely reinventing the way new startups kickstart themselves. In fact, have a look at Wikipedia's list of highest <a className="text-blue-500 underline" href="https://en.wikipedia.org/wiki/List_of_highest-funded_crowdfunding_projects">crowdfunding projects</a>, and you'll notice that blockchain projects absolutely dominate the list.</h3>
                        <a className="text-blue-500 underline" href="https://phemex.com/blogs/what-is-a-dex-ido">Understand the difference between IDO vs. IEO vs. ICO</a>
                        <h3 className="text-lg font-medium text-slate-600 mb-4 mt-3">Also check these links for latest listings:</h3>
                        <a className="text-blue-500 underline" href="https://icodrops.com/">ICO list at ICO Drops</a>
                        <br />
                        <a className="text-blue-500 underline" href="https://topicolist.com/">ICO List of Best New Initial Coin Offerings</a>
                        <h3 className="text-lg text-slate-500 font-medium mb-4 mt-3">Top-Rated Crypto Token Sales: List of New ICOs, STOs, IEOs and IDOsTop-Rated Crypto Token Sales:</h3>
                        <a className="text-blue-500 underline" href="https://cryptototem.com/ico-list/">List of New ICOs, STOs, IEOs and IDOs</a>
                        <a className="text-blue-500 underline" href="https://www.icolistingonline.com/">ICO List Online</a>
                        <a className="text-blue-500 underline" href="https://coincodex.com/ieo-list/binance/">Binance IEO List</a>
                        <a className="text-blue-500 underline" href="https://www.coinspeaker.com/ieo/platform/binance-launchpad/">Binance Launchpad</a>
                        <a className="text-blue-500 underline" href="https://icomarks.com/ieo">IEO List</a>
                        <a className="text-blue-500 underline" href="https://polkastarter.com/">Polkastarter</a>
                        <h3 className="text-xl font-semibold mt-3 mb-4">Project Part 1: How to Launch a IEO on Binance Launchpad</h3>
                        <a className="text-blue-500 underline" href="https://appinventiv.com/blog/how-to-launch-an-ieo/">Read How to Launch an IEO</a>
                        <h3 className="text-lg font-medium text-slate-500 mt-3 mb-4">Your first task of the project is to make a google slides presentation on how to start a IEO on the <a className="text-blue-500 underline" href="https://www.binance.com/en/support/faq/94ed108ce89d44ab8602aa3c476dfb04">Binance Launch Pad</a></h3>
                        <h3 className="text-lg font-semibold mb-4">Note: Also document the alternatives to Binance Launchpad.</h3>
                        <h3 className="text-xl font-semibold mb-4">Project Part 2: How to Launch a IDO on Polkastarter</h3>
                        <h3 className="text-lg text-slate-500 mb-2">Review the list of top <a className="text-blue-500 underline" href="https://cryptorank.io/fundraising-platforms">fundraising platforms</a></h3>
                        <h3 className="text-lg text-slate-500 mb-2">Your second task of the project is to make a google slides presentation on how to start a IDO on the <a className="text-blue-500 underline" href="https://polkastarter.com/">Polkastarter</a></h3>
                        <h3 className="text-xl font-semibold mb-4">Project Part 3: Create a Pako Token</h3>
                        <h3 className="text-lg text-slate-500 font-base mb-4">By creating a token and related contracts, you'll also learn how to handle money sent to your contracts, which should come in handy if you want to create some kind of paid decentralized service in the future.</h3>
                        <h3 className="text-lg text-slate-500 font-base mb-4">Therefore, for the sake of this chapter, let's imagine that our Pako DApp uses its own coin – the Pako Token. We will create two contracts – one for the token itself and one for the token crowd sale (the ICO).</h3>
                        <h3 className="text-lg text-slate-500 font-base mb-4">Now Create your own Pako ERC20 Token and deploy it on a testnet. The Token should be to use OpenZeppelin contracts. You will use the Hardhat development environment. Also, write at least twenty automated tests. We will be using Solidity and Typescript for development..</h3>
                        <h3 className="text-xl font-semibold mb-4">Project Part 4: Develop Crowd Sale Contract</h3>
                        <h3 className="text-lg font-medium text-slate-500 mb-4"> This contract will be responsible for allowing users to exchange ETH for our Pako Token. In order to do that we need to set a price for our token (1 ETH = 100 Pako Token)
                        <br />
                        <br />
                        Implement a payable buyToken() function.
                        <br />
                        <br />
                        Emit a BuyTokens event that will log who’s the buyer, the amount of ETH sent and the amount of Token bought
                        <br />
                        <br />
                        Transfer 75% of the Tokens to the Crowd Sale contract at deployment time. i.e. Right after the contract is deployed, we want the token contract to send 75% of our token supply to it. While 25% remain in our personal "owner" account.
                        <br />
                        <br />
                        Transfer the ownership of the Crowd Sale contract (at deploy time) to our frontend address so that we are able to withdraw the ETH.
                        <br />
                        <br />
                        You can use the openzeppelin <a className="text-blue-500 underline" href="https://docs.openzeppelin.com/contracts/4.x/crowdsales">crowd sale contracts</a> however you will have to update the code to the latest solidity version.
                        <br />
                        <br />
                        Also write extensive tests, for example we will simply send a transaction of 1 ETH from a random account to the contract. After the transaction, we should expect the account to have received Pako, while the contract's balance should have been reduced.</h3>
                        <h3 className="text-lg font-medium mb-4">Note: Before you get started writing the token contract we suggest you review the access control</h3>
                        <a className="text-blue-500 underline text-lg" href="https://docs.openzeppelin.com/contracts/4.x/access-control">Access Control Link</a>
                        <h3 className="text-xl font-semibold mt-3 mb-4">Project Part 5: Trying it with MetaMask</h3>
                        <h3 className="text-lg text-slate-500 mb-4">While it's always good to test your code, it's often more satisfying to see the results of your work wrapped in a nice UI. Let's see how we can deploy our contracts and get some Pako tokens into our MetaMask wallet!
                        <br />
                        <br />
                        We start by running our deployment scripts for the test network so that the new token contracts are uploaded and deployed.
                        <br />
                        <br />
                        When it's done, take note of what addresses the contracts were uploaded to and copy it!
                        <br />
                        <br />
                        Now head to MetaMask, and send a transaction of 1 ETH to the crowd sale contract address. If your MetaMask wallet doesn't have any ethers, remember that you can use any faucet.
                        <br />
                        <br />
                        After the transaction has been confirmed, you might be confused about why you can't see any tokens in your wallet. It turns out that you need to manually add the token address in MetaMask in order to "register" it – after all, there are so many tokens out there, there's no way MetaMask could list them all by default!
                        <br />
                        <br />
                        To do this, open the side menu and click on the "Add token" button to get started:
                        <br />
                        <br />
                        Once you're on the token page, click on "Add custom token" and paste in the token contract's address in the address field.
                        <br />
                        <br />
                        After confirming that you want to add the token, you should be able to see your Pako balance right next to your ETH balance in the wallet. How cool!</h3>
                        <h3 className="text-xl font-semibold mb-4">Project Part 6: Trying it with Multisignature Wallets</h3>
                        <h3 className="text-lg text-slate-500 font-medium mb-4">Read <a className="text-blue-500 underline" href="https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/">This Page</a>
                        <br />
                        <a className="text-blue-500 underline" href="https://gnosis-safe.io/">Now use Gnosis Safe</a> with multi-sigs to do what you did in the last part.</h3>
                        <h3 className="text-xl font-semibold mt-3 mb-4">Project Part 7: Sending Tokens using Ethers.js</h3>
                        <h3 className="text-lg text-slate-500 font-medium mb-4">Write a Typescript program to send Pako Token to some friend's address using Ethers.js.
                        <br />
                        <a className="text-blue-500 underline" href="https://ethereum.org/en/developers/tutorials/send-token-etherjs/">You may follow this tutorial</a></h3>
                        <h3 className="text-xl font-semibold mt-3 mb-4">Project Part 8 Advance: Create, Deploy, Mint, and Sell an NFT</h3>
                        <h3 className="text-lg text-slate-500 font-medium mb-20"><a href="https://ethereum.org/en/developers/tutorials/how-to-write-and-deploy-an-nft/" className="text-blue-500 underline">Read this NFT tutorial series</a>
                        <br />
                        Create a NFT contract using the <a className="text-blue-500 underline" href="https://docs.openzeppelin.com/contracts/4.x/erc721">OpenZepplen ERC721 NFT Standard</a>
                        <br />
                        You may use the <a href="https://docs.openzeppelin.com/contracts/4.x/erc721#Presets" className="text-blue-500 underline">Preset ERC721 contract</a>
                        <br />
                        Deploy your NFT contract on a testnet, mint it, and view it on the MetaMask wallet and list it on <a className="text-blue-500 underline" href="https://opensea.io/">OpenSea Marketplace</a> for sale.
                        <br />
                        Implement a <a className="text-blue-500 underline" href="https://ethereum.org/en/developers/tutorials/how-to-implement-an-erc721-market/">ERC721 Market</a></h3>
                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:w-4/12 z-10 lg:mt-0 mt-10">
                    <div className="sticky">
                        <div className="flex flex-col border shadow-xl rounded-lg py-6 px-6">
                            <h2 className="font-bold text-xl mb-4">Program Structure</h2>
                            <p className="font-medium text-slate-500 text-base mb-5">After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                            {/* Boxes */}
                            <div>
                                <a href="../Quarters/q1">
                                    <Quarters insideBox="Q1" text="Quarter I" /> 
                                </a>
                                <a href="../Quarters/q2">
                                    <Quarters insideBox="Q2" text="Quarter II" />
                                </a>
                                <a href="../Quarters/q3">
                                    <Quarters insideBox="Q3" text="Quarter III" /> 
                                </a>
                                <a href="#">
                                    <Quarters insideBox="Q4" text="Quarter IV" /> 
                                </a>
                                <a href="../Quarters/q5">
                                    <Quarters insideBox="Q5" text="Quarter V" /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Course