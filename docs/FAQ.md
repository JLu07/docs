---
id: FAQ
title: FAQ
sidebar_label: FAQ
---

## What is the exchange API and how to get it?
API is the interface that exchanges provide for external access to user account data. External applications can read the asset information of user accounts through API interfaces. **Because the API involves account security issues, you are advised to select only the read-only permission when adding the API. **The following will provide a tutorial on obtaining read-only APIs from the DeepGo Cooperative Exchanges.
### · Get the read-only API from Binance
Log in to Binance, click "API Management" in the upper right corner of the account to enter the API Management page, and click "Create API" to create a new API for the account.  
![](/img/Binance_API_1.png)
Make sure the API is only enabled reading  for your account security, which can be edited through 'Edit Restrictions'. The Secret Key of Binance Exchange is only readable when it is created. If you need to use the API repeatedly, please keep the Secret Key properly by yourself.
![](/img/Binance_API_2.png)
### · Get the read-only API from OKEx
Log in OKEX, click 'API' in the upper right corner of the account to enter the API management interface, click 'Create API Key' to Create an API for your account.
![](/img/OKEx_API_1.png)
**Only select the OKEX default permission Read, when you start creating your own account API to keep your account secure. **Passphrase is the API password of the account. Please keep it safe. Once created, you can click 'View' to view your API. **Make sure your API is Read(-Only).**
![](/img/OKEx_API_2.png)
![](/img/OKEx_API_3.png)
### · Get the read-only API from OKEx
Log in Bybit, click on your Account and 'Account & Security' in the top right corner, and verify under 'Google Authentication'. After completing the validation, click on 'API Management' to start creating the API.
![](/img/Bybit_API_1.png)
When creating an API, please create the configuration in the following figure. For account security, ensure that Read-Only is selected. The Private Key is visible only after the API is created. If you need to use it repeatedly, keep it safe.![](/img/Bybit_API_2.png)
![](/img/Bybit_API_3.png)
## Are DeepGo smart contracts audited? 
DeepGo Smart Contracts are rigorously audited by third parties to ensure security and reliability.
## Is it risky to manage assets at DeepGo?
DeepGo Smart Contracts are rigorously audited by third parties to keep users' assets safe. The APIs  from the exchange are set as read-only to import in the DeepGo platform, which allows only read asset information and cannot conduct any trading operations. Meanwhile, the platform provides all historical transaction and transfer records for imported assets for users to query, ensuring transparency and asset security.
## Is it risky to mine at DeepGo?
Great partners take on a certain amount of risk, which comes from fluctuations in the market price of the project tokens. Limit participants and initial providers will not participate in DeepGo mining for the time being.
## Why is my deal still pending confirmation?
This may be related to the gas fee you paid. Ethereum miners tend to process transactions with high gas fees first and those with lower gas fees later.
## Which exchanges and wallets does DeepGo currently support?
DeepGo currently supports CEX such as Binance, OKEX, and Bybit.
DeepGo currently supports MetaMask, BSC Binance smart Wallet, WalletConnect, and soon to support Coinbase Wallet, Trust Wallet, Ledger Wallet, Portis, and more.
## What are the charges?
DeepGo has two types of investment, Boost for venture investment and Earn for steady investment. The following are the fee details for the two types of investment.

| Types | Buy | Sell |
| --- | --- | --- |
| Boost | 0 | 20% of revenue (if revenue >0) |
| Earn | 0 | 1% of the principal |

