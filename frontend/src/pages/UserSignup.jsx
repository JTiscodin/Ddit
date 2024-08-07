import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";

const UserRegister = () => {
  const [connected, setConnected] = useState(false);
  const [GstNum, setGstNum] = useState("");
  const handleGstSubmit = (e) => {
    //check the gst number get info
    if (GstNum.trim().length === 0) {
      console.log("Can't be empty");
      return;
    }
    console.log("got number");
    setConnected(true);
  };

  const handleMetmaskConnection = () => {
    //handle metamask connection
  };

  const [AnonAadhaar] = useAnonAadhaar();

  useEffect(() => {
    console.log("Country Identity status: ", AnonAadhaar.status);
    if (AnonAadhaar.status === "logged-in") setConnected(true);
  }, [AnonAadhaar]);

  let fakeData = {
    name: "HHG Goa",
    reg_date: new Date(Date.now()),
    entity: "Private lmited",
  };

  return (
    <>
      <div className="w-screen min-h-screen text-white bg-[#14162E]">
        {/* */}

        <div className="flex relative min-h-[80vh] justify-between px-24 items-center">
          <div className="max-w-[30vw] overflow-hidden">
            <h1 className="text-6xl text-center font-bold">
              GET STARTED WITH THE AWESOMENESS
            </h1>
          </div>
          <img
            className="aspect-auto h-[67vh] self-end animated-element"
            src="/Character-standing.png"
          />
          <div className="flex flex-col gap-3 flex-wrap">
            <h1 className="text-center text-3xl">User Registration</h1>
            {!connected ? (
              <>
                {/* Add GST Number */}
                <div
                  onClick={handleGstSubmit}
                  className=" bg-[#4461F2] p-4 rounded-xl flex justify-between hover:bg-[#253896] "
                >
                  Upload Your Aadhar Below <img src="/aadhar.png" />
                </div>
                <LogInWithAnonAadhaar nullifierSeed={1234} />
              </>
            ) : (
              <>
                <Button
                  onClick={handleMetmaskConnection}
                  className=" bg-[#4461F2] hover:bg-[#253896] "
                >
                  Connect to Metamask{" "}
                  <img className="ml-2" src="/metamask-icon.png" />
                </Button>
              </>
            )}
          </div>
          <div className="aspect-square absolute opacity-65 left-32 top-24 blur-[100px]  rounded-full w-56 bg-[#DDA82A]"></div>
          <div className="aspect-square absolute opacity-65 left-72 top-80 blur-[100px]  rounded-full w-56 bg-[#4461F2]"></div>
        </div>
      </div>
    </>
  );
};

export default UserRegister;
