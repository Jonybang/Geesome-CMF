<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDictionaryWordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dictionary_words', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('value')->nullable();

            $table->integer('dictionary_id')->unsigned();
            $table->foreign('dictionary_id')->references('id')->on('dictionaries');

            $table->integer('context_id')->unsigned();
            $table->foreign('context_id')->references('id')->on('contexts');

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
        Schema::drop('dictionary_words');
    }
}
