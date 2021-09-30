---
id: The-Economics-of-CDO
title: CDO机制的经济学原理
sidebar_label: CDO机制的经济学原理
---

## CDO：一个基于分级投资的流动性解决方案
DeFi依靠流动性运行，然而当前市场上流动性的获取和保有成本很高，而且往往不具备时间跨度较长的可持续性。DeepGo创新提出CDO机制，给三类给三类用户提供定制服务：

- 建池发起者 (IP)：主要面向有流动性需求的项目方，IP通过质押己方项目代币，获得流动性和现金流收入。
- 重要参与者 (GP)：主要面向偏好风险投资的投资人，GP通过提供准备金和本金保障，从而获得配资以博取更大收益，以及项目方质押资产兜底。
- 固定收益者 (LP)：主要面向偏好稳健投资的投资人，LP提供资金，本金由GP保障，同时收获GP提供的稳定收益。
## CDO流程
### · 初创期

- IP申请建池，在审核通过后，质押项目代币，设定基础参数和质押参数，从而发起基金池，持有相同项目代币的其他IP可以通过DGT报价竞拍该基金池的发起权。
### · 建池/募资期

- IP可以追加质押，提高基金池规模上限；
- GP缴纳少量申购费认购基金池份额，GP缴纳的申购费将会形成一个奖金池（IP和LP可以在之后从中提取收入），此外GP的打新份额与其DGT锁仓额以及投资额有关；
- LP投入资金直接进入资金池。
### · 进行期

- IP可以继续追加质押，同时可以从奖金池提取收益，IP最多可以提取其中的80%；
- GP投入的本金将和LP的本金进行配资，然后进入DEX为IP项目通过流动性，GP随时可以自由进出基金池，也可以切换不同投资模式；
- LP随时可以自由进出基金池，或是切换投资模式，同时可以提取投资收益。
### · 清算期

- IP取回质押项目Token；
- GP出售已购入项目token，并归还LP本金；
- LP取回本金及累计收益。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/22535237/1632967147312-e15753d5-02ac-4506-ae5c-5d45e39ea500.png#clientId=u8d7bde25-005b-4&from=paste&height=486&id=u602dbdc6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=657&originWidth=1021&originalType=binary&ratio=1&size=102196&status=done&style=none&taskId=uc867e33a-7b9e-4ff4-b11a-b4f2090f71a&width=754.5)
### · 清算机制
基金池运行期间，项目token价格下降触及IP平仓线，则IP质押项目token全部赔付于GP，GP归还LP资金后取回剩余项目token；若项目token价格下降触及GP平仓线，则GP强制平仓，并归还LP本金。
## 良性策展
通过质押与风险分级，CDO实际上在三类用户间构建了一种牢固的价值绑定，从而避免了用户交互时出现单方面短期作恶的情况，同时通过IP的项目价值和流动性、GP的超额收益与声誉积累，LP的稳健收益与风险控制三者之间的双向反馈循环，达成了一种良性策展机制，从而通过群体智慧筛选优质资产。
![](https://cdn.nlark.com/yuque/0/2021/png/22535237/1632621596746-f91831bb-c4ee-4384-b711-7bc19923df16.png?x-oss-process=image%2Fresize%2Cw_752%2Climit_0#from=url&height=357&id=pZFrg&margin=%5Bobject%20Object%5D&originHeight=361&originWidth=752&originalType=binary&ratio=1&status=done&style=none&width=743)
项目升值吸引更多GP加入基金池，不断提升奖金池。稳健收益提高又吸引更多LP加入，提升GP杠杆率，同时提高IP项目token在DEX中流动性，加速项目发展，从而实现正向循环；项目贬值则类似会产生负向循环。
![image.png](https://cdn.nlark.com/yuque/0/2021/png/22535237/1632970066677-f1f1d47c-5c04-4375-bef5-25096fcbdc91.png#clientId=u8d7bde25-005b-4&from=paste&height=498&id=u7d705019&margin=%5Bobject%20Object%5D&name=image.png&originHeight=331&originWidth=495&originalType=binary&ratio=1&size=36809&status=done&style=none&taskId=u5453797f-e702-4bec-9c3c-5b67b2c1d6c&width=744.5)




