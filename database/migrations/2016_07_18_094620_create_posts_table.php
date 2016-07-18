<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');

            $table->string('content')->nullable();

            $table->dateTime('published_on')->nullable();
            $table->boolean('published')->default(false);
            $table->boolean('from_cabinet')->default(false);
            $table->boolean('secret')->default(false);

            $table->string('main_attachment')->nullable();
            $table->json('other_attachments')->nullable();

            $table->integer('parent_post_id')->unsigned();
            $table->foreign('parent_post_id')->references('id')->on('posts');

            $table->integer('author_id')->unsigned();
            $table->foreign('author_id')->references('id')->on('users');

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
        Schema::drop('posts');
    }
}
