<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new \App\User();
        $user -> name = 'User';
        $user -> password = bcrypt('123');
        $user -> email = 'user@user.com';
    }
}
