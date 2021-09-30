---
id: CDO-Core-Concepts
title: CDO核心概念
sidebar_label: CDO核心概念
---

## 用户身份
CDO机制中用户有三种身份：

- 建池发起者 (IP)：目标用户为需要再融资及二次曝光的项目方
- 重要参与者 (GP)：主要面向认知能力强，风险偏好高，追求超额收益的投资者
- 固定收益者 (LP)：用户定位为风险偏好低，追求稳定收益的投资者
## 基础概念与参数

- 项目代币：建池发起者 (IP)建立基金池时质押的本项目代币；
- 本位币：重要参与者(GP) 和固定收益者(LP) 加入基金池时需要使用的代币，
   - Ethereum 可用本位币： WBTC, WETH, BNB, USDT, USDC, BUSD，
   - BSC 可用本位币：BTCB, BETH, WBNB, USDT, USDC, BUSD；
- 准备金：来源为重要参与者(GP) 加入助推池时缴纳的申购费，准备金最终将分配给IP和LP，IP可以提取其中最多80%.
- ![](https://cdn.nlark.com/yuque/__latex/08e8596ac954d595ec7f47f787e9d6fa.svg#card=math&code=P%2C~P_%7B0%7D%2C~P_%7Bk%7D%0A&id=Q5Jaw)：项目代币在当前基金池中的总数量，初始数量，第![](https://cdn.nlark.com/yuque/__latex/8ce4b16b22b58894aa86c421e8759df3.svg#card=math&code=k&id=iBn4T)次追加质押数量，![](https://cdn.nlark.com/yuque/__latex/a047fc21950d3e996c0e951c8f74ba38.svg#card=math&code=P%3D%5Csum_%7Bk%3D0%7D%5E%7BK%7DP_k%0A%0A&id=mz3ZH),  其中![](https://cdn.nlark.com/yuque/__latex/a5f3c6a11b03839d46af9fb43c97c188.svg#card=math&code=K&id=nAYaM)为当前总追加质押次数；
- ![](https://cdn.nlark.com/yuque/__latex/2c133aef48aca59a0b1a57d071e83df5.svg#card=math&code=S_%7BG%7D%2C~S_L&id=E3naw): GP, LP在当前基金池中投资的本位币数量；
- ![](https://cdn.nlark.com/yuque/__latex/1bd4d58b02d246130e5848dccc67752a.svg#card=math&code=e_0%2C~e_k%2C~e_t%0A&id=Dcp6l):  项目代币的初始市价、第![](https://cdn.nlark.com/yuque/__latex/8ce4b16b22b58894aa86c421e8759df3.svg#card=math&code=k%0A&id=k9Ag7)次追加质押时市价、当前市价（对本位币汇率）。
## IP相关

- ![](https://cdn.nlark.com/yuque/__latex/5206560a306a2e085a437fd258eb57ce.svg#card=math&code=V&id=BF9Xv):  IP质押代币的总价值，![](https://cdn.nlark.com/yuque/__latex/d16b1248f3f67ce5605d07fe59222146.svg#card=math&code=V%3D%5Csum_%7Bk%3D0%7D%5E%7BK%7De_kP_k&id=u7Kpa)；
- ![](https://cdn.nlark.com/yuque/__latex/4b43b0aee35624cd95b910189b3dc231.svg#card=math&code=r%0A%0A&id=Ltc09): 初始质押率，由IP在发起基金池时设定；
- ![](https://cdn.nlark.com/yuque/__latex/800618943025315f869e4e1f09471012.svg#card=math&code=F%0A&id=P8Ff3): 静态可募（GP）资金上限，![](https://cdn.nlark.com/yuque/__latex/f10703ea35d788683835e2e05b447385.svg#card=math&code=F%3DrV&id=p77NU);
- ![](https://cdn.nlark.com/yuque/__latex/b0c5b38ca3f8b5a4145f542c0a8cbfc7.svg#card=math&code=F_t&id=flnfB): 动态可募（GP）资金上限(以本位币计算)，![](https://cdn.nlark.com/yuque/__latex/15df870d9b1737038f734c8696b9ea91.svg#card=math&code=F_t%3D%5Cmax%5Cleft%28F%2CF%5Cleft%28%5Csqrt%7B%5Cdfrac%7Be_%7Bt%7D%7D%7Be_%7B0%7D%7D%7D%2B%5Calpha%5Cdfrac%7Be_%7Bt%7D%7D%7Be_%7B0%7D%7D%5Cright%29%5Cright%29&id=wxRjR);
- ![](https://cdn.nlark.com/yuque/__latex/3d1dfe70cdc0d574aa6cf3e228a57166.svg#card=math&code=r_t&id=ZpysX): 动态质押率，![](https://cdn.nlark.com/yuque/__latex/42b491c330f779b03afc61fe6cfe2bfd.svg#card=math&code=r_t%3D%5Cdfrac%7BS_G%7D%7Be_tP%7D&id=MEcjo);
- ![](https://cdn.nlark.com/yuque/__latex/34bf16770508ada6db26cfc5d9361896.svg#card=math&code=r_l&id=xv5rA): 清算质押率，由IP在发起池子时设定，强平质押率的设置区间为![](https://cdn.nlark.com/yuque/__latex/88199f1dc8732dd266b457844551ecc3.svg#card=math&code=%5Cleft%28r_t%2C~300%5C%25%5Cright%5D&id=Z8rZI), 当动态质押率高于清算质押率时，IP将被强制平仓；
- ![](https://cdn.nlark.com/yuque/__latex/c1acbda89618b6c20c01a1000ffd9e9a.svg#card=math&code=R_I&id=b7cji): IP风险率，![](https://cdn.nlark.com/yuque/__latex/c515d70aad6e0390190c10f39e97d700.svg#card=math&code=R_I%3D%5Cdfrac%7Br_t%7D%7Br_l%7D&id=iIFC1), 当IP风险率达到100%，IP将被强制平仓。
## GP相关

- 打新份额，将依据![](https://cdn.nlark.com/yuque/__latex/56b0aa196dd1ca7c2c5b824f6e2afaae.svg#card=math&code=D%2A%5Csqrt%7BI%7D&id=xtMCs)进行分配，其中![](https://cdn.nlark.com/yuque/__latex/f623e75af30e62bbd73d6df5b50bb7b5.svg#card=math&code=D&id=FzmGW)为GP锁仓的DGT数量，![](https://cdn.nlark.com/yuque/__latex/dd7536794b63bf90eccfd37f9b147d7f.svg#card=math&code=I&id=MObym)为投资额；
- GP容量：基金池可募（GP）资金上限；
- GP杠杆率：以本位币计价，![](https://cdn.nlark.com/yuque/__latex/95a72ad3e1356c325a99a1cd8f17dfe5.svg#card=math&code=L_g%3D%5Cdfrac%7BB_g%2BV_l%7D%7BB_g%0A%7D&id=SnGlB), 其中![](https://cdn.nlark.com/yuque/__latex/b3dfaeed011f0f4cecb6d1467ce29eed.svg#card=math&code=L_g&id=kXS0h)为GP杠杆率 ，![](https://cdn.nlark.com/yuque/__latex/5d3aaa80240fae8762ee2283379e60dc.svg#card=math&code=B_g&id=E83vZ)为GP账面余额，![](https://cdn.nlark.com/yuque/__latex/c5e489fb86d387664e19e83813412f72.svg#card=math&code=V_l&id=QLVxt)为IP配资金额。
## LP相关

- LP在![](https://cdn.nlark.com/yuque/__latex/e358efa489f58062f10dd7316b65649e.svg#card=math&code=t&id=WMMNM)时刻的收益为![](https://cdn.nlark.com/yuque/__latex/f066268f785ac0b6d6ce8949289a5e9a.svg#card=math&code=E%3D%5Cint_%7Bt_0%7D%5Ety_tdt&id=zUOVH), 其中![](https://cdn.nlark.com/yuque/__latex/d81584f09e174eec259979ae8f92eb09.svg#card=math&code=t_0&id=Zz1j3)为LP最近一次买入池子的时间，![](https://cdn.nlark.com/yuque/__latex/a568bf104397bd8311073893dff24222.svg#card=math&code=y_t&id=MzStY)为每个时刻的收益，![](https://cdn.nlark.com/yuque/__latex/f2b8904c72155a82c5305af2a10b87c5.svg#card=math&code=y_t%3D%5Cdfrac%7BB_V%7D%7BT-t%7D%5Cdfrac%7BS_%7Bl%7D%7D%7BS_L%7D&id=t26VR), 其中![](https://cdn.nlark.com/yuque/__latex/0b45bb4b95d491cb3e6d10a480b71086.svg#card=math&code=B_V&id=WH067)为准备金余额，![](https://cdn.nlark.com/yuque/__latex/b9ece18c950afbfa6b0fdbfa4ff731d3.svg#card=math&code=T&id=jHRBa)为基金池周期， ![](https://cdn.nlark.com/yuque/__latex/7a86431ac91bdab9c43954a66b60c058.svg#card=math&code=S_l%0A&id=QC8bY)为某位LP在池中的本位币金额。
