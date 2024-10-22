import React from "react";
import BlurFade from "./ui/blur-fade";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
import { Input } from "./ui/input";

export default function HeroSection() {
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
          <form
            id="emailForm"
            className="flex gap-1 flex-col md:flex-row justify-center align-middle mx-8 md:mx-10"
          >
            <Input
              id="emailInput"
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none md:max-w-xs"
              required
            />
            <Button
              id="subscribeButton"
              type="submit"
              className="border border-gray-200 rounded-xl"
            >
              Subscribe
            </Button>
          </form>
          <div
            id="successMessage"
            className="hidden text-green-500 text-sm md:text-md lg:text-lg xl:text-xl mt-8 mx-3 md:mx-4"
          >
            You are all set, We will reach out to you when the early access
            opens!
          </div>
          <div
            id="errorMessage"
            className="hidden text-sm md:text-md lg:text-lg xl:text-xl mt-4 text-red-400 mx-3 md:mx-4"
          >
            Could not add that email address. Please try again.
          </div>
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
