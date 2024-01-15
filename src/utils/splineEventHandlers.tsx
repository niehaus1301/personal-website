import { SplineEvent } from "@splinetool/react-spline";

export default function handleMouseDown(event: SplineEvent) {
  if (event.target.name === "Laptop") {
    console.log("USER CLICKED ON LAPTOP");
  }
}
