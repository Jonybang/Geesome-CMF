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

            $table->dateTime('published_on')->nullable();
            $table->dateTime('published_at')->nullable();

            $table->boolean('is_published')->default(false);
            $table->boolean('is_queue')->default(true);
            $table->boolean('is_from_cabinet')->default(false);
            $table->boolean('is_secret')->default(false);
            $table->boolean('is_resolved_nsfw')->default(true);
            $table->boolean('is_resolved_secret')->default(true);
            $table->boolean('is_resolved_tags')->default(true);

            $table->string('alias')->nullable();

            $table->json('attachments')->nullable();

            $table->integer('parent_post_id')->unsigned()->nullable();
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
