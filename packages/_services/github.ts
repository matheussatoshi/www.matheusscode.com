"use server";


export async function getRepos() {
  const response = await fetch(
    `https://api.github.com/users/${process.env.GITHUB_PROFILE}/repos`,
    {
      cache: "force-cache",
    },
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar repositórios");
  }

  const data = await response.json();

  return data;
}

export async function getProfile() {
  const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_PROFILE}`, {
    cache: 'force-cache',
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar usuário");
  }

  const data = await response.json();

  return data;
}


