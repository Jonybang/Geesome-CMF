<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSentMailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sent_mails', function (Blueprint $table) {
            $table->increments('id');

            $table->string('result_title')->nullable();
            $table->text('result_content');

            $table->json('result_addresses');
            $table->json('sub_data');

            $table->integer('mail_template_id')->unsigned();
            $table->foreign('mail_template_id')->references('id')->on('mail_templates')->onDelete('cascade');

            $table->integer('page_id')->unsigned()->nullable();
            $table->foreign('page_id')->references('id')->on('pages')->onDelete('set null');

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
        Schema::drop('sent_mails');
    }
}
