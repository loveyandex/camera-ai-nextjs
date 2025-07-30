"use client";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, CameraIcon } from "@heroicons/react/24/outline";
import CamerasModal from "./CamerasModal";

const dummyCameras = [
  {
    id: 1,
    name: "Front Gate",
    ip_address: "192.168.1.10",
    rtsp_url: "rtsp://192.168.1.10:554/stream1",
    channel: "1",
    location: "Entrance"
  },
  {
    id: 2,
    name: "Lobby",
    ip_address: "192.168.1.11",
    rtsp_url: "rtsp://192.168.1.11:554/stream2",
    channel: "2",
    location: "Main Lobby"
  },
  {
    id: 3,
    name: "Parking Lot",
    ip_address: "192.168.1.12",
    rtsp_url: "rtsp://192.168.1.12:554/stream3",
    channel: "3",
    location: "Parking"
  }
];

export default function CamerasPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cameras, setCameras] = useState(dummyCameras);

interface Camera {
      id: number;
      name: string;
      ip_address: string;
      rtsp_url: string;
      channel: string;
      location: string;
}

interface NewCamera {
      name: string;
      ip_address: string;
      rtsp_url: string;
      channel: string;
      location: string;
}

const handleAddCamera = (newCamera: NewCamera) => {
      setCameras([...cameras, { ...newCamera, id: cameras.length + 1 }]);
      setModalOpen(false);
};

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-10">
      <div className="flex items-center justify-between w-full max-w-3xl mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <CameraIcon className="h-8 w-8 text-primary" />
          Cameras
        </h1>
        <Button onClick={() => setModalOpen(true)} className="flex gap-2">
          <PlusIcon className="h-5 w-5" /> Add Camera
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {cameras.map((cam) => (
          <Card key={cam.id} className="shadow-lg">
            <CardHeader className="flex flex-row items-center gap-2">
              <CameraIcon className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">{cam.name}</span>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div><span className="font-medium">IP Address:</span> {cam.ip_address}</div>
              <div><span className="font-medium">RTSP URL:</span> {cam.rtsp_url}</div>
              <div><span className="font-medium">Channel:</span> {cam.channel}</div>
              <div><span className="font-medium">Location:</span> {cam.location}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      <CamerasModal open={modalOpen} onClose={() => setModalOpen(false)} onAdd={handleAddCamera} />
    </div>
  );
}
