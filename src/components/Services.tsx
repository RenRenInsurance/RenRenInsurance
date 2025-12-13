"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Heart, Car, Building2, Users, Plane, ArrowRight, Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: "health",
      title: t.services.healthTitle,
      desc: t.services.healthDesc,
      icon: Heart,
      color: "bg-rose-100 text-rose-600",
      delay: 0.1,
    },
    {
      id: "auto",
      title: t.services.autoHomeTitle,
      desc: t.services.autoHomeDesc,
      icon: Car,
      color: "bg-blue-100 text-blue-600",
      delay: 0.2,
    },
    {
      id: "group",
      title: t.services.groupHealthTitle,
      desc: t.services.groupHealthDesc,
      icon: Users,
      color: "bg-emerald-100 text-emerald-600",
      delay: 0.3,
    },
    {
      id: "life",
      title: t.services.lifeTitle,
      desc: t.services.lifeDesc,
      icon: Heart, // Reusing Heart or could import a Shield/Lifebuoy icon
      color: "bg-purple-100 text-purple-600",
      delay: 0.4,
    },
    {
      id: "business",
      title: t.services.businessTitle,
      desc: t.services.businessDesc,
      icon: Building2, // Reusing Briefcase for Business
      color: "bg-indigo-100 text-indigo-600",
      delay: 0.5,
    },
    {
      id: "travel",
      title: t.services.travelTitle,
      desc: t.services.travelDesc,
      icon: Plane,
      color: "bg-orange-100 text-orange-600",
      delay: 0.6,
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-base mb-6">
                    {service.desc}
                  </CardDescription>
                  <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact / Branch Info Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
        >
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Hotline */}
              <div className="flex flex-col items-center md:items-start gap-4 p-4">
                 <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-slate-500 font-medium mb-1">{t.homeContact.hotlineTitle}</h3>
                    <p className="text-2xl md:text-3xl font-bold text-slate-900">{t.homeContact.hotlineNumber}</p>
                 </div>
              </div>

              {/* Branch Info */}
              <div className="flex flex-col items-center md:items-start gap-4 p-4 pl-8">
                 <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">{t.homeContact.branchInfo}</h3>
                    <Button variant="outline" className="rounded-full hover:bg-teal-50 hover:text-teal-600 border-slate-200">
                       Find Near Me
                    </Button>
                 </div>
              </div>

              {/* Reviews */}
              <div className="flex flex-col items-center md:items-start gap-4 p-4 pl-8">
                 <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-slate-900 font-bold text-xl mb-2">{t.homeContact.reviewServices}</h3>
                    <Button variant="outline" className="rounded-full hover:bg-amber-50 hover:text-amber-600 border-slate-200">
                       Write a Review
                    </Button>
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
