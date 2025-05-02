<?php

use App\Http\Controllers\DishController;
use Illuminate\Support\Facades\Route;

Route::resource('categories', App\Http\Controllers\CategoryController::class)->only(['index']);
Route::resource('restaurants', App\Http\Controllers\RestaurantController::class);
Route::prefix('restaurants/{restaurant}')
    ->group(function () {
        Route::resource('dishes', DishController::class);
    })
    ->scopeBindings();
