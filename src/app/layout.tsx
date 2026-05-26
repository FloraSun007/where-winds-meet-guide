import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Where Winds Meet Guide - 燕云十六声攻略",
  description:
    "The ultimate game guide for Where Winds Meet (燕云十六声). Complete walkthroughs, class guides, equipment tips, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
