"use client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export type CameraForm = {
  name: string;
  ip_address: string;
  rtsp_url: string;
  channel: string;
  location: string;
};

export type CamerasModalAllFieldInOneSHotProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (camera: CameraForm) => void;
};

export default function CamerasModalAllFieldInOneSHot({ open, onClose, onAdd }: CamerasModalAllFieldInOneSHotProps) {
  const [form, setForm] = useState<CameraForm>({
    name: "",
    ip_address: "",
    rtsp_url: "",
    channel: "",
    location: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", ip_address: "", rtsp_url: "", channel: "", location: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Add New Camera (All Fields)</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="font-medium text-sm">Camera Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Front Gate"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label className="font-medium text-sm">IP Address</label>
          <input
            type="text"
            name="ip_address"
            value={form.ip_address}
            onChange={handleChange}
            placeholder="e.g. 192.168.1.10"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label className="font-medium text-sm">RTSP URL</label>
          <input
            type="text"
            name="rtsp_url"
            value={form.rtsp_url}
            onChange={handleChange}
            placeholder="e.g. rtsp://192.168.1.10:554/stream1"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label className="font-medium text-sm">Channel</label>
          <input
            type="text"
            name="channel"
            value={form.channel}
            onChange={handleChange}
            placeholder="e.g. 1"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <label className="font-medium text-sm">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Entrance"
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <div className="flex gap-2 justify-end mt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add Camera
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
