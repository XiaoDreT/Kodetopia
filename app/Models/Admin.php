<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $primaryKey = 'admin_id';
    protected $fillable = ['nama', 'email', 'no_hp'];

    public function pesanan()
    {
        return $this->hasMany(Pesanan::class, 'admin_id');
    }
}
