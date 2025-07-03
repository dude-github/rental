"use client";
import HomeCard from "./HomeCard";

import { useRouter } from "next/navigation";

// import { useToast } from "@/hooks/use-toast";

const EQTypeList = () => {
  //   const { toast } = useToast();
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="Equipment Rentals"
        description=" "
        clasName="bg-orange-1"
        handleClick={() => router.push("/equipment-rental")}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Video Production"
        description=" "
        clasName="bg-blue-1"
        handleClick={() => router.push("video-production")}
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Web Streaming"
        description=" "
        clasName="bg-purple-1"
        handleClick={() => router.push("/web-streaming")}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="360 VR Production"
        description=" "
        clasName="bg-yellow-1"
        handleClick={() => router.push("/vr-production")}
      />
    </section>
  );
};

export default EQTypeList;
