---
lang: zh-CN
title: 大数据笔记
---

# 铁科院会堂 大数据课 上课时间

+ 2022年8月22日 周一 9:00-12:00 13:00-17:00
+ 2022年8月23日 周二 9:00-12:00 13:00-17:00



# 课堂记录（8-22 9:00）：

## 数据存储： 分布式存储

+ 离线：HDFS、HBASE、Hive

+ 实时：Kafka

## 数据计算

+ 离线：MapReduce、Spark Core、Flink DataSet API
+ 实时：Storm、Spark Streaming、Flink DataStream API

## 数据仓库搭建

+ 数据源 ——> 数据仓库 ——> 数据集市

+ 数据仓库就是一个数据库

+ Hadoop、Spark、Flink、NoSQL、Kafka都可以看做是数据仓库的一种实现方式

## 事务

+ OLTP：

+ OLAP：

# 大数据核心思想理论

+ GFS（Google File System）：HDFS（Hadoop Distributed File Syetem）

+ MapReduce计算模型：PageRank问题

  ​	启动Yarn：ResourceManager + NodeManagers 

+ BigTable大表：HBase

  ​	关系型数据库：Oracle、MySQL-->关系型模型-->二维表-->遵循范式-->减少数据冗余-->影响查询性能-->行式存储-->insert、update、delete

  ​	大表：把所有的数据存入一张表-->HBase-->列式存储-->selelct

# Hadoop生态圈系统

+ HDFS分布式文件系统
+ HBase列式数据库
+ MapReduce执行引擎（Yarn）
+ 数据分析引擎
  + Hive On MapReduce 支持SQL语句（处理结构化数据）
  + Pig 默认支持PigLatin语句（既可以处理结构化数据，也可处理非结构化数据）
+ 数据采集引擎
  + Sqoop 基于MapReduce
  + Flume 不基于MapReduce
+ 基于WEB统一管理工具HUE
+ 分布式协调服务 ZooKeeper（存储元信息，解决大数据中的单点故障问题）

## 数据分析引擎 Hive

### 分布式协调服务ZooKeeper

+ 存储数据

+ 选举机制

+ 监听机制

+ 分布式锁
## 大数据计算引擎

### Apache Spark

+ 快：基于内存，通过检查点支持容错
+ 易用：支持多重编程语言Scala、Java、SQL、R、Python
+ 及基金
+ 生态圈组成
  + Spark Core 计算引擎，离线计算
    + 1.x访问接口：SparkContext
    + 数据模型：RDD 弹性分布式数据集
  + Spark SQL 数据分析引擎 ，默认支持DSL语言
    + 1.x访问接口：SQLContext
    + 数据模型：DataFrame（表）
  + Spark Streaming 流式计算引擎 
    + 1.x访问接口：StreamingContext
    + 数据模型：DStream 离散流
  + MLlib 机器学习、GraphX图计算
  + 从2.x开始，提供一个统一的访问接口SparkSession
+ 体系架构
  + 服务器端
    + Cluster Manager （Master）负责接收客户端请求，并调度从节点
    + Worker 从节点上资源和任务的管理员
      + Executor进程执行Task，进程数不要超过CPU的核数
  + 客户端
    + Driver Program
      + 核心对象 SparkContext
    + 客户端工具
      + 启动 /root/training/spark/sbin/start-all.sh  访问localhost:8080
      + spark-submit 提交jar包
      + spark-shell 交互式的命令行工具
        + spark/bin/shell
          + 分词测试 sc.textFile("hdfs://localhost:9000/input").flatMap(_.split(" ")).map((_,1)).reduceByKey(_+_).collect
    + RDD数据模型：弹性分布式数据集，由分区组成。每个分区被不同的worker节点处理
      + Transformation算子 延时计算
      + Ation算子   触发计算
      + 特性
        + 依赖关系：可以划分任务的执行阶段Stage，就是为了支持容错（节点掉电挂点）。依赖可以划分为两种不同的类型，窄依赖（map,union,join）和宽依赖(group by, join)
        + 容错机制
          + scala> sc.setCheckpointDir("hdfs://localhost:8080/spark/ckpt")
        + 缓存机制
+ 数据分析引擎Spark SQL
  + 已经被集成在了Spark中
  + 统一的数据访问方式DataFrame（CSV、JSON、Oracle、MySQL等）
  + 支持标准的JDBC和ODBC
  + 兼容Hive
  + 数据模型 DataFrame（表）=Schema（表结构）+RDD（数据）
+ 流式处理引擎Spark Streaming
  + 通过时间的采样间隔，给连续的数据变成不连续的RDD离散流数据，进行流式计算
+ Spark MLlib
  + 大数据机器学习  Apache Mahout和Spark MLlib

### Apache [Flink](https://flink.apache.org)

+ 数据流处理
  + unbounded data streams 无边界的数据流，流式（实时数据）-->DataStream API
  + bounded data streams 有边界的数据流，离线（批处理）-->DataSet API
  + 容错机制
    + Spark 通过 HDFS，RuckDB
    + Flink通过HDFS，Memory，Reduce
+ 生态圈
  + Library + API
    + API
      + 实时计算，无边界的数据流  DataStream API
        + 访问接口：ExecutitionEnvironment
      + 离线计算，有边界的数据流 DataSet API
        + 访问接口：StreamExecutitionEnvironment
    + Library
      + 离线数据分析引擎 Flink Table、FLinkSQL
      + 实时数据分析引擎 Flink Table、FlinkSQL
      + 离线数据机器学习 MLlib （1.10版本以后被Flink从生态圈中移除了）
      + 离线数据图计算 Gelly
      + 实时数据CEP（complex event process 复杂时间处理）
      + 实时数据CDC（change data capture实时数据采集）（读取不同数据库日志，从而捕获到实时数据，如oracle redo，mysql binlog）
  + 核心层（执行引擎）
    + Runtime
  + 平台层（Deploy）
    + Local模式 多用于开发和测试
    + Cluster模式 Standalone | Yarn（flink 运行在yarn之上，推荐使用内存job管理方式运行）
    + 云原生（虚拟化容器） Docker、k8s
+ 测试环境
  + /training/flink/bin/start-cluster.sh
  + http://localhost:8081
  + nc -l -p 1234 监听1234端口
  + bin/flink run examples/steaming/SocketWindowWordCout.jar --port 1234

### 计算引擎对比

+ Flink、Storm、Spark Streaming
+ 推荐Flink，并使用flink on yarn采用内存job管理方式运行

# NoSQL Redis

+ bin
  + redis-benchmark           压力测试工具
  + redis-check-aof              检查AOF文件
  + redis-check-dummp     检查RDB文件
  + redis-check-cli               客户端
  + redis-sentinel                哨兵（HA的解决方案）
  + redis-server                   服务器端
+ conf
  + daemonize no/yes 运行在前台/后台
  + port 6379 运行端口
  + appendonly no/yes 启动/关闭aof持久化
  + appendfilename 'appendonly.aof'
  + appendfsync eyerysec/always/no
+ 持久化
  + 默认使用RDB
  + AOF
+ 集群
  + 主从复制
  + Redis CLuster 数据分布式存储的解决方案（大数据存储的方案）