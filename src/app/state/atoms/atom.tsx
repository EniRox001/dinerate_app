"use client";
import { preferredTokens } from "@/constants/addresses/preferred-tokens";
import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false, // Set your default loading state here
});

export const contributionAmount = atom({
  key: "contributionAmount",
  default: "", // Set your default amount state here
});

export const currentAllowance = atom({
  key: "currentAllowance",
  default: 0, // Set your default amount state here
});

export const tokenInfoObj = atom({
  key: "tokenInfoObj",
  default: preferredTokens[0], // Set your default amount state here
});
