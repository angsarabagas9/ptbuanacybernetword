'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/logo.png"
                  alt="PT BUANA CYBER NETWORK Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-green-800">PT BUANA CYBER NETWORK</h1>
                <p className="text-xs text-gray-600">Perdagangan Besar Binatang Hidup</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-green-600 font-medium">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white py-12 px-4 border-b border-green-100">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-green-700">PT BUANA CYBER NETWORK</span>
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di <strong>PT BUANA CYBER NETWORK</strong>. Kami sangat menghargai privasi Anda 
                dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana 
                kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan 
                layanan perdagangan hewan hidup kami.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                Kebijakan Privasi ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Database className="w-6 h-6 mr-2" />
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nama lengkap dan identitas resmi</li>
                  <li>Alamat lengkap dan kode pos</li>
                  <li>Nomor telepon dan email</li>
                  <li>Informasi pembayaran dan faktur</li>
                  <li>Data perusahaan (jika applicable)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Bisnis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Jenis dan jumlah hewan yang dibeli/dijual</li>
                  <li>Riwayat transaksi perdagangan</li>
                  <li>Preferensi produk dan layanan</li>
                  <li>Informasi logistik dan pengiriman</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Alamat IP dan informasi perangkat</li>
                  <li>Data browser dan sistem operasi</li>
                  <li>Cookies dan data pelacakan</li>
                  <li>Interaksi dengan website kami</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami menggunakan informasi yang kami kumpulkan untuk tujuan-tujuan berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Layanan Pelanggan:</strong> Memproses pesanan, mengelola akun, dan memberikan dukungan teknis</li>
                <li><strong>Transaksi Bisnis:</strong> Menyelesaikan pembayaran, pengiriman, dan dokumentasi perdagangan</li>
                <li><strong>Personalisasi:</strong> Menyesuaikan layanan sesuai kebutuhan spesifik Anda</li>
                <li><strong>Komunikasi:</strong> Mengirimkan informasi produk, penawaran khusus, dan update layanan</li>
                <li><strong>Keamanan:</strong> Melindungi transaksi dan mencegah aktivitas penipuan</li>
                <li><strong>Perbaikan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan kami</li>
                <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban regulasi perdagangan hewan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center">
                <Lock className="w-6 h-6 mr-2" />
                Keamanan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                <strong>PT BUANA CYBER NETWORK</strong> berkomitmen untuk melindungi informasi pribadi Anda 
                dengan menerapkan langkah-langkah keamanan yang ketat:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke informasi pribadi hanya untuk staf yang berwenang</li>
                <li>Firewall dan sistem keamanan canggih</li>
                <li>Backup data teratur dan aman</li>
                <li>Audit keamanan berkala</li>
                <li>Kepatuhan terhadap standar keamanan industri</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Berbagi Informasi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                untuk tujuan pemasaran. Kami hanya akan membagikan informasi Anda dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Partner Layanan:</strong> Penyedia layanan pengiriman, pembayaran, dan logistik</li>
                <li><strong>Otoritas Hukum:</strong> Saat diwajibkan oleh hukum atau regulasi yang berlaku</li>
                <li><strong>Partner Bisnis:</strong> Dengan persetujuan Anda untuk tujuan transaksi spesifik</li>
                <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Hak Anda sebagai Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna layanan <strong>PT BUANA CYBER NETWORK</strong>, Anda memiliki hak-hak berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Koreksi:</strong> Memperbaiki informasi yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi dalam kondisi tertentu</li>
                <li><strong>Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                <li><strong>Penolakan:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Kebijakan Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                <li><strong>Cookies Performa:</strong> Membantu kami memahami cara penggunaan website</li>
                <li><strong>Cookies Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                <li><strong>Cookies Pemasaran:</strong> Menampilkan iklan yang relevan (dengan persetujuan)</li>
              </ul>
              <p className="text-gray-700">
                Anda dapat mengelola preferensi cookies melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Jika Anda memiliki pertanyaan atau kekhawatiran mengenai Kebijakan Privasi ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-green-50 p-4 rounded-lg space-y-2">
                <p className="text-gray-700">
                  <strong>PT BUANA CYBER NETWORK</strong><br/>
                  Persada raya Blok A 11 No 36<br/>
                  Desa/Kelurahan Cibarusah Kota<br/>
                  Kec. Cibarusah, Kab. Bekasi<br/>
                  Provinsi Jawa Barat 17340
                </p>
                <p className="text-gray-700">
                  📞 082312042902<br/>
                  📧 privacy@buanacybernetwork.com
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diinformasikan melalui website atau email. Penggunaan lanjutan layanan kami setelah 
                perubahan menunjukkan persetujuan Anda terhadap kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PT BUANA CYBER NETWORK</h3>
              <p className="text-green-100">
                Perusahaan terpercaya dalam bidang perdagangan besar binatang hidup 
                dengan komitmen terhadap kualitas dan kesejahteraan hewan.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-green-100 hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/privacy" className="text-green-100 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-green-100 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-green-100">
                <p>📍 Cibarusah, Bekasi, Jawa Barat 17340</p>
                <p>📞 082312042902</p>
                <p>📧 info@buanacybernetwork.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
            <p>&copy; 2024 PT BUANA CYBER NETWORK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}