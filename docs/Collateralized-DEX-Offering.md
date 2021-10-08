---
id: Collateralized-DEX-Offering
title: Collateralized DEX Offering
sidebar_label: Collateralized DEX Offering
---

## CDO: A Liquidity Solution via Structured Fund
DeFi operates on liquidity, which is expensive to acquire and retain in the current market and is often not sustainable over a long time horizon. DeepGo preposes CDO to provide customized services to three types of users:

- Initial Provider (IP): mainly for managers of projects which need liquidity. IPs can obtain liquidity and cash flow income by pledging the project tokens.
- Great Partner (GP): mainly for investors who prefer venture investment. GPs can obtain capital allocation for leverage investment and obtain greater returns by providing vault and capital security to LPs.
- Limit Participant (LP): mainly for investors who prefer steady investment. LPs provide capital and get returns (from the vault) and capital security from GPs.
## Process
### Creating period

- IP can pledge project tokens and set basics and collateral parameters to initiate the fund pool after application. Other IPs holding the same project tokens can bid DGT for the initiation right of the fund pool.
### Building period

- IP can add the pledge to raise the fund pool size.
- GP pays the fee to subscribe for the fund pool share. The subscription fee paid by GP will form a vault (IP and LP can draw income from it later). In addition, the share allocated to GP is related to the amount of investment and held DGT.
- LP investment funds directly into the fund pool.
### Ongoing period

- IP can add the pledge and extract from the vault (up to 80% of it).
- GP's capital will be matched with LP's, and then funds to provide liquidity for IP's projects through DEX. GP can freely enter and exit the fund pool at any time, and also switch different investment modes.
- LP can freely enter and exit the fund pool at any time, or switch the investment mode, and extract returns.
### Liquidation period

- IP's impawned Token would be unlocked.
- GP would receive the income from selling the project tokens (from DEX) and return LP capital.
- LP could withdraw capital and cumulative income.

![image.png](/img/CDO_EN.png)
### Liquidation mechanism
During the operation of the fund pool, if the project token price drops and reaches IP's liquidation line, all the IP pledged project tokens will be paid to GP, and GP will get the remaining project tokens after returning LP funds. If the project token price drops and reaches GP's liquidation line, GP will be forced to liquidate and return LP funds.
## Benign curation
Through the collateral and structured fund, CDO in effect creates a steady binding of value between three types of users, which avoids the situation of unilateral short-term evil. And through the two-way feedback loop among the IP's project value and liquidity, GP's excess returns and reputation, and LP's steady earnings and risk control, a benign curation is constructed to screen high-quality assets by the wisdom of crowds.

![image.png](/img/user_EN.png)

The appreciation of the project attracts more GPs to join the fund pool and continuously improves the vault. The raising of steady income attracts more LPs to join in, which improves the GP leverage ratio and the liquidity of IP project tokens in DEX to accelerate project development, thus realizing a positive cycle. While project depreciation may produce a negative cycle. Project price is the key to this two-way cycle, so DeepGo offers token ratings alongside with CDO to provide more reference for investment.

![image.png](/img/circle_EN.png)


