<?php
require __DIR__.'/vendor/autoload.php';

use PhpBoot\Application;

$app = Application::createByDefault(__DIR__.'/config/config.php');
//扫描 Controllers 目录，自动加载所有路由
$app->loadRoutesFromPath( __DIR__.'/App/Controllers', 'App\Controllers');
//执行请求
$app->dispatch();