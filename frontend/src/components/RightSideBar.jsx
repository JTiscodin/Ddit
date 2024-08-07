import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const RightSideBar = ({ title, src, price, description }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex flex-col items-center text-white fixed overflow-y-auto overflow-x-hidden bg-[#14162E] right-0 p-14 w-[25vw] min-   h-screen">
      <Card className="bg-[#1D1932] w-[20vw]">
        <CardHeader>
          <CardTitle className="text-white">Post a product</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="title" />
          <Textarea className="my-4" placeholder="description" />
          <Input placeholder="price" />
          <Input
            className="my-4"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          {imagePreview && (
            <div className="my-4">
              <div className="my-2 w-full h-40 bg-gray-700 rounded-md overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          <CardFooter>
            <Button className="bg-[#6F4FF2] w-[22vw] hover:bg-[#462caf] ">
              Post
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
      <h1 className="mt-9 font-bold text-2xl  ">CoinEx Coin Update</h1>
      <Card className="bg-[#1D1932] text-white w-[20vw]">
        <CardContent className="flex p-5 flex-col justify-center items-center">
          {/* Coins start */}
          <div className="flex gap-2 flex-col my-2">
            <div classNtame="flex justify-between">
              <span>
                <img src="/ethereum-icon.svg" className="inline mr-2" />
                ETH / USDT
              </span>
              <span className="text-[#50BA23]">+10.69%</span>
            </div>
            <h1 className="text-xl font-bold">22525.16 = 2527.45 USD</h1>
            <hr />
          </div>
          <div className="flex gap-2 flex-col">
            <div classNtame="flex justify-between">
              <span>
                <img src="/ethereum-icon.svg" className="inline mr-2" />
                ETH / USDT
              </span>
              <span className="text-[#50BA23]">+10.69%</span>
            </div>
            <h1 className="text-xl font-bold">22525.16 = 2527.45 USD</h1>
            <hr />
          </div>
          <div className="flex gap-2 my-2 flex-col">
            <div classNtame="flex justify-between">
              <span>
                <img src="/ethereum-icon.svg" className="inline mr-2" />
                ETH / USDT
              </span>
              <span className="text-[#50BA23]">+10.69%</span>
            </div>
            <h1 className="text-xl font-bold">22525.16 = 2527.45 USD</h1>
            <hr />
          </div>
          {/* Coins end */}
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSideBar;
