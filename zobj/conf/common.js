/*
* @Author: xiyou_zlg
* @Date:   2017-05-23 12:21:10
* @Last Modified by:   xiyou_zlg
* @Last Modified time: 2017-09-26 11:39:56
*/

var now = new Date();
/* 获取年 */
function getYear(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getFullYear();
    }
    return now.getFullYear();
}

/* 获取月 */
function getMonth(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getMonth();
    }
    return now.getMonth();
}


/* 获取天 */
function getDay(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getDate();
    }
    return now.getDate();
}

/* 获取小时 */
function getHour(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getHours();
    }
    return now.getHours();
}

/* 获取分钟 */
function getMinute(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getMinutes();
    }
    return now.getMinutes();
}

/* 获取秒 */
function getSecond(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getSeconds();
    }
    return now.getSeconds();
}

/* 获取毫秒 */
function getMilliseconds(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getMilliseconds();
    }
    return now.getMilliseconds();
}

/* 获取当前星期 */
function getWeekDay(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
    if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	return newDate.getDay();
    }
    return now.getDay();
}

/* 是否是闰年 */
function isLeapYear(unixTimestamp){
	unixTimestamp = unixTimestamp || null;
	var flag = false;
	if (unixTimestamp != null) {
    	var newDate = new Date(unixTimestamp * 1000);
    	var year = newDate.getFullYear();
    } else {
    	var year = now.getFullYear();
    }
    
    if((year % 4 == 0 && year % 100 !=0) || (year % 400 == 0)){
        flag = true;
    }

    return flag;
}

/*-----是否邮箱编码---------------*/
function isEmail(email){
	var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
	if (reg.test(email)) {
		return true;
	}
	return false;
}

/*-----是否手机号码---------------*/
function isTelphone(tel){
	var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
	if (reg.test(tel)) {
		return true;
	}
	return false;
}

/*-----是否电话号码---------------*/
function isPhone(phone){
	var reg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
	if (reg.test(phone)) {
		return true;
	}
	return false;
}

/*-------验证身份证号码-----------*/
function isIDCard(ID){
	var reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i;
	if (reg.test(ID)) {
		return true;
	}
	return false;
}

/*-----是否QQ号码---------------*/
function isQQ(qq){
	var reg = /^[1-9][0-9]{4,9}$/;
	if (reg.test(qq)) {
		return true;
	}
	return false;
}

/*-----是否中文---------------*/
function isZh(str){
	var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
	if (reg.test(str)) {
		return false;
	}
	return true;
}

/*-----去掉字符串前后的空格----*/
function trimAll(str){
	return str.replace(/(^\s*)|(\s*$)/g, '');
}

/*------去掉字符串前的空格-----*/
function trimLeft(str){
	return str.replace(/^\s*/g,'');
}

/*------去掉字符串后的空格------------*/
function trimRight(str){
	return str.replace(/\s*$/,'');
}

/*------忽略大小写判断字符串是否相同--------------*/
function isEqualsIgnorecase(str1, str2){
	if(str1.toUpperCase() == str2.toUpperCase()) {
        return true;
    }
    return false;
}

/*---------判断是否为空------------------*/
function isEmpty(str){
	if ( str == null || typeof(str) == 'undefined' || (typeof(str) == 'string' && str == '' && str != 'undefined') ) {
		return true;
	} else {
		return false;
	}
}

/*---------字符串截取后面加入省略号----------------*/
function interceptString(str, len){
	if (str.length > len) {
		return str.substring(0, len) + '...';
	} else {
		return str;
	}
}

