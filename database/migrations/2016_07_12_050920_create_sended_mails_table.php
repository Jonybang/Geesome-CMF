<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSendedMailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sended_mails', function (Blueprint $table) {
            $table->increments('id');

            $table->string('result_title')->nullable();
            $table->text('result_content');

            $table->json('result_addresses');
            $table->json('sub_data');

            $table->integer('mail_template_id')->unsigned();
            $table->foreign('mail_template_id')->references('id')->on('mail_templates');

            $table->integer('page_id')->unsigned()->nullable();
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
        Schema::drop('sended_mails');
    }
}
