<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTemplatesSubFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('templates_sub_fields', function (Blueprint $table) {
            $table->integer('template_id')->unsigned()->index();
            $table->foreign('template_id')->references('id')->on('templates');

            $table->integer('sub_field_id')->unsigned()->index();
            $table->foreign('sub_field_id')->references('id')->on('sub_fields');

            $table->primary(['template_id', 'sub_field_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('templates_sub_fields');
    }
}
