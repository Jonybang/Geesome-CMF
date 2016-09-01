<?php
namespace App\Helpers;

use App\Models\DictionaryWord;

class Helper
{
	public static function localeUrl($page){
		return \LaravelLocalization::getLocalizedURL(\LaravelLocalization::getCurrentLocale(), $page->page_uri ? $page->page_uri : '/');
	}
}