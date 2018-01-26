<?php

/**
* 数据库
*/
class DB
{
	private static $host;
	private static $username;
	private static $password;
	private static $datebase;
	public $db;
	function __construct()
	{
		require_once APPPATH . "/config/" . __CLASS__ . ".config.php";
		self::$host = $config['host'];
		self::$username = $config['username'];
		self::$password = $config['password'];
		self::$datebase = $config['datebase'];
		$this->db = new PDO("mysql:host=".self::$host.";dbname=".self::$datebase, self::$username, self::$password);
	}

	public function get($sql="")
	{
		if (empty($sql)) return [];
		$rs = $this->db->query($sql);
		return $rs->fetchAll();
	}
}