// Generated with Ion on 10/30/2024, 5:52:49 PM
// Figma Link: https://www.figma.com/design/BsgE00bYWTmwm4RY0WmYN6?node-id=78:2941
"use client";
import { Code, Link, User, X } from "@phosphor-icons/react/dist/ssr";
import { type MouseEvent, useState } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Checkbox from "@/components/ion/Checkbox";
import NumberInput from "@/components/ion/NumberInput";
import { RadioGroup, RadioGroupItem as Radio } from "@/components/ion/Radio";

function AnimationExample() {
  const [members, setMembers] = useState<number | string | undefined>(
    undefined
  );
  const [name, setName] = useState("");
  const [projectLink, setProjectLink] = useState("");

  function cancelClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("cancelClickHandler fired" + e);
  }
  function confirmClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("confirmClickHandler fired" + e);
  }
  function xOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("xOnClickHandler fired" + e);
  }

  return (
    <div className="bg-background w-[500px] relative flex flex-col justify-center items-center rounded-radius-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
      <div className="w-full flex flex-col gap-5 px-10 py-5">
        <div className="text-2xl font-semibold text-foreground">
          Project Details
        </div>
        <div className="text-base text-foreground w-full max-w-[420px]">
          The details of the project that will be displayed publicly on the
          directory. Write out all the details for interested parties.
        </div>
        <Input
          placeholder="AWS Aggregator"
          iconLeading={<Code size={16} weight={"bold"} />}
          required
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <Input
          placeholder="https://google.com"
          iconLeading={<Link size={16} weight={"regular"} />}
          required
          label="Project Link"
          value={projectLink}
          onChange={(e) => setProjectLink(e.target.value)}
          className="w-full"
        />
        <NumberInput
          placeholder="10"
          showControls
          iconLeading={<User size={16} weight={"regular"} />}
          label="Members"
          showHintIcon
          hint="Only include active members"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          className="w-full"
        />
        <div className="h-[52px] w-full relative">
          {/* This frame above (node Frame 1597883113) does not use autolayout - it may display incorrectly */}
          <div className="absolute left-0 top-0 text-sm font-semibold text-foreground">
            Display Project to
          </div>
          <div className="h-5 w-full absolute left-0 top-8 flex items-start gap-5">
            <Checkbox label="Admins" />
            <Checkbox label="Visitors" />
            <Checkbox label="Developers" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <div className="text-sm font-semibold text-foreground">
            In the following Sectors:
          </div>
          <RadioGroup orientation="horizontal">
            <div className="w-full flex items-start gap-5">
              <Radio label="All" value="All" />
              <Radio label="Select sectors" value="Select sectors" />
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="bg-disabled w-full flex justify-between items-center gap-5 px-10 py-5">
        <Button
          variant="outline"
          color="neutral"
          size="md"
          onClick={cancelClickHandler}
        >
          Cancel
        </Button>
        <Button
          variant="filled"
          color="primary"
          size="md"
          onClick={confirmClickHandler}
        >
          Confirm
        </Button>
      </div>
      <Button
        iconLeading={<X size={16} weight={"regular"} />}
        variant="ghost"
        color="neutral"
        size="sm"
        onClick={xOnClickHandler}
        className="right-[15px] top-[13px] absolute"
      />
    </div>
  );
}
export default AnimationExample;
