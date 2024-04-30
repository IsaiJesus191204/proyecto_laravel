<?php

use Illuminate\Database\Seeder;
use App\Models\Tema;


class TemaSeeder extends Seeder
{

     public function run()

     {
          Tema::create(['nombre' => 'amor']);
     }
}
