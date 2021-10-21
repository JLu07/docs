---
id: CDO-Core-Concepts
title: ✒ CDO Core Concepts
sidebar_label: ✒ CDO Core Concepts
---

## Identities
There are three identities of users in the CDO mechanism:

- Initiator: mainly for managers of projects which need refinancing and secondary exposure.
- Pilot: mainly for investors with the pursuit of excess returns
- Fellow: mainly for investors who prefer steady investment.
## Basic Concepts and Parameters

- Project token: the project token pledged by the initiator when operating the fund pool;
- Quote token: tokens used by pilots and fellows to join the fund pool,
   - Quote token on Ethereum： WBTC, WETH, BNB, USDT, USDC, BUSD,
   - Quote token on BSC: BTCB, BETH, WBNB, USDT, USDC, BUSD;
- Vault: from the subscription fee paid by pilots when joins the fund pool, the vault will eventually be allocated to the initiator and fellows, of which the initiator can withdraw up to 80%.
- $P,~P_{0},~P_{k}$: total number, initial number, and additional number for the $k$-th time of project tokens in the fund pool, $$P=\sum_{k=0}^{K}P_k$$,  where $K$ is the current total number of additional pledges；
- $S_{P},~S_{F}$: the amount of quote token invested by pilots, fellows in the current fund pool;
- $e_0,~e_k,~e_t$:  the initial market price, the market price at the $k$-th time of  addition, the current market price of the project token (quote token).
## Initiator-Related Concepts and Parameters

- $V$:  the total value of project token pledged by the initiator, $$V=\sum_{k=0}^{K}e_kP_k$$；
- $r$: the original collateral rate, set by the initiator when launching the fund pool；
- $F$: static fundable cap (quote token), $F=rV$;
- $F_t$: dynamic  fundable cap (quote token), $$F_t=\max\left(F,F\left(\sqrt{\dfrac{e_{t}}{e_{0}}}+\alpha\dfrac{e_{t}}{e_{0}}\right)\right)$$;
- $r_t$: dynamic collateral rate, $r_t=\dfrac{S_{P}}{e_{t}P}$;
- $r_l$: liquidation collateral rate, set by the initiator when launching the fund pool, the setting range is $\left(r_t,~300\%\right]$, when the dynamic collateral rate is higher than the liquidation collateral rate, the initiator will be forced to close out；
- $R_I$: risk rate of the initiator, $R_I=\dfrac{r_t}{r_l}$, when the rate reaches 100%,  the initiator will be forced to close out.
## Pilot-Related Concepts and Parameters

- Shares allocating is according to $D*\sqrt{I}$, where $D$ is the amount of DGT held and $I$ stands for the investment amount;
- Pilot volume: dynamic investible (fundable) cap of the pool;
- $L_{p}$: Pilot leverage ratio (quote token), $L_{p}=\dfrac{B_{p}+V_{f}}{B_{p}
}$, where $B_{p}$ is the balance of the pilot，$V_{f}$ is the value of fellows' fund allocated to the pilot.
## Fellow-Related Concepts and Parameters

- $E$: cumulative returns of the fellow at time $t$, $$E=\int_{t_0}^ty_tdt$$, where $t_0$ is the last time when the fellow enters the pool, $y_t$ is the benefit of each moment, and $$y_t=\dfrac{B_V}{T-t}\dfrac{S_{f}}{S_F}$$, where $B_V$ is the balance of vault, $T$ is the duration of the pool, $S_f$ is the quote token  balance of someone (fellow).
