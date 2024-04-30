<?php

use Illuminate\Database\Seeder;
use App\Models\Categorias;


class CategoriaSeeder extends Seeder
{

     public function run()

     {
          Categorias::create(['nombre' => 'cat1']);
     }
}
