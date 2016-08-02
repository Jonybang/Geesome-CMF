<?php
namespace App\Helpers;

use App\Models\DictionaryWord;
use Intervention\Image\ImageManagerStatic as Image;

class FileHelper
{
	static function savePostFile($post, $image, $index) {
		if(!$image)
			return null;
		$relative_path = env('SITE_IMAGES_PATH') . $post->generatePathArray();
		$absolute_path = base_path($relative_path);

		if(!is_dir($absolute_path)){
			\File::makeDirectory($absolute_path, $mode = 0755, true, true);
		}

		$filename = $post->tags_names_str . '_' . $post->id . '_' . $index;

		if(method_exists($image, 'getRealPath')){
			$filename .= '.' . $image->getExtension();
			Image::make($image->getRealPath())->widen(2048)->save($absolute_path . $filename);
		}
		else{
			$filename .= '.' . pathinfo($image)['extension'];
			Image::make($image)->widen(2048)->save($absolute_path . $filename);
		}

		return $relative_path . $filename;
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