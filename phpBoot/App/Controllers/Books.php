<?php
namespace App/Controllers;

/**
 * 图书管理接口示例
 *
 * @path /books
 */
class Books
{
   /**
    * 查找图书
    *
    * @route GET /
    *
    * @param string $name  查找书名
    * @param int $offset 结果集偏移 {@v min|0}
    * @param int $limit 返回结果最大条数 {@v max|1000}
    *
    * @return Book[] 图书列表 
    */
   public function findBooks($name, $offset=0, $limit=100)
   {
       return \PhpBoot\model($this->db, Book::class)
           ->where(['name'=>['LIKE'=>"%$name%"]])
           ->limit($offset, $limit)
           ->get();
   }
}