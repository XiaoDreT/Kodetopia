<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Pesanan extends Model
{
    use HasFactory;

    // Tentukan nama tabel yang sesuai
    protected $table = 'pesanan';  // Gunakan nama tabel yang benar (misalnya 'pesanan')

    // Tentukan primary key yang sesuai
    protected $primaryKey = 'pesanan_id';  

    // Kolom yang diizinkan untuk penugasan massal
    protected $fillable = [
        'customer_id',
        'layanan',
        'pesan',
        'tanggal_submit',
        'admin_id',
        'is_confirm',
    ];

    // Set default value untuk tanggal_submit sebelum disimpan
    protected static function booted()
    {
        static::creating(function ($pesanan) {
            if (!$pesanan->tanggal_submit) {
                $pesanan->tanggal_submit = Carbon::now();  // Set tanggal_submit jika belum ada nilai
            }
        });
    }

    public function customer() {
        return $this->belongsTo(Customer::class, 'customer_id');
    }

    public function admin() {
        return $this->belongsTo(Admin::class);
    }
}
