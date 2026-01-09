import React, { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/lib/schema";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  const form = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      adminInviteToken: "",
    },
  });

  function onSubmit(data) {
    // Do something with the form values.
    console.log(data);
  }

  return (
    <AuthLayout>
      <Card className="shadow-none border-none">
        <CardHeader>
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>
            Join us today by entering your details below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-input-username">
                        Full Name
                      </FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="John Doe"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Email Address</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="john@example.com"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Password</FieldLabel>
                      <div className="relative">
                        <Input
                          {...field}
                          aria-invalid={fieldState.invalid}
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2">
                          {showPassword ? (
                            <Eye
                              className="h-5 w-5 text-primary cursor-pointer"
                              onClick={toggleShowPassword}
                            />
                          ) : (
                            <EyeOff
                              className="h-5 w-5 text-primary cursor-pointer"
                              onClick={toggleShowPassword}
                            />
                          )}
                        </span>
                      </div>
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="adminInviteToken"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Admin Invite Token</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="6 Digit Code"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                SIGN UP
              </Button>

              <FieldDescription className="text-center font-medium">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary underline font-semibold"
                >
                  Log In
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

export default SignUp;
