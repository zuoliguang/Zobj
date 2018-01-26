<?php
// if( !array_key_exists('HTTP_REFERER', $_SERVER) ) exit('No direct script access allowed');

$root = $_SERVER['DOCUMENT_ROOT'];
if( !$root ) exit("ERROR: Root filesystem directory not set in FileTree.php");

$postDir = rawurldecode($root.(isset($_POST['dir']) ? $_POST['dir'] : null ));
$checkbox = ( isset($_POST['multiSelect']) && $_POST['multiSelect'] == 'true' ) ? "<input type='checkbox' />" : null;
$onlyFolders = ( isset($_POST['onlyFolders']) && $_POST['onlyFolders'] == 'true' ) ? true : false;
$onlyFiles = ( isset($_POST['onlyFiles']) && $_POST['onlyFiles'] == 'true' ) ? true : false;

$list = false;
if( file_exists($postDir) ) {
	$files		= scandir($postDir); // 指定文件夹中文件列表
	$returnDir	= substr($postDir, strlen($root)); // 指定文件夹目录
	natcasesort($files);

	$list = [];
	if( count($files) > 2 ) { // 2个文件夹默认成员 . and ..
		$directory  = [];
		$filelist  	= [];
		foreach( $files as $file ) {
			$htmlRel	= htmlentities($returnDir . $file,ENT_QUOTES);
			$htmlName	= htmlentities($file);
			$ext		= preg_replace('/^.*\./', '', $file);
			if( file_exists($postDir . $file) && $file != '.' && $file != '..' ) {
				if( is_dir($postDir . $file) && (!$onlyFiles || $onlyFolders) )
					$directory[] = $htmlName;
				else if (!$onlyFolders || $onlyFiles)
					$filelist[] = $htmlName;
			}
		}
		$list['directory'] = $directory;
		$list['files'] = $filelist;
	}
}

var_dump($list);