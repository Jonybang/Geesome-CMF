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
            $table->boolean('is_hide')->default(false);
            $table->boolean('is_main')->default(false);

            $table->text('copyrights')->nullable();

            $table->integer('posts_count')->default(0);

            $table->string('icon')->nullable();
            $table->string('image')->nullable();

            $table->integer('parent_tag_id')->unsigned()->nullable();
            $table->foreign('parent_tag_id')->references('id')->on('tags');

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
