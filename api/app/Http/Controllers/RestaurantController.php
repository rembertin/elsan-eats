<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CreateRestaurantRequest;
use App\Http\Requests\UpdateRestaurantRequest;
use App\Http\Resources\RestaurantDetailResource;
use App\Http\Resources\RestaurantItemResource;
use App\Models\Restaurant;
use Illuminate\Http\Resources\Json\JsonResource;

final class RestaurantController extends Controller
{
    public function index(): JsonResource
    {
        return RestaurantItemResource::collection(Restaurant::all());
    }

    public function show(Restaurant $restaurant): JsonResource
    {
        return new RestaurantDetailResource($restaurant);
    }

    public function create(CreateRestaurantRequest $request): void
    {
        $restaurant = Restaurant::create($request->validated());
        $restaurant->save();
    }

    public function update(UpdateRestaurantRequest $request, Restaurant $restaurant): void
    {
        $restaurant->update($request->validated());
    }

    public function destroy(Restaurant $restaurant): void
    {
        $restaurant->delete();
    }
}
