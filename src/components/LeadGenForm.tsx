"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Home, Heart, Briefcase, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type InsuranceType = "auto" | "home" | "health" | "business";

export function LeadGenForm() {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState<InsuranceType | null>(null);
  const [formData, setFormData] = useState({
    zipCode: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (step === 1 && !selectedType) return;
    if (step === 2 && (!formData.zipCode || !formData.name)) return;
    if (step === 3 && (!formData.email || !formData.phone)) return; // Basic validation
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 500);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto backdrop-blur-md bg-white/70 border-white/40 shadow-2xl overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center p-12 text-center h-[400px]">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <CheckCircle2 className="w-20 h-20 text-emerald-500 mb-6" />
          </motion.div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.leadGen.success}</h3>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto backdrop-blur-md bg-white/60 border-white/40 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 left-0 h-1 bg-slate-200 w-full">
        <motion.div 
          className="h-full bg-blue-600"
          initial={{ width: "33%" }}
          animate={{ width: `${step * 33.33}%` }}
        />
      </div>

      <CardContent className="p-8">
        <AnimatePresence mode="wait" custom={step}>
          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900 text-center">{t.leadGen.step1Title}</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { id: "auto", icon: Car, label: t.leadGen.types.auto },
                  { id: "home", icon: Home, label: t.leadGen.types.home },
                  { id: "health", icon: Heart, label: t.leadGen.types.health },
                  { id: "business", icon: Briefcase, label: t.leadGen.types.business },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id as InsuranceType)}
                    className={cn(
                      "flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all duration-200 hover:scale-105",
                      selectedType === type.id
                        ? "border-blue-600 bg-blue-50/50 text-blue-700"
                        : "border-transparent bg-white/50 hover:bg-white/80 text-slate-600"
                    )}
                  >
                    <type.icon className={cn("w-8 h-8 mb-2", selectedType === type.id ? "text-blue-600" : "text-slate-400")} />
                    <span className="font-semibold">{type.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900 text-center">{t.leadGen.step2Title}</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-slate-700">{t.leadGen.inputs.zipCode}</Label>
                  <Input 
                    id="zipCode" 
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                    className="bg-white/50 border-slate-200 text-lg h-12"
                    placeholder="94105"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700">{t.leadGen.inputs.name}</Label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="bg-white/50 border-slate-200 text-lg h-12"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-slate-900 text-center">{t.leadGen.step3Title}</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700">{t.leadGen.inputs.email}</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="bg-white/50 border-slate-200 text-lg h-12"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-slate-700">{t.leadGen.inputs.phone}</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="bg-white/50 border-slate-200 text-lg h-12"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
            className={cn("text-slate-500 hover:text-slate-800 hover:bg-slate-100", step === 1 && "invisible")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.leadGen.buttons.back}
          </Button>
          <Button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-blue-500/30 transition-all"
          >
            {step === 3 ? t.leadGen.buttons.submit : t.leadGen.buttons.next}
            {step !== 3 && <ArrowRight className="w-5 h-5 ml-2" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

