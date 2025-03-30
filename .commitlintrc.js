/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ["@commitlint/config-conventional"],
  formatter: "@commitlint/format",
  prompt: {
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          feat: {
            emoji: "✨",
            code: ":sparkles:",
            description: "✨ Introducing new features.",
            name: "feat",
          },
          fix: {
            emoji: "🐛",
            code: ":bug:",
            description: "🐛 Fixes a bug.",
            name: "fix",
          },
          docs: {
            emoji: "📝",
            code: ":memo:",
            description: "📝 Writing docs.",
            name: "docs",
          },
          style: {
            emoji: "💄",
            code: ":lipstick:",
            description: "💄 Updating the UI and style files.",
            name: "style",
          },
          chore: {
            emoji: "📦",
            code: ":package:",
            description: "📦 Updating compiled files or packages.",
            name: "chore",
          },
          perf: {
            emoji: "⚡️",
            code: ":zap:",
            description: "⚡️ Improving performance.",
            name: "perf",
          },
          test: {
            emoji: "🧪",
            code: ":test_tube:",
            description: "🧪 Adding tests.",
            name: "test",
          },
          build: {
            emoji: "🏗",
            code: ":building_construction:",
            description: "🏗 Making architectural changes.",
            name: "build",
          },
          ci: {
            emoji: "🚀",
            code: ":rocket:",
            description: "🚀 Adding CI build system.",
            name: "ci",
          },
          refactor: {
            emoji: "♻️",
            code: ":recycle:",
            description: "♻️ Refactoring code.",
            name: "refactor",
          },
          revert: {
            emoji: "⏪️",
            code: ":rewind:",
            description: "⏪️ Reverting changes.",
            name: "revert",
          },
        },
      },

      scope: {
        description:
          "What is the scope of this change (e.g. component or file name)",
      },
      subject: {
        description:
          "Write a short, imperative tense description of the change",
      },
      body: {
        description: "Provide a longer description of the change",
      },
      isBreaking: {
        description: "Are there any breaking changes?",
      },
      breakingBody: {
        description:
          "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself",
      },
      breaking: {
        description: "Describe the breaking changes",
      },
      isIssueAffected: {
        description: "Does this change affect any open issues?",
      },
      issuesBody: {
        description:
          "If issues are closed, the commit requires a body. Please enter a longer description of the commit itself",
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)',
      },
    },
  },
};

export default config;
