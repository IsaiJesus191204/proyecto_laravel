<?php

use Illuminate\Database\Seeder;
use App\Models\Roles;


class RolesSeeder extends Seeder
{

     public function run()

     {
          Roles::create(['nombre' => 'usuario']);
     }
}
