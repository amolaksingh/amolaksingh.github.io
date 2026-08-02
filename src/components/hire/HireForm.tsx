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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 p-5 sm:space-y-6 sm:p-6 lg:p-8"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Full Name
          </label>

          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="John Smith"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {errors.name && (
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Email
          </label>

          <input
            {...register("email")}
            placeholder="john@company.com"
            type="email"
            autoComplete="email"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {errors.email && (
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Company
          </label>

          <input
            {...register("company")}
            placeholder="Google"
            autoComplete="organization"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.company && (
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.company.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Country
          </label>

          <input
            {...register("country")}
            placeholder="United States"
            autoComplete="country-name"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.country && (
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Job Role
          </label>

          <input
            {...register("role")}
            autoComplete="organization-title"
            placeholder="Senior Engineering Manager"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {errors.role && (
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.role.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Project Type
          </label>

          <div className="relative">
            <select
              {...register("projectType")}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 pr-12 text-base text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.projectType.message}
            </p>
          )}
        </div>
      </div>

           <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {/* Budget */}

        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Budget
          </label>

          <div className="relative">
            <select
              {...register("budget")}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 pr-12 text-base text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.budget.message}
            </p>
          )}
        </div>

        {/* Timeline */}

        <div>
          <label className="mb-2 block text-sm font-medium tracking-wide text-white">
            Timeline
          </label>

          <div className="relative">
            <select
              {...register("timeline")}
              className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 pr-12 text-base text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
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
            <p className="mt-2 text-xs font-medium text-red-400">
              {errors.timeline.message}
            </p>
          )}
        </div>
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block text-sm font-medium tracking-wide text-white">
          Project Description
        </label>

        <textarea
          {...register("description")}
          rows={5}
          placeholder="Tell me about your project, expected timeline, platform, requirements, integrations, or any other details..."
          className="min-h-[160px] w-full resize-y rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-base text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
        />

        {errors.description && (
          <p className="mt-2 text-xs font-medium text-red-400">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Buttons */}

      <div className="flex flex-col-reverse gap-3 border-t border-slate-800 pt-6 sm:flex-row sm:justify-end">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="w-full sm:w-auto"
        >
          Cancel
        </Button>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Sending Request..." : "Send Request"}
        </Button>
      </div>
    </form>
  );
}
