import { Button, Input } from "@/app/_components";
import { CreationStep } from "../creation-step";
import {
  AddressBook,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  MapPin
} from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

interface IModalAsideCreate {}

export function ModalAsideCreate({}: IModalAsideCreate) {
  const [step, setStep] = useState(0);

  const handleStep = (newStep: number) =>
    newStep >= 0 && newStep <= 2 && setStep(newStep);

  return (
    <div className="flex h-full flex-col">
      <div className="flex gap-3 border-b border-primary-border py-10">
        <CreationStep
          Icon={<CheckCircle />}
          onClick={() => handleStep(0)}
          reached={step >= 0}
          title="Personal data"
        />
        <CreationStep
          Icon={<AddressBook />}
          onClick={() => handleStep(1)}
          reached={step >= 1}
          title="Contact"
        />
        <CreationStep
          Icon={<MapPin />}
          onClick={() => handleStep(2)}
          reached={step === 2}
          title="Location"
        />
      </div>
      <div className="flex h-full flex-col gap-10 py-10">
        <Input
          variant={{ type: "outlined" }}
          label="Phone"
          placeholder="Phone"
        />
        <Input
          variant={{ type: "outlined" }}
          label="Email"
          placeholder="Email"
        />
      </div>
      <div className="flex gap-4">
        <Button
          variant={{ type: "outlined", color: "primary" }}
          onClick={() => handleStep(step - 1)}
        >
          <ArrowLeft />
          Previous
        </Button>
        <Button onClick={() => handleStep(step + 1)}>
          Next
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
