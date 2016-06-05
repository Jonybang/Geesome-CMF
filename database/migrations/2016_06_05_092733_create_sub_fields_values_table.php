<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubFieldsValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_fields_values', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('sub_field_id')->unsigned();
            $table->foreign('sub_field_id')->references('id')->on('sub_fields');

            $table->integer('page_id')->unsigned();
            $table->foreign('page_id')->references('id')->on('pages');

            $table->text('value')->nullable();

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
        Schema::drop('sub_fields_values');
    }
}
