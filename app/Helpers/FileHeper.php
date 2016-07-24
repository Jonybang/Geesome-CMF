<?php
namespace App\Helpers;

use App\Models\DictionaryWord;
use Intervention\Image\ImageManagerStatic as Image;

class FileHelper
{
	static function savePostFile($post, $image, $folder) {
		if(!$image)
			return null;

		$file_container = env('IMAGE_ARCHIVE_PATH');

		$dir_path = $file_container . $folder;

		if(!is_dir($dir_path)){
			\File::makeDirectory($dir_path, $mode = 0755, true, true);
		}

		$filename = $post->tags_names_str . '_' .$post->id;

		$path = $file_container . $folder . $filename;

		if(method_exists($image, 'getRealPath'))
			Image::make($image->getRealPath())->widen(2048)->save($path);
		else
			Image::make($image)->widen(2048)->save($path . '.' . pathinfo($image)['extension']);

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