<?php
namespace App\Helpers;

use App\Models\DictionaryWord;

class Helper
{
    static function dict($word_name, $context_key = 'default'){
        $dict_word = DictionaryWord::where('key', $word_name)->first();

        if($dict_word)
            return $dict_word->value;
        else
            return '';
    }

    static function isInFavorite($post_id){
        return \Auth::user() && \Auth::user()->isInFavorite($post_id) ? 1 : 0;
    }
}