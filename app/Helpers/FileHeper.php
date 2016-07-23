<?php
namespace App\Helpers;

use App\Models\DictionaryWord;

class FileHelper
{
	static function saveImage($image, $sub_folder=null) {
		$base_folder = 'images';
		$sub_folder = $sub_folder ? $sub_folder : Auth::user()->id;

		if(!self::checkFolders($base_folder, $sub_folder) || !$image)
			return null;

		$filename  = date('U') . '_' . str_random(6) . '.' . $image->getClientOriginalExtension();

		if($sub_folder)
			$path = public_path($base_folder . '/' . $sub_folder . '/'. $filename);
		else
			$path = public_path($base_folder . '/' . $filename);

		Image::make($image->getRealPath())->widen(870)->save($path);
		return $base_folder .'/' . $sub_folder . '/' . $filename;
	}
	static function checkFolders($base_folder, $sub_folder){
		$path = public_path($base_folder);
		if(!$sub_folder){
			return is_dir($path) || mkdir($path, 0755, true);
		} else {
			return is_dir($path  . '/' . $sub_folder) || mkdir($path  . '/' . $sub_folder, 0755, true);
		}
	}
}