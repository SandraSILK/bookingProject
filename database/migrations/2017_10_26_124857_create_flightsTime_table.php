<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlightsTimeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flightsTime', function (Blueprint $table) {
            $table->increments('key');
            $table->string('fromWhere');
            $table->string('toWhere');
            $table->string('depTime');
            $table->string('depHours');
            $table->string('arrHours');
            $table->integer('price');
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
        Schema::dropIfExists('flightsTime');
    }
}
