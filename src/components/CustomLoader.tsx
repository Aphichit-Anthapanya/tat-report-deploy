import { ColorConfig } from "@/config";
import { BeatLoader } from "react-spinners";

interface ICustomLoader {
  size?: number;
}

export default function CustomLoader({ size }: ICustomLoader) {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <BeatLoader loading color={ColorConfig.darkBlue} size={size} />
    </div>
  );
}
