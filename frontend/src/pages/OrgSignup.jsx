import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const OrgRegister = () => {
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
            className="aspect-auto h-[50vh] self-end animated-element"
            src="/Character-standing.png"
          />
          <div className="flex flex-col gap-3 flex-wrap">
            <h1 className="text-center">Organization Registration</h1>
            {!connected ? (
              <>
                {/* Add GST Number */}
                <Input
                  onChange={(e) => {
                    setGstNum(e.target.value);
                  }}
                  placeholder="Enter GST Number"
                  className="min-w-[20vw] text-black"
                />
                {/* Add the GST number addition here  */}
                <Button
                  onClick={handleGstSubmit}
                  className=" bg-[#4461F2] hover:bg-[#253896] "
                >
                  Find
                </Button>
              </>
            ) : (
              <>
                <Card className="bg-transparent text-center border-none text-white">
                  <CardHeader>
                    <CardTitle className="bg-white font-normal text-black rounded-lg p-4">
                      {fakeData.name}
                    </CardTitle>
                    <CardDescription className="font-bold">
                      {" "}
                      GST No: {GstNum}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="bg-white text-black p-4 rounded-lg mr-5">
                      {fakeData.entity}
                    </span>
                    <span className="bg-white text-black p-4 rounded-lg">
                      {fakeData.reg_date.getDate()} /{" "}
                      {fakeData.reg_date.getMonth()} /{" "}
                      {fakeData.reg_date.getFullYear()}{" "}
                    </span>
                  </CardContent>
                </Card>
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

export default OrgRegister;
