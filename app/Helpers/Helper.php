<?php
namespace App\Helpers;

use App\Models\DictionaryWord;

class Helper
{
	public static function localeUrl($page, $locale = null){
		return \LaravelLocalization::getLocalizedURL($locale ? $locale : \LaravelLocalization::getCurrentLocale(), $page->page_uri ? $page->page_uri : '/');
	}
}