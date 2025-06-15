<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;
use App\Models\Admin;

class Pesanan extends Model
{
    protected $primaryKey = 'pesanan_id';
    protected $fillable = [
        'customer_id', 'layanan', 'pesan', 'tanggal_submit', 'admin_id', 'is_confirm'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function admin()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }
}
