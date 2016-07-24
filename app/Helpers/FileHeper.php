<?php
namespace App\Helpers;

use App\Models\DictionaryWord;
use Intervention\Image\Facades\Image;

class FileHelper
{
	static function savePostFile($post, $image, $folder) {
		if(!$image)
			return null;

		$file_container = '/home/deploy/girls-archive/';

		self::checkFolders($file_container, $folder);

		$filename = $post->tags_names_str . '_' .$post->id;

		$path = $file_container . $folder . '/' . $filename;

		Image::make($image->getRealPath())->widen(2048)->save($path);

		return $path;
	}
	static function checkFolders($container, $path){
		$folders = explode('/', $path);
		$relative_path = '';
		foreach($folders as $folder){
			$relative_path .= $folder . '/';
			$absolute_path  = $container . $relative_path;
			if(!is_dir($absolute_path))
				mkdir($absolute_path, 0755, true);
		}
	}
}