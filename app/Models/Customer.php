<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $primaryKey = 'customer_id';
    protected $fillable = ['nama', 'email', 'no_hp'];

    public function pesanan()
    {
        return $this->hasMany(Pesanan::class, 'customer_id');
    }
}
