<?php
namespace App\Helpers;

use App\DictionaryWord;

class Helper
{
    static function dict($word_name, $context_key = 'default'){
        $dict_word = DictionaryWord::where('key', $word_name)->first();

        if($dict_word)
            return $dict_word->value;
        else
            return '';
    }
}