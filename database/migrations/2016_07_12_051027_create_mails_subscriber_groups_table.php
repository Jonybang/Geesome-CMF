<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMailsSubscriberGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mails_subscriber_groups', function (Blueprint $table) {
            $table->integer('sent_mail_id')->unsigned()->index();
            $table->foreign('sent_mail_id')->references('id')->on('sent_mails');

            $table->integer('subscriber_group_id')->unsigned()->index();
            $table->foreign('subscriber_group_id')->references('id')->on('subscriber_groups');

            $table->primary(['sent_mail_id', 'subscriber_group_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('mails_subscriber_groups');
    }
}
