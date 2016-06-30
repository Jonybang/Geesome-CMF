<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSubFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_fields', function (Blueprint $table) {
            $table->increments('id');

            $table->string('name');
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->json('config')->nullable();
            $table->text('default_value')->nullable();

            $table->integer('sub_field_type_id')->unsigned();
            $table->foreign('sub_field_type_id')->references('id')->on('sub_field_types');

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
        Schema::drop('sub_fields');
    }
}
