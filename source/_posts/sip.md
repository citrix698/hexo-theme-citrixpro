---
title: Sip协议介绍
author: CitrixWu
date: 2016-8-27
tags: [Sip协议,互联网通讯]
categories: 随笔
cdn: 'header-off' 
header-img: "http://ol56no7p4.bkt.clouddn.com/essay2.jpg"
catalog: true
---

## 什么是SIP?
> SIP is an application-layer control protocol that can establish, modify, and terminate multimedia sessions (conferences) such as Internet telephony calls.
<!--more-->
## SIP 协议的特点

- 文本协议：易于实现，可读性强，结构灵活，易于扩展。
- 中性的底层传输协议：同时支持TCP和UDP，推荐使用UDP传输。
- 呼叫和媒体控制信息同时传送：利用SDP协议(Session Description Protocol)传送媒体信息。

## SIP 分布式网络结构
![SIP分布式网络结构图][1]


  
## SIP 消息
### 1.SIP消息格式
    SIP消息＝起始行
		*消息头部（1个或多个）
		CRLF（空行）
		[消息体]
### 2.SIP 消息头格式
SIP 的格式和语法与==HTTP==基本相同.
一个SIP 消息头的`例子`:
```
-----------------------------------------------------------------
                        SIP Header
-----------------------------------------------------------------
INVITE sip:5120@192.168.36.180 SIP/2.0
Via: SIP/2.0/UDP 192.168.6.21:5060
From: sip:5121@192.168.6.21
To: <sip:5120@192.168.36.180>
Call-ID: c2943000-e0563-2a1ce-2e323931@192.168.6.21
CSeq: 100 INVITE
Expires: 180
User-Agent: Cisco IP Phone/ Rev. 1/ SIP enabled
Accept: application/sdp
Contact: sip:5121@192.168.6.21:5060
Content-Type: application/sdp
```

### 3.SIP 主要头部字段
- From：指示请求的发起者 
	From：显示名<SIP-URL>；tag＝xxxx
- To：指明请求的接收者 
	To：显示名<SIP-URL>；tag＝xxxx
- CALL-ID：用以标识一个特定的邀请或标识某一客户的所有登记 
	Call-ID：本地标识@主机
- Cseq：命令序号，相同呼叫中的不同请求消息的cseq递加1，重发请求的序号不变，ACK和CANCEL请求的序号与对应的INVITE相同
Cseq:100 INVITE
- Via：Via字段用于指示请求经历的路径，确保响应和请求消息选择相同的路径
Via：发送协议发送方；隐藏参数；生存期参数；多播地址参数；接收方标记；分支参数
- Contact：用于重定向，指出以后和用户通信的地址
Contact：地址；q参数；动作参数；失效参数；扩展属性 

## 建立通信的过程
使用SIP建立通信通常需要5个步骤:
1. 用户代理进行注册、初始化和定位.
2. 决定在呼叫中要使用的媒体类型.
3. 建立呼叫.
4. 改变呼叫，例如呼叫转移，SDP重新协商.
5. 终结呼叫.

## 简单的SIP呼叫建立和拆除过程
![过程示意图][2]


  [1]: http://7xwui9.com1.z0.glb.clouddn.com/link-20160727153422.png "SIP分布式网络结构图"
  [2]: http://7xwui9.com1.z0.glb.clouddn.com/link-20160727160747.png "过程示意图"
  
