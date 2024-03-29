---
title: 驱动配置
order: 2
---

## 驱动配置

iMonitorSDK必须带配置文件（iMonitor.scer）才能正常加载。

iMonitor.scer是通过加密签名后的json文件，也是SDK的使用授权文件。SDK默认带的是测试授权，需要正式使用请邮件联系分配一个正式授权。

申请授权的时候，请提前根据需要的能力填写好配置。

## 支持的配置参数

| 字段                     | 类型   | 描述                                                         |
| ------------------------ | ------ | ------------------------------------------------------------ |
| driver_name              | string | 驱动的服务名字                                               |
| driver_port_name         | string | 应用层跟驱动通讯的名字                                       |
| max_session              | int    | 允许多少个客户端同时打开驱动，填0为默认值4个，最多不超过4    |
| enable_unload_driver     | bool   | 是否允许驱动卸载                                             |
| enable_file_monitor      | bool   | 是否允许开启文件监控                                         |
| enable_process_monitor   | bool   | 是否允许开启进程开启                                         |
| enable_reg_monitor       | bool   | 是否允许开启注册表监控                                       |
| enable_socket_monitor    | bool   | 是否允许开启socket监控                                       |
| enable_wfp_monitor       | bool   | 是否允许开启wfp监控                                          |
| enable_self_protect      | bool   | 是否开启子保护（开启了驱动所在目录的进程、文件都会被保护）   |
| enable_self_open_protect | bool   | 是否开启驱动打开自保护（开启了只允许驱动所在目录打开驱动通讯端口） |
| enable_sign_protect      | bool   | 是否根据PE的私有签名开启自保护                               |
| enable_sign_open_protect | bool   | 是否只允许带私有签名的进程打开驱动                           |
| trust_open_path_list     | array  | 字符串数组，允许打开驱动通讯端口的进程路径列表               |
| protect_list             | array  | 对象数组，其他被保护的路径列表（包括进程、文件、注册表）     |
| black_process_name_list  | array  | 禁止启动进程名黑名单                                         |
| black_process_path_list  | array  | 禁止启动进程路径黑名单                                       |
| black_file_name_list     | array  | 禁止创建文件名黑名单                                         |
| black_file_path_list     | array  | 禁止创建文件路径黑名单                                       |
| auto_inject              | object | 是否开启自动注入dll                                          |

## SDK带的默认配置如下

```json
{
  "driver_name": "iMonitorSDKDemo",
  "driver_port_name": "iMonitorSDKDemoPort",

  "max_session": 0,
  "enable_unload_driver": true,

  "enable_file_monitor": true,
  "enable_process_monitor": true,
  "enable_reg_monitor": true,
  "enable_socket_monitor": true,
  "enable_wfp_monitor": true,

  "enable_self_protect": false,
  "enable_self_open_protect": false,
  "enable_sign_protect": false,
  "enable_sign_open_protect": false,
    
  "trust_open_path_list": [],

  "protect_list": [],

  "black_process_name_list": [],
  "black_process_path_list": [],
  "black_file_name_list": [],
  "black_file_path_list": [],

  "auto_inject": {
    "enable": false,
    "wow64": true,
    "dll32": "",
    "dll64": ""
  },

  "end": true
}
```