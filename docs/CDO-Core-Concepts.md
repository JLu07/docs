---
id: CDO-Core-Concepts
title: CDO Core Concepts
sidebar_label: CDO Core Concepts
---

## Identities
There are three identities of users in the CDO mechanism:

- Initial Provider (IP): mainly for managers of projects which need refinancing and secondary exposure.
- Great Partner (GP): mainly for investors with high-risk appetite, and the pursuit of excess returns
- Limit Participant (LP): mainly for investors who prefer steady investment.
## Basic Concepts and Parameters

- Project token: the project token pledged by IP when operating the fund pool;
- Quote token: tokens used by GP and LP to join the fund pool,
   - Quote token on Ethereum： WBTC, WETH, BNB, USDT, USDC, BUSD,
   - Quote token on BSC: BTCB, BETH, WBNB, USDT, USDC, BUSD;
- Vault: from the subscription fee paid by GP when joins the fund pool, the vault will eventually be allocated to IP and LP, of which IP can withdraw up to 80%.
- $P,~P_{0},~P_{k}$: total number, initial number, and additional number for the $k$-th time of project tokens in the fund pool, $$P=\sum_{k=0}^{K}P_k$$,  where $K$ is the current total number of additional pledges；
- $S_{G},~S_L$: the amount of quote token invested by GP, LP in the current fund pool;
- $e_0,~e_k,~e_t$:  the initial market price, the market price at the $k$-th time of  addition, the current market price of the project token (quote token).
## IP Concepts and Parameters

- $V$:  the total value of project token pledged by IP, $$V=\sum_{k=0}^{K}e_kP_k$$；
- $r$: the original collateral rate, set by the IP when launching the fund pool；
- $F$: static fundable cap (quote token), $F=rV$;
- $F_t$: dynamic  fundable cap (quote token), $$F_t=\max\left(F,F\left(\sqrt{\dfrac{e_{t}}{e_{0}}}+\alpha\dfrac{e_{t}}{e_{0}}\right)\right)$$;
- $r_t$: dynamic collateral rate, $r_t=\dfrac{S_G}{e_tP}$;
- $r_l$: liquidation collateral rate, set by the IP when launching the fund pool, the setting range is $\left(r_t,~300\%\right]$, when the dynamic collateral rate is higher than the liquidation collateral rate, IP will be forced to close out；
- $R_I$: risk rate of IP, $R_I=\dfrac{r_t}{r_l}$, when the rate reaches 100%,  IP will be forced to close out.
## GP Concepts and Parameters

- Shares allocating is according to $D*\sqrt{I}$, where $D$ is the amount of DGT held and $I$ stands for the investment amount;
- GP volume: dynamic investible (fundable) cap of the pool;
- $L_g$: GP leverage ratio (quote token), $L_g=\dfrac{B_g+V_l}{B_g
}$, where $B_g$ is the balance of GP，$V_l$ is the value of LP's fund allocated to GP.
## LP Concepts and Parameters

- $E$: cumulative returns of LP at time $t$, $$E=\int_{t_0}^ty_tdt$$, where $t_0$ is the last time when LP enters the pool, $y_t$ is the benefit of each moment, and $$y_t=\dfrac{B_V}{T-t}\dfrac{S_{l}}{S_L}$$, where $B_V$ is the balance of vault, $T$ is the duration of the pool, $S_l$ is the quote token  balance of someone (LP).
