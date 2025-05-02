<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

final class UpdateRestaurantRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'categoryId' => ['required', Rule::exists('categories', 'id')],
        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
