<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePageSeoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_seo', function (Blueprint $table) {
            $table->increments('id');

            $table->string('title');
            $table->string('description');
            $table->string('keywords');
            $table->string('image');

            $table->integer('page_id')->unsigned();
            $table->foreign('page_id')->references('id')->on('pages');

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
        Schema::drop('page_seo');
    }
}
