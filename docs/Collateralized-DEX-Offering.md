---
id: Collateralized-DEX-Offering
title: ☯ Collateralized DEX Offering
sidebar_label: ☯ Collateralized DEX Offering
---

## CDO: A Liquidity Solution via Tranche Funds
DeFi operates on liquidity, which is expensive to acquire and retain in the current market and is often not sustainable over a long time horizon. DeepGo preposes CDO to provide customized services to three types of users:

- Initiator: mainly for managers of projects which need refinancing and secondary exposure.
- Pilot: mainly for investors with the pursuit of excess returns
- Fellow: mainly for investors who prefer steady investment.
## Process
### Creating period

- The initiator can pledge project tokens and set basics and collateral parameters to initiate the fund pool after application. Other initiators holding the same project tokens can bid DGT for the initiation right of the fund pool.
### Building period

- The initiator can add the pledge to raise the fund pool size.
- Pilots pays the fee to subscribe for the fund pool share. The subscription fee paid by pilots will form a vault (the initiator and fellows can draw income from it later). In addition, the share allocated to the pilot is related to the amount of investment and held DGT.
- Fellows' investment funds directly into the fund pool.
### Ongoing period

- The initiator can add the pledge and extract from the vault (up to 80% of it).
- Pilots' capital will be matched with fellows', and then funds to provide liquidity for the initiator's project through DEX. Pilots can freely enter and exit the fund pool at any time, and also switch different investment modes.
- Fellows can freely enter and exit the fund pool at any time, or switch the investment mode, and extract returns.
### Liquidation period

- The initiator's impawned Tokens would be unlocked.
- Pilots would receive the income from selling the project tokens (from DEX) and return fellows' capital.
- Fellows could withdraw capital and cumulative income.

![image.png](/img/CDO_EN.jpg)
### Liquidation mechanism
During the operation of the fund pool, if the project token price drops and reaches the initiator's liquidation line, all the initiator pledged project tokens will be paid to pilots, and pilots will get the remaining project tokens after returning fellows' funds. If the project token price drops and reaches the pilot's liquidation line, the pilot will be forced to liquidate and return fellows' funds.
## Benign curation
Through the collateral and tranche funds, CDO in effect creates a steady binding of value between three types of users, which avoids the situation of unilateral short-term evil. And through the two-way feedback loop among the initiator's project value and liquidity, pilots' excess returns and reputation, and fellows' steady earnings and risk control, a benign curation is constructed to screen high-quality assets by the wisdom of crowds.

![image.png](/img/user_EN.jpg)

The appreciation of the project attracts more pilots to join the fund pool and continuously improves the vault. The raising of steady income attracts more fellows to join in, which improves the pilots' leverage ratios and the liquidity of the initiator's project tokens in DEX to accelerate project development, thus realizing a positive cycle. While project depreciation may produce a negative cycle. Project price is the key to this two-way cycle, so DeepGo offers token analytics alongside with CDO to provide more reference for investment.


