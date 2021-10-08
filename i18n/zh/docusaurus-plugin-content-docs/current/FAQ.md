---
id: FAQ
title: FAQ
sidebar_label: FAQ
---

## 交易所API是什么，如何获取交易所API？
API是交易所为外部获取用户帐户数据，所提供的接口。外部应用可以通过API接口来读取用户帐户的资产信息。**因为API涉及帐户安全问题，请用户在新增API时只选择只读权限**。以下内容将提供，从DeepGo合作交易所获取只读API的教程。
### 从币安交易所获取只读API
登录币安交易所，在右上角帐户处点击‘API Management’进入API管理页面，点击‘Create API’为帐户新建API接口。
![image.png](/img/Binance_API_1.png)
**请确保API只勾选了Enable Reading，提供只读权限以保证自己帐户安全，权限可以通过‘Edit restrictions’编辑。**币安交易所的Secret Key仅在第一次创建时可读，如果需要反复使用该API，请用户自行妥善保存Secret Key。
![image.png](/img/Binance_API_2.png)
### 从OKEX交易所获取只读API
登录OKEX交易所，在右上角账户处点击‘API’进入API管理界面，点击‘Create API Key’为自己的帐户创建API。
![image.png](/img/OKEx_API_1.png)
**开始创建自己帐户的API时请选择OKEX默认的Read，以保证自己的帐户安全。**Passphrase为帐户API的密码，请用户妥善保存。完成创建之后可以点击‘View’来查看自己的API，**请用户务必确保自己的API权限为Read。**
![image.png](/img/OKEx_API_2.png)
![image.png](/img/OKEx_API_3.png)
### 从Bybit交易所获取只读API
登录Bybit交易所，右上角帐户处点击‘Account & Security’，并且在‘Google Authentication’处完成验证。完成验证之后点击‘API Management’开始创建帐户API。
![image.png](/img/Bybit_API_1.png)
在创建API时，请按照下图配置创建，**为了保证帐户安全，请务必勾选‘Read-Only’**。其中Private Key仅在创建API完成之后可见，如果需要反复使用，请用户妥善保管。
![image.png](/img/Bybit_API_2.png)
![image.png](/img/Bybit_API_3.png)
## DeepGo智能合约是否审计？
DeepGo的智能合约经过了严格的第三方审计，以绝对保证智能合约的安全性和可靠性。
## 在DeepGo管理资产有风险吗？
DeepGo平台的智能合约代码经过了严格的第三方审计，以保证用户的资产安全。用户从交易所导入DeepGo平台的API都设置为只读权限，只能读取资产信息，无法进行任何交易操作，同时平台为用户导入的资产提供所有历史交易和转账的记录供用户查询，以确保透明化和用户的资产安全。
## 在DeepGo挖矿有风险吗？
在DeepGo挖矿时，重要参与者需要承担一定风险，风险来自投资标的代币的市场价格波动。有限参与者和项目方暂时不参与DeepGo平台的挖矿。
## 为什么我的交易一直处于待确认中？
您的交易仍然在待确认中，可能与您支付的gas费用有关，以太坊的矿工一般会优先处理高gas费用的交易，后处理gas费用相对更低的交易。
## DeepGo目前支持哪些交易所和钱包？
DeepGo目前支持的中心化交易所包括Binance，OKEX和Bybit。
DeepGo目前支持的钱包有MetaMask，BSC币安智能链钱包，WalletConnect，即将开始支持Coinbase Wallet，Trust Wallet，Ledger Wallet，Portis等。
## 收费有哪些？
     DeepGo有两种风险偏好投资方式，风险较高的“加速”和风险较低的“收益”。以下是针对两种投资者的收手续费详情。

| 投资方式 | 买 | 卖 |
| --- | --- | --- |
| 加速 | 0 | 收益的20%（如果收益>0) |
| 收益 | 0 | 本金的1% |

​

