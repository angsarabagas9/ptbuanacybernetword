'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, PawPrint, Shield, Truck } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show success message
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

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
              <a href="#beranda" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-green-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-green-700">PT BUANA CYBER NETWORK</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">
                Perdagangan Besar Binatang Hidup Terpercaya
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Mitra terpercaya dalam perdagangan hewan hidup berkualitas tinggi. 
                Menyediakan berbagai jenis hewan dengan standar kesehatan dan kualitas terbaik.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white">
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                  Lihat Layanan
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/livestock-hero.jpg"
                  alt="Perdagangan Hewan Berkualitas"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-green-700">PT BUANA CYBER NETWORK</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perusahaan terkemuka dalam bidang perdagangan besar binatang hidup dengan komitmen 
              terhadap kualitas dan kesejahteraan hewan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/veterinary-care.jpg"
                    alt="Layanan Kesehatan Hewan"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-green-800">Bergaransi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Semua hewan yang kami perdagangkan dilengkapi dengan jaminan kesehatan 
                  dan sertifikat resmi dari lembaga terkait.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-amber-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/animal-transport.jpg"
                    alt="Layanan Pengiriman Aman"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-amber-800">Pengiriman Aman</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Layanan pengiriman hewan dengan standar kesejahteraan tertinggi 
                  dan armada transportasi khusus.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/livestock-hero.jpg"
                    alt="Kualitas Hewan Terbaik"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-green-800">Kualitas Terbaik</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Hewan berkualitas premium dengan perawatan terbaik dan 
                  monitoring kesehatan berkala.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600">
              Solusi lengkap untuk kebutuhan perdagangan hewan hidup Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-green-800">Perdagangan Hewan Ternak</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sapi, kerbau, kambing, domba dengan kualitas terbaik untuk kebutuhan peternakan dan konsumsi.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-green-800">Hewan Peliharaan Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Berbagai jenis hewan peliharaan dengan ras unggul dan kesehatan terjamin.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-green-800">Konsultasi &amp; Edukasi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Layanan konsultasi mengenai perawatan, pemeliharaan, dan bisnis perdagangan hewan.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-green-700">PT BUANA CYBER NETWORK</span>
            </h2>
            <p className="text-lg text-gray-600">
              Siap melayani kebutuhan perdagangan hewan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-green-800">Informasi Kontak</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-700" />
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-gray-600">
                        Persada raya Blok A 11 No 36, Desa/Kelurahan Cibarusah Kota, 
                        Kec. Cibarusah, Kab. Bekasi, Provinsi Jawa Barat
                      </p>
                      <p className="text-gray-600">Kode Pos: 17340</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-700" />
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-gray-600">082312042902</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-700" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@buanacybernetwork.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-green-800">Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pesan
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Tuliskan pesan Anda..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-700 hover:bg-green-800 text-white">
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 px-4">
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
                <li><a href="#beranda" className="text-green-100 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#tentang" className="text-green-100 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#layanan" className="text-green-100 hover:text-white transition-colors">Layanan</a></li>
                <li><a href="/privacy" className="text-green-100 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-green-100 hover:text-white transition-colors">Terms & Conditions</a></li>
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