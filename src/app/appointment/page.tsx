"use client";

import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AppointmentPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-teal-100 text-teal-600 rounded-2xl mb-6">
                <Calendar className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t.nav.appointment}
            </h1>
            <p className="text-xl text-slate-600">
               Schedule a free consultation with our bilingual experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Info Card */}
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Office Hours</CardTitle>
                        <CardDescription>Walk-ins welcome, appointments preferred.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-3 text-slate-600">
                            <Clock className="w-5 h-5 mt-1 text-teal-500" />
                            <div>
                                <p className="font-semibold text-slate-900">Mon - Fri</p>
                                <p>9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 text-slate-600">
                            <Clock className="w-5 h-5 mt-1 text-teal-500" />
                            <div>
                                <p className="font-semibold text-slate-900">Saturday</p>
                                <p>10:00 AM - 2:00 PM</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <div className="flex items-start gap-3 text-slate-600">
                            <MapPin className="w-5 h-5 mt-1 text-teal-500" />
                            <div>
                                <p className="font-semibold text-slate-900">RenRen Insurance HQ</p>
                                <p>123 Insurance Blvd, Suite 100</p>
                                <p>San Francisco, CA 94105</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Form Card */}
            <Card className="h-fit">
                <CardHeader>
                    <CardTitle>Request an Appointment</CardTitle>
                    <CardDescription>We&apos;ll confirm your time via email shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="service">Service Needed</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="health">Health Insurance</SelectItem>
                                    <SelectItem value="auto">Auto & Home</SelectItem>
                                    <SelectItem value="business">Business</SelectItem>
                                    <SelectItem value="other">Other Inquiry</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                            Schedule Now
                        </Button>
                    </form>
                </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
