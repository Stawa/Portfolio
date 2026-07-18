import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Stawa";
const EXCLUDED_REPOS = [
  "Portfolio",
  "stawa",
];

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: {
          revalidate: 60 * 60,
        },
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories" },
        { status: res.status },
      );
    }

    const repos = await res.json();

    const projects = repos
      .filter((repo: any) => !repo.fork && !EXCLUDED_REPOS.includes(repo.name))
      .map((repo: any) => ({
        id: repo.id,
        title: repo.name,
        description: repo.description ?? "No description provided.",
        github: repo.html_url,
        demo: repo.homepage || null,
        stars: repo.stargazers_count,
        language: repo.language,
        topics: repo.topics,
        updatedAt: repo.updated_at,
        private: repo.private,
        archived: repo.archived,
      }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
