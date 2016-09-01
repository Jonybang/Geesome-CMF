<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEntityTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entity_translations', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('entity_id')->unsigned();
            $table->string('entity_type');

            $table->string('hash_key');
            $table->string('locale');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('entity_translations');
    }
}
