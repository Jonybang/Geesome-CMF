<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Debug\Exception\FatalThrowableError;
use Illuminate\Support\Facades\Blade;

class MailTemplate extends Model
{
    protected $table = 'mail_templates';

    protected $fillable = [
        'key',
        'name',
        'title',
        'content'
    ];

    public function renderTitle($data){
        return self::render(Blade::compileString($this->title), $data);

    }
    public function renderContent($data){
        return self::render(Blade::compileString($this->content), $data);
    }

    static function render($__php, $__data)
    {
        $obLevel = ob_get_level();
        ob_start();
        extract($__data, EXTR_SKIP);
        try {
            eval('?' . '>' . $__php);
        } catch (\Exception $e) {
            while (ob_get_level() > $obLevel) ob_end_clean();
            throw $e;
        } catch (\Throwable $e) {
            while (ob_get_level() > $obLevel) ob_end_clean();
            throw new FatalThrowableError($e);
        }
        return ob_get_clean();
    }
}
