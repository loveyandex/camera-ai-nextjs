"use client";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";
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
      },
      {
            id: 4,
            name: "Warehouse",
            ip_address: "192.168.1.13",
            rtsp_url: "rtsp://192.168.1.13:554/stream4",
            channel: "4",
            location: "Storage Area"
      },
      {
            id: 5,
            name: "Backyard",
            ip_address: "192.168.1.14",
            rtsp_url: "rtsp://192.168.1.14:554/stream5",
            channel: "5",
            location: "Garden"
      },
      {
            id: 6,
            name: "Office 1",
            ip_address: "192.168.1.15",
            rtsp_url: "rtsp://192.168.1.15:554/stream6",
            channel: "6",
            location: "First Floor"
      },
      {
            id: 7,
            name: "Office 2",
            ip_address: "192.168.1.16",
            rtsp_url: "rtsp://192.168.1.16:554/stream7",
            channel: "7",
            location: "Second Floor"
      },
      {
            id: 8,
            name: "Server Room",
            ip_address: "192.168.1.17",
            rtsp_url: "rtsp://192.168.1.17:554/stream8",
            channel: "8",
            location: "IT Department"
      },
      {
            id: 9,
            name: "Reception",
            ip_address: "192.168.1.18",
            rtsp_url: "rtsp://192.168.1.18:554/stream9",
            channel: "9",
            location: "Front Desk"
      },
      {
            id: 10,
            name: "Hallway",
            ip_address: "192.168.1.19",
            rtsp_url: "rtsp://192.168.1.19:554/stream10",
            channel: "10",
            location: "Main Corridor"
      },
      {
            id: 11,
            name: "Rooftop",
            ip_address: "192.168.1.20",
            rtsp_url: "rtsp://192.168.1.20:554/stream11",
            channel: "11",
            location: "Roof"
      },
      {
            id: 12,
            name: "Loading Dock",
            ip_address: "192.168.1.21",
            rtsp_url: "rtsp://192.168.1.21:554/stream12",
            channel: "12",
            location: "Dock Area"
      },
      {
            id: 13,
            name: "Conference Room",
            ip_address: "192.168.1.22",
            rtsp_url: "rtsp://192.168.1.22:554/stream13",
            channel: "13",
            location: "Meeting Area"
      },
      {
            id: 14,
            name: "Elevator",
            ip_address: "192.168.1.23",
            rtsp_url: "rtsp://192.168.1.23:554/stream14",
            channel: "14",
            location: "Lift"
      },
      {
            id: 15,
            name: "Stairwell",
            ip_address: "192.168.1.24",
            rtsp_url: "rtsp://192.168.1.24:554/stream15",
            channel: "15",
            location: "Stairs"
      }
];

export default function CamerasPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cameras, setCameras] = useState(dummyCameras);
  const [darkMode, setDarkMode] = useState(true);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

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
    <div className="bg-background flex flex-col py-5 w-full">
      <div className="w-full px-4">
        <PageHeader
          title="Ip Cameraz"
          icon={<CameraIcon className="h-8 w-8 text-primary" />}
          onAdd={() => setModalOpen(true)}
          addLabel="اضافه کردن دوربین"
          onThemeToggle={handleThemeToggle}
          darkMode={darkMode}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
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
    </div>
  );
}
