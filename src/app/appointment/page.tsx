"use client";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AppointmentPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />

      <section className="pt-32 pb-24 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <PageHeader icon={Calendar} title={t.nav.appointment} subtitle={t.appointment.subtitle} />

          <div className="grid md:grid-cols-2 gap-6">
            {/* Info */}
            <div className="space-y-6">
              <div className="border border-neutral-200 rounded-lg p-8">
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-1">
                  {t.appointment.officeHours}
                </h2>
                <p className="text-neutral-500 text-sm mb-6">{t.appointment.officeHoursDesc}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-1 text-neutral-950 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-950">{t.appointment.monFri}</p>
                      <p className="text-neutral-600 text-sm font-mono">{t.appointment.hoursWeekday}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 mt-1 text-neutral-950 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-neutral-950">{t.appointment.saturday}</p>
                      <p className="text-neutral-600 text-sm font-mono">{t.appointment.hoursSaturday}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-neutral-200 rounded-lg p-8">
                <h2 className="font-mono text-xs uppercase tracking-wider text-neutral-500 mb-6">
                  {t.appointment.location}
                </h2>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-neutral-950 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-neutral-950">RenRen Insurance</p>
                    <p className="text-neutral-600 text-sm">1720 S San Gabriel Blvd Ste 210</p>
                    <p className="text-neutral-600 text-sm">San Gabriel, CA 91776</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="border border-neutral-900 rounded-lg p-8 h-fit">
              <h2 className="font-display text-xl font-bold text-neutral-950 mb-1">
                {t.appointment.requestAppointment}
              </h2>
              <p className="text-neutral-500 text-sm mb-6">{t.appointment.confirmMessage}</p>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-neutral-700">{t.appointment.fullName}</Label>
                  <Input id="name" placeholder={t.leadGen.inputs.name} className="rounded-md border-neutral-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-neutral-700">{t.appointment.email}</Label>
                  <Input id="email" type="email" placeholder={t.leadGen.inputs.email} className="rounded-md border-neutral-300" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-neutral-700">{t.appointment.serviceNeeded}</Label>
                  <Select>
                    <SelectTrigger className="rounded-md border-neutral-300 w-full">
                      <SelectValue placeholder={t.appointment.selectService} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="health">{t.appointment.services.health}</SelectItem>
                      <SelectItem value="auto">{t.appointment.services.auto}</SelectItem>
                      <SelectItem value="business">{t.appointment.services.business}</SelectItem>
                      <SelectItem value="other">{t.appointment.services.other}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-md px-6 py-3 text-sm font-semibold transition-colors group"
                >
                  {t.appointment.scheduleNow}
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
