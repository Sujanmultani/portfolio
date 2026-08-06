"use client";

import React, { useState } from "react";
import { IndexListPattern } from "@/components/projects/IndexListPattern";
import { MOCK_PROJECTS } from "@/data/mockProjects";
import { Search } from "lucide-react";

const CATEGORIES = ["All", "Full Stack", "Backend", "Frontend", "AI Infrastructure"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = MOCK_PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 py-12">
      {/* Header Banner */}
      <div className="mx-auto max-w-7xl px-6 md:px-12 space-y-6">
        <span className="eyebrow-label">INDEX — ALL PROJECTS</span>
        <h1 className="font-display-fluid font-extrabold text-text tracking-tight">
          Engineering Directory
        </h1>
        <p className="text-text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          A comprehensive index of technical case studies, backend microservice architectures, and creative front-end experiments.
        </p>

        {/* Filter Controls Bar */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-line pb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase px-3.5 py-1.5 border transition-all duration-300 ${
                  selectedCategory === cat
                    ? "border-accent bg-accent text-bg font-bold"
                    : "border-line bg-bg-elevated text-text-muted hover:border-text-muted hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack or title..."
              className="w-full border border-line bg-bg-elevated pl-9 pr-4 py-2 text-xs font-mono text-text placeholder-text-muted focus:border-accent focus:outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Index List Pattern */}
      {filteredProjects.length > 0 ? (
        <IndexListPattern
          projects={filteredProjects}
          title={`SHOWING (${filteredProjects.length}) CASE STUDIES`}
          subtitle="All Archived & Active Engineering"
        />
      ) : (
        <div className="mx-auto max-w-7xl px-6 md:px-12 py-16 text-center border-y border-line bg-bg-elevated">
          <p className="font-mono text-sm text-text-muted">
            No projects found matching query &quot;{searchQuery}&quot; under category &quot;{selectedCategory}&quot;.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 border border-accent bg-accent/10 px-4 py-2 font-mono text-xs text-accent hover:bg-accent hover:text-bg transition-colors"
          >
            RESET FILTERS
          </button>
        </div>
      )}
    </div>
  );
}
