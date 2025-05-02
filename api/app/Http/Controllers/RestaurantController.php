<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\CreateRestaurantRequest;
use App\Http\Requests\UpdateRestaurantRequest;
use App\Http\Resources\Restaurant\RestaurantDetailResource;
use App\Http\Resources\Restaurant\RestaurantItemResource;
use App\Models\Category;
use App\Models\Restaurant;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Response;

final class RestaurantController extends Controller
{
    public function index(): JsonResource
    {
        return RestaurantItemResource::collection(Restaurant::with('category')->get());
    }

    public function show(Restaurant $restaurant): JsonResource
    {
        return new RestaurantDetailResource($restaurant);
    }

    public function store(CreateRestaurantRequest $request): JsonResponse
    {
        $restaurant = new Restaurant($request->validated());
        $restaurant->category()->associate(Category::find($request->categoryId));
        $restaurant->save();

        return Response::json(['id' => $restaurant->id]);
    }

    public function update(UpdateRestaurantRequest $request, Restaurant $restaurant): void
    {
        $restaurant->fill($request->validated());
        $restaurant->category()->associate(Category::find($request->categoryId));
        $restaurant->save();
    }

    public function destroy(Restaurant $restaurant): void
    {
        $restaurant->delete();
    }
}
