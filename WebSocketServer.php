<?php
require_once '/phpsocket/vendor/autoload.php';

use Workerman\Worker;
use PHPSocketIO\SocketIO;

// 创建socket.io服务端，监听2021端口
$io = new SocketIO(3120);

// 当有客户端连接时打印一行文字
$io->on('connection', function($socket)use($io){
    // 定义chat message事件回调函数
    $socket->on('chatMessage', function($msg)use($io){
        // 触发所有客户端定义的chat message from server事件
        $io->emit('chat message from server', $msg);
    });
});

Worker::runAll();