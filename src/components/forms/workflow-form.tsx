"use client";
import React from "react";
import { useModal } from "../providers/modal-provider";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { WorkflowFormSchema } from "@/lib/types";

type Props = {
  title?: string;
  subTitle?: string;
};

const WorkFlowForm = ({ title, subTitle }: Props) => {
  const { setClose } = useModal();
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });
  const isLoading = form.formState.isLoading;
  const router = useRouter();
  return <div>WorkFlowForm</div>;
};

export default WorkFlowForm;
