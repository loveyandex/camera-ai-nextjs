"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type CamerasModalProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (camera: CameraForm) => void;
};

type CameraForm = {
  name: string;
  ip_address: string;
  rtsp_url: string;
  channel: string;
  location: string;
};

export default function CamerasModal({ open, onClose, onAdd }: CamerasModalProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<CameraForm>({
    name: "",
    ip_address: "",
    rtsp_url: "",
    channel: "",
    location: ""
  });

  const steps: Array<{ label: string; field: keyof CameraForm; placeholder: string }> = [
    {
      label: "Camera Name",
      field: "name",
      placeholder: "e.g. Front Gate"
    },
    {
      label: "IP Address",
      field: "ip_address",
      placeholder: "e.g. 192.168.1.10"
    },
    {
      label: "RTSP URL",
      field: "rtsp_url",
      placeholder: "e.g. rtsp://192.168.1.10:554/stream1"
    },
    {
      label: "Channel",
      field: "channel",
      placeholder: "e.g. 1"
    },
    {
      label: "Location",
      field: "location",
      placeholder: "e.g. Entrance"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [steps[step].field]: e.target.value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onAdd(form);
      setForm({ name: "", ip_address: "", rtsp_url: "", channel: "", location: "" });
      setStep(0);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Add New Camera</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <label className="font-medium text-sm">{steps[step].label}</label>
          <input
            type="text"
            value={form[steps[step].field]}
            onChange={handleChange}
            placeholder={steps[step].placeholder}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex gap-2 justify-between mt-4">
            <Button variant="outline" onClick={handleBack} disabled={step === 0}>
              Back
            </Button>
            <Button onClick={handleNext}>
              {step < steps.length - 1 ? "Next" : "Add Camera"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
