<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');

            $table->string('title');
            $table->string('alias')->nullable();
            $table->string('menu_title')->nullable();
            $table->string('sub_title')->nullable();
            $table->text('description')->nullable();
            $table->integer('menu_index')->nullable();

            $table->boolean('is_published')->default(false);
            $table->boolean('is_menu_hide')->default(true);
            $table->boolean('is_deleted')->default(false);
            $table->boolean('is_alias_blocked')->default(false);
            $table->boolean('is_allow_short_alias')->default(false);

            //has no body, but have children(section for children pages for example)
            $table->boolean('is_abstract')->default(false);
            //has body, but is part of parent page(block of page for example)
            $table->boolean('is_part')->default(false);

            $table->integer('parent_page_id')->unsigned()->nullable();
            $table->foreign('parent_page_id')->references('id')->on('pages')->onDelete('cascade');

            $table->integer('author_id')->unsigned()->nullable();
            $table->foreign('author_id')->references('id')->on('users')->onDelete('cascade');

            $table->integer('template_id')->unsigned();
            $table->foreign('template_id')->references('id')->on('templates')->onDelete('cascade');

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
        Schema::drop('pages');
    }
}
