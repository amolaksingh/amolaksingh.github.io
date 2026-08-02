"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "../common/Button";
import { hireSchema, HireFormData } from "@/schemas/hireSchema";
import { ChevronDown } from "lucide-react";

type Props = {
  onClose: () => void;
};

export default function HireForm({ onClose }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<HireFormData>({
    resolver: zodResolver(hireSchema),
  });

  async function onSubmit(data: HireFormData) {
    try {
      const response = await fetch("/api/hire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error("Failed to send request");
      }

      alert("✅ Thank you! Your request has been sent.");

      onClose();
    } catch (error) {
      console.error(error);

      alert("❌ Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Full Name
          </label>

          <input
            {...register("name")}
            placeholder="John Smith"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.name && (
            <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Email
          </label>

          <input
            {...register("email")}
            placeholder="john@company.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.email && (
            <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Company
          </label>

          <input
            {...register("company")}
            placeholder="Google"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.company && (
            <p className="mt-2 text-sm text-red-400">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Country
          </label>

          <input
            {...register("country")}
            placeholder="United States"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.country && (
            <p className="mt-2 text-sm text-red-400">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Job Role
          </label>

          <input
            {...register("role")}
            placeholder="Senior Engineering Manager"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.role && (
            <p className="mt-2 text-sm text-red-400">{errors.role.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Project Type
          </label>

          <div className="relative">
            <select
              {...register("projectType")}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none transition focus:border-blue-500"
            >
              <option value="">Select Project Type</option>
              <option>Full Time</option>
              <option>Freelance</option>
              <option>Contract</option>
              <option>Consulting</option>
            </select>

            <ChevronDown
              size={20}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {errors.projectType && (
            <p className="mt-2 text-sm text-red-400">
              {errors.projectType.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Budget
          </label>

          <div className="relative">
            <select
              {...register("budget")}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none transition focus:border-blue-500"
            >
              <option value="">Select Budget</option>
              <option>$2k - $5k</option>
              <option>$5k - $10k</option>
              <option>$10k - $25k</option>
              <option>$25k+</option>
            </select>

            <ChevronDown
              size={20}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {errors.budget && (
            <p className="mt-2 text-sm text-red-400">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Timeline
          </label>

          <div className="relative">
            <select
              {...register("timeline")}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white outline-none transition focus:border-blue-500"
            >
              <option value="">Select Timeline</option>
              <option>Immediately</option>
              <option>Within 2 Weeks</option>
              <option>1 Month</option>
              <option>2–3 Months</option>
              <option>Flexible</option>
            </select>

            <ChevronDown
              size={20}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {errors.timeline && (
            <p className="mt-2 text-sm text-red-400">
              {errors.timeline.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-white">
          Project Description
        </label>

        <textarea
          {...register("description")}
          rows={6}
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>
      </div>
    </form>
  );
}
