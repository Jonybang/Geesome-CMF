<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Barryvdh\TranslationManager\Models\Translation;
use Marcelgwerder\ApiHandler\Facades\ApiHandler;
use App\Models\UserActionLog;

class TranslationController extends Controller
{
	/** @var \Barryvdh\TranslationManager\Manager  */
	protected $translation_manager;
	public function __construct(\Barryvdh\TranslationManager\Manager $translation_manager)
	{
		$this->translation_manager = $translation_manager;
	}

    public function index(Request $request){
		$query = Translation::query();
		$data = $request->all();

		$this->translation_manager->importTranslations();

		return ApiHandler::parseMultiple($query, ['id', 'locale', 'group', 'key', 'value'], $data)->getResponse();
	}

	public function show($translation_key, Request $request){
		$query = [];
		if(is_numeric($translation_key)){
			$query['id'] = $translation_key;
		}
		else{
			$query['key'] = $translation_key;
			$query = array_merge($query, $request->all());
		}

		$this->translation_manager->importTranslations();

		return Translation::where($query)->first();
	}

	public function store(Request $request){
		$data = $request->only(['status', 'locale', 'group', 'key', 'value']);

		if(!isset($data['status']))
			$data['status'] = 0;

		$obj = Translation::create($data);

		UserActionLog::saveAction($obj, "create");

		$path_to_locale = base_path('resources/lang/' . $data['locale']);
		if(!is_dir($path_to_locale))
			mkdir($path_to_locale, 0755, true);

		$this->translation_manager->exportTranslations($request->group);

		return $obj;
	}

	public function update($translation_key, Request $request){
		$obj = $this->show($translation_key, $request);

		$data = $request->only(['status', 'locale', 'group', 'key', 'value']);
		$is_saved = $obj->update($data);

		$path_to_locale = base_path('resources/lang/' . $data['locale']);
		if(!is_dir($path_to_locale))
			mkdir($path_to_locale, 0755, true);

		if($is_saved)
			$this->translation_manager->exportTranslations($request->group);

		return $obj;
	}

	public function destroy($translation_key, Request $request)
	{
		$obj = $this->show($translation_key, $request);
		$is_destroyed = Translation::destroy($obj->id);

		if ($is_destroyed){
			UserActionLog::saveAction($obj, "destroy");
			$this->translation_manager->exportTranslations($request->group);
		}

		return $is_destroyed;
	}

	public function getGroups(){
		return Translation::groupBy('group')->pluck('group');
	}

	public function getLocales(){
		return Translation::groupBy('locale')->pluck('locale');
	}
	public function exportAll(){
		$groups = $this->getGroups();
		foreach($groups as $group){
			$this->translation_manager->exportTranslations($group);
		}
	}
	public function importAll(){
		$this->translation_manager->importTranslations(true);
	}
}
