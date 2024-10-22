"use client";
import React, { useState } from "react";
import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
import { Input } from "./ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(false);
    setIsSubscribing(true);

    if (email) {
      try {
        const response = await fetch(
          `https://addearlyaccessuser-v4mpmgatrq-uc.a.run.app?email=${encodeURIComponent(
            email
          )}`
        );
        if (response.status === 200) {
          setSuccessMessage(true);
        } else {
          setErrorMessage(true);
        }
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage(true);
      } finally {
        setIsSubscribing(false);
      }
    }
  };

  return (
    <section className="flex justify-center h-[70vh] items-center">
      <div className="text-center max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl">
        <BlurFade delay={0.2} inView>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4">
            Stop Drowning in Papers
          </h1>
        </BlurFade>
        <BlurFade delay={0.2 * 2} inView>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-8 lg:mb-16">
            Start Finding in Seconds
          </h1>
        </BlurFade>
        <BlurFade delay={0.2 * 3} inView>
          <p className="text-sm md:text-md lg:text-lg xl:text-xl mb-8 md:mb-16 text-gray-400 mx-3 md:mx-4">
            Transform your mountain of documents into an intelligent, searchable
            digital library. Never lose another important paper again. Become an
            early adopter and transform your document mess into searchable,
            actionable intelligence.
          </p>
        </BlurFade>
        <BlurFade delay={0.2 * 4} inView>
          <h3 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6">
            Sign up for early Access
          </h3>
        </BlurFade>
        <BlurFade delay={0.2 * 5} inView>
          {!successMessage && (
            <form
              id="emailForm"
              className="flex gap-1 flex-col md:flex-row justify-center align-middle mx-8 md:mx-10"
              onSubmit={handleSubmit}
            >
              <Input
                id="emailInput"
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none md:max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                id="subscribeButton"
                type="submit"
                className="border border-gray-200 rounded-xl"
                disabled={isSubscribing}
              >
                {isSubscribing && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}

                {isSubscribing ? "Subscribing" : "Subscribe"}
              </Button>
            </form>
          )}
          {successMessage && (
            <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-green-400">
              Thank you for your interest, You are all set!
            </p>
          )}
          {errorMessage && (
            <p className="text-xs md:text-sm lg:text-lg xl:text-xl text-red-400">
              Could not add that email address. Please try again.
            </p>
          )}
        </BlurFade>
      </div>
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={80}
        color={"#000"}
        refresh
      />
    </section>
  );
}
