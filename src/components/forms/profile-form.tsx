"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { EditUserProfileSchema } from "@/lib/types";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

type Props = {
  user: any;
  onUpdate?: any;
};

const ProfileForm = ({ user, onUpdate }: Props) => {
  const [loading, setloading] = useState(false);
  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    setloading(true);
    await onUpdate(values.name);
    setloading(false);
  };

  useEffect(() => {
    form.reset({ name: user.name, email: user.email });
  }, [user]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          disabled={loading}
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Name" />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email"
                  type="email"
                  disabled={true}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving
            </>
          ) : (
            "Save User Settings"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ProfileForm;
