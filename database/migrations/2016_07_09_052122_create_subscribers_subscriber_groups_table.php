<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubscribersSubscriberGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sbcrbrs_sbcrbr_groups', function (Blueprint $table) {
            $table->integer('subscriber_id')->unsigned()->index();
            $table->foreign('subscriber_id')->references('id')->on('subscribers')->onDelete('cascade');

            $table->integer('subscriber_group_id')->unsigned()->index();
            $table->foreign('subscriber_group_id')->references('id')->on('subscriber_groups')->onDelete('cascade');

            $table->primary(['subscriber_id', 'subscriber_group_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sbcrbrs_sbcrbr_groups');
    }
}
