<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KonsultasiController;

Route::post('/store-order', [KonsultasiController::class, 'store']);
