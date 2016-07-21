<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');

            $table->text('description')->nullable();
            $table->text('copyrights')->nullable();

            $table->integer('posts_count')->default(0);

            $table->integer('tag_type_id')->unsigned()->nullable();
            $table->foreign('tag_type_id')->references('id')->on('tag_types');

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
        Schema::drop('tags');
    }
}
