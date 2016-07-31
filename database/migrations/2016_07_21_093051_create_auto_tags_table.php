<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAutoTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auto_tags', function (Blueprint $table) {
            $table->integer('tag_id')->unsigned()->index();
            $table->foreign('tag_id')->references('id')->on('tags');

            $table->integer('sub_tag_id')->unsigned()->index();
            $table->foreign('sub_tag_id')->references('id')->on('tags');

            $table->integer('auto_tag_id')->unsigned()->index();
            $table->foreign('auto_tag_id')->references('id')->on('tags');

            $table->primary(['tag_id', 'auto_tag_id']);

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
        Schema::drop('auto_tags');
    }
}
