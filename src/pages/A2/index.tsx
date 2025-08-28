import React, { useEffect, useMemo, useRef, useState } from "react";
import { FormProvider, useForm, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Progress } from "../../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { step1Schema, step2Schema, step3Schema } from "./schemaValidations";
import { generatePdfBlobUrl } from "./utils/pdfGenerate";
import type z from "zod";

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
export type FormValues = z.infer<typeof fullSchema>;

const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    startDate: "",
    plan: "",
    quantity: 1,
    notes: "",
};

const TOTAL_STEPS = 3;


function StepBadge({ n, active, done }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full grid place-items-center text-sm font-semibold ${active ? "bg-sky-600 text-white" : done ? "bg-sky-100 text-sky-700 border border-sky-300" : "bg-gray-100 text-gray-500"
                }`}>
                {n}
            </div>
        </div>
    );
}

function Step1Fields() {
    const {
        register,
        formState: { errors },
    } = useFormContextTyped();

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" placeholder="Nguyen Van A" {...register("fullName")} />
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="(+84) 901 234 567" {...register("phone")} />
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>}
                </div>
            </div>
        </div>
    );
}

function Step2Fields() {
    const {
        register,
        formState: { errors },
    } = useFormContextTyped();
    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Tran Hung Dao" {...register("address")} />
                {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address.message}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Hue" {...register("city")} />
                    {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>}
                </div>
                <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Vietnam" {...register("country")} />
                    {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country.message}</p>}
                </div>
            </div>
            <div>
                <Label htmlFor="startDate">Start date</Label>
                <Input id="startDate" type="date" {...register("startDate")} />
                {errors.startDate && <p className="text-xs text-red-600 mt-1">{errors.startDate.message}</p>}
            </div>
        </div>
    );
}

function Step3Fields() {
    const { register, setValue, watch, formState: { errors } } = useFormContextTyped();
    const plan = watch("plan");
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label>Plan</Label>
                    <Select value={plan} onValueChange={(v) => setValue("plan", v, { shouldValidate: true, shouldDirty: true })}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a plan…" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Basic">Basic</SelectItem>
                            <SelectItem value="Pro">Pro</SelectItem>
                            <SelectItem value="Enterprise">Enterprise</SelectItem>
                        </SelectContent>
                    </Select>
                    {errors.plan && <p className="text-xs text-red-600 mt-1">{errors.plan.message}</p>}
                </div>
                <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input id="quantity" type="number" min={1} {...register("quantity", { valueAsNumber: true })} />
                    {errors.quantity && <p className="text-xs text-red-600 mt-1">{errors.quantity.message}</p>}
                </div>
            </div>
            <div>
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea id="notes" rows={4} placeholder="Any specific requirements…" {...register("notes")} />
            </div>
        </div>
    );
}

function DoneStep() {
    return (
        <div className="py-10 text-center">
            <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center">
                ✓
            </div>
            <h3 className="text-lg font-semibold mb-1">All set!</h3>
        </div>
    );
}

function useFormContextTyped() {
    const methods = React.useContext(FormContext);
    return methods;
}

const FormContext = React.createContext(null);

export default function A2() {
    const methods = useForm({
        resolver: zodResolver(fullSchema),
        defaultValues,
        mode: "onChange",
        reValidateMode: "onChange",
    });

    const [step, setStep] = useState(1);
    const [pdfUrl, setPdfUrl] = useState(null);
    const lastUrl = useRef(null);

    const progressPct = useMemo(() => {
        if (step == 1) return 0;
        if (step == 2) return 50;
        return 100;
    }, [step]);


    const values = methods.watch();
    const stepSchema = step === 1 ? step1Schema : step === 2 ? step2Schema : step3Schema;
    const stepValid = stepSchema.safeParse(values).success;

    const updatePreview = () => {
        const url = generatePdfBlobUrl(methods.getValues());
        if (lastUrl.current) URL.revokeObjectURL(lastUrl.current);
        lastUrl.current = url;
        setPdfUrl(url);
    };

    const handleNext = async () => {
        const parse = stepSchema.safeParse(methods.getValues());
        if (!parse.success) {
            const fieldErrors = parse.error.flatten().fieldErrors;
            Object.entries(fieldErrors).forEach(([name, msgs]) => {
                if (msgs && msgs[0]) {
                    methods.setError(name as FieldPath<FormValues>, { type: "zod", message: msgs[0] });
                }
            });
            return;
        }
        updatePreview();
        if (step < TOTAL_STEPS) setStep((s) => s + 1);
    };

    const handleBack = () => {
        if (step > 1) setStep((s) => s - 1);
    };

    const handleReset = () => {
        methods.reset(defaultValues);
        setStep(1);
        if (lastUrl.current) URL.revokeObjectURL(lastUrl.current);
        setPdfUrl(null);
        lastUrl.current = null;
    };

    const handleSubmitAll = async () => {
        const ok = await methods.trigger();
        if (!ok) return;
        setStep(step => step + 1)
        updatePreview();
    };

    useEffect(() => () => { if (lastUrl.current) URL.revokeObjectURL(lastUrl.current); }, []);

    return (
        <FormProvider {...methods}>
            <FormContext.Provider value={methods}>
                <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-gray-900">
                    <div className="max-w-6xl mx-auto px-4 pt-8 pb-4 flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold">A2</h1>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={handleReset}>Reset all</Button>
                            {pdfUrl && (
                                <a href={pdfUrl} download="A2_Form.pdf">
                                    <Button className="bg-green-500 hover:bg-green-600 cursor-pointer ">Download PDF</Button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex items-center gap-4 mb-3">
                            <StepBadge n={1} active={step === 1} done={step > 1} />
                            <div className="flex-1 h-px bg-gray-200" />
                            <StepBadge n={2} active={step === 2} done={step > 2} />
                            <div className="flex-1 h-px bg-gray-200" />
                            <StepBadge n={3} active={step >= 3} done={false} />
                        </div>
                        <Progress value={progressPct} className="h-2" />
                    </div>
                    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="flex flex-col">
                            <CardHeader>
                                {step < 3 && <CardTitle>Step {step}</CardTitle>}
                                {step === 4 && <CardTitle>Thank you</CardTitle>}
                            </CardHeader>
                            <CardContent className="flex flex-col justify-between flex-1 ">
                                <form onSubmit={(e) => e.preventDefault()} className="space-y-6 flex flex-col justify-between  h-full">
                                    {step === 1 && <Step1Fields />}
                                    {step === 2 && <Step2Fields />}
                                    {step === 3 && <Step3Fields />}
                                    {step === 4 && <DoneStep />}
                                    <div className="flex items-center justify-between">
                                        <Button variant="outline" onClick={handleBack} disabled={step === 1} type="button">Back</Button>
                                        {
                                            step < 4 && <div className="flex items-center gap-2 ">
                                                <Button variant="outline" type="button" onClick={updatePreview}>Update preview</Button>
                                                {step < TOTAL_STEPS ? (
                                                    <Button type="button" onClick={handleNext} disabled={!stepValid}>Continue</Button>
                                                ) : (
                                                    <Button type="button" onClick={handleSubmitAll} disabled={!stepValid}>Submit all</Button>
                                                )}
                                            </div>
                                        }
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Live PDF Preview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative w-full h-52 sm:h-64 md:h-72 lg:h-80 border rounded-lg overflow-hidden bg-gray-50">
                                    {pdfUrl ? (
                                        <iframe title="PDF Preview" src={pdfUrl} className="absolute inset-0 w-full h-full" />
                                    ) : (
                                        <div className="absolute inset-0 grid place-items-center text-sm text-gray-500 px-4 text-center">
                                            The preview will appear here after you submit the first step.
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </FormContext.Provider>
        </FormProvider>
    );
}
