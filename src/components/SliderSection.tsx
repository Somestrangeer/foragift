import { Switch } from "@/components/ui/switch";
import { ReactNode } from "react";
import { useState } from "react";

export const SliderSection = () => {
const [isMediaEnabled, setIsMediaEnabled] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-6">
      <h2 className="text-lg font-medium">Фото и видео</h2>
      <Switch 
        checked={isMediaEnabled}
        onCheckedChange={setIsMediaEnabled}
      />
    </div>
  );
};