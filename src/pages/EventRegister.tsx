import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, ArrowLeft } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import axios from 'axios';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: "Nama harus berisi minimal 2 karakter" }),
  email: z.string().email({ message: "Format email tidak valid" }),
  organization: z.string().optional(),
  phone: z.string().min(8, { message: "Nomor telepon harus berisi minimal 8 karakter" }),
  comments: z.string().optional(),
});

const API_URL = 'http://localhost:5000/api';

const EventRegister = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const upcomingEvent = {
    title: "MICO HIMTECH 2025",
    date: "Upcoming - 2025",
    time: "Upcoming",
    location: "Upcoming",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      phone: "",
      comments: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API_URL}/register`, values);
      
      console.log('Registration response:', response.data);
      toast.success("Registrasi berhasil! Kami akan mengirimkan detail lebih lanjut ke email Anda.");
      
      // Arahkan kembali ke halaman utama setelah registrasi berhasil
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Registration error:', error);
      toast.error("Gagal mendaftar. Silakan coba lagi nanti.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-6 hover:bg-transparent group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Beranda
          </Button>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Event Details Card */}
            <Card className="bg-gradient-to-br from-himtech-blue/5 to-himtech-lightBlue/5 border-none shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl text-himtech-blue">
                  {upcomingEvent.title}
                </CardTitle>
                <CardDescription>
                  Event Details
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-himtech-lightBlue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Date</p>
                      <p className="text-himtech-gray">{upcomingEvent.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-himtech-lightBlue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Time</p>
                      <p className="text-himtech-gray">{upcomingEvent.time}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-himtech-lightBlue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-himtech-gray">{upcomingEvent.location}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <img 
                    src={upcomingEvent.image}
                    alt={upcomingEvent.title}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </CardContent>
            </Card>
            
            {/* Registration Form */}
            <div>
              <h2 className="text-2xl font-bold text-himtech-blue mb-6">Registration Form</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="Masukkan nama lengkap Anda" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@contoh.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="organization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asal Sekolah</FormLabel>
                        <FormControl>
                          <Input placeholder="Nama Sekolah" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nomor Telepon</FormLabel>
                        <FormControl>
                          <Input placeholder="Nomor telepon aktif" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Komentar Tambahan (opsional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Pertanyaan atau kebutuhan khusus lainnya" 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-himtech-blue hover:bg-himtech-blue/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Memproses..." : "Daftar Sekarang"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventRegister;