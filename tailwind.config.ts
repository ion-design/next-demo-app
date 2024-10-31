// eslint-disable-next-line
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/**/*.{ts,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif"],
      },
      colors: {
        background: "var(--background)",
        disabled: "var(--disabled)",
        container: {
          DEFAULT: "var(--container)",
          high: "var(--container-high)",
        },
        inverse: {
          DEFAULT: "var(--inverse)",
        },
        on: {
          inverse: "var(--on-inverse)",
          disabled: "var(--on-disabled)",
          primary: "var(--on-primary)",
          "primary-container": "var(--on-primary-container)",
          "primary-hover": "var(--on-primary-hover)",
          "primary-pressed": "var(--on-primary-pressed)",
          neutral: "var(--on-neutral)",
          "neutral-container": "var(--on-neutral-container)",
          "neutral-hover": "var(--on-neutral-hover)",
          "neutral-pressed": "var(--on-neutral-pressed)",
          success: "var(--on-success)",
          "success-container": "var(--on-success-container)",
          "success-hover": "var(--on-success-hover)",
          "success-pressed": "var(--on-success-pressed)",
          warning: "var(--on-warning)",
          "warning-container": "var(--on-warning-container)",
          "warning-hover": "var(--on-warning-hover)",
          "warning-pressed": "var(--on-warning-pressed)",
          danger: "var(--on-danger)",
          "danger-container": "var(--on-danger-container)",
          "danger-hover": "var(--on-danger-hover)",
          "danger-pressed": "var(--on-danger-pressed)",
          info: "var(--on-info)",
          "info-container": "var(--on-info-container)",
          "info-hover": "var(--on-info-hover)",
          "info-pressed": "var(--on-info-pressed)",
        },
        foreground: "var(--foreground)",
        secondary: "var(--secondary)",
        subtle: "var(--subtle)",
        stroke: {
          DEFAULT: "var(--stroke)",
          subtle: "var(--stroke-subtle)",
          strong: "var(--stroke-strong)",
          disabled: "var(--stroke-disabled)",
          inverse: "var(--stroke-inverse)",
          primary: "var(--stroke-primary)",
          info: "var(--stroke-info)",
          danger: "var(--stroke-danger)",
          warning: "var(--stroke-warning)",
          success: "var(--stroke-success)",
        },
        primary: {
          accent: "var(--primary-accent)",
          container: "var(--primary-container)",
          DEFAULT: "var(--primary)",
          hover: "var(--primary-hover)",
          pressed: "var(--primary-pressed)",
          status: "var(--primary-status)",
        },
        neutral: {
          accent: "var(--neutral-accent)",
          container: "var(--neutral-container)",
          DEFAULT: "var(--neutral)",
          hover: "var(--neutral-hover)",
          pressed: "var(--neutral-pressed)",
        },
        success: {
          accent: "var(--success-accent)",
          container: "var(--success-container)",
          DEFAULT: "var(--success)",
          hover: "var(--success-hover)",
          pressed: "var(--success-pressed)",
          status: "var(--success-status)",
        },
        warning: {
          accent: "var(--warning-accent)",
          container: "var(--warning-container)",
          DEFAULT: "var(--warning)",
          hover: "var(--warning-hover)",
          pressed: "var(--warning-pressed)",
          status: "var(--warning-status)",
        },
        danger: {
          accent: "var(--danger-accent)",
          container: "var(--danger-container)",
          DEFAULT: "var(--danger)",
          hover: "var(--danger-hover)",
          pressed: "var(--danger-pressed)",
          status: "var(--danger-status)",
        },
        info: {
          accent: "var(--info-accent)",
          container: "var(--info-container)",
          DEFAULT: "var(--info)",
          hover: "var(--info-hover)",
          pressed: "var(--info-pressed)",
          status: "var(--info-status)",
        },
        tremor: {
          brand: {
            faint: "var(--primary-accent)",
            muted: "var(--primary-container)",
            subtle: "var(--primary-stroke)",
            DEFAULT: "var(--primary)",
            emphasis: "var(--primary-pressed)",
            inverted: "var(--on-primary)",
          },
          background: {
            muted: "var(--disabled)",
            subtle: "var(--container)",
            DEFAULT: "var(--background)",
            emphasis: "var(--container-high)",
          },
          border: {
            DEFAULT: "var(--stroke)",
          },
          ring: {
            DEFAULT: "var(--primary)",
          },
          content: {
            subtle: "var(--on-disabled)",
            DEFAULT: "var(--subtle)",
            emphasis: "var(--secondary)",
            strong: "var(--foreground)",
            inverted: "var(--background)",
          },
        },
      },
      boxShadow: {
        low: "0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 1px 2px 0px rgba(0, 0, 0, 0.08),0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 0px 8px 0px rgba(0, 0, 0, 0.05);",
        medium:
          "0px 1px 1px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.05),0px 5px 5px 0px rgba(0, 0, 0, 0.05), 0px 10px 10px 0px rgba(0, 0, 0, 0.05), 0px 0px 8px 0px rgba(0, 0, 0, 0.05)",
        high: "0px 2px 4px 0px rgba(0, 0, 0, 0.03), 0px 6px 6px 0px rgba(0, 0, 0, 0.03),0px 15px 20px 0px rgba(0, 0, 0, 0.03), 0px 30px 40px 0px rgba(0, 0, 0, 0.03),0px 40px 70px 0px rgba(0, 0, 0, 0.03), 0px 4px 30px 0px rgba(0, 0, 0, 0.03), 0px 0px 8px 0px rgba(0, 0, 0, 0.03)",
      },
      borderRadius: {
        "radius-none": "var(--radius-none)",
        "radius-xs": "var(--radius-xs)",
        "radius-sm": "var(--radius-sm)",
        radius: "var(--radius)",
        "radius-md": "var(--radius-md)",
        "radius-lg": "var(--radius-lg)",
        "radius-full": "var(--radius-full)",
      },
      fontSize: {
        "tremor-label": [
          "0.75rem",
          {
            lineHeight: "1rem",
          },
        ],
        "tremor-default": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
          },
        ],
        "tremor-title": [
          "1.125rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        "tremor-metric": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger|info|warning|success)(?:|-stroke|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(?:primary|neutral|danger|info|warning|success)(-stroke)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(?:bg|bg-on|text|text-on|border|border-on|fill|ring)-(?:primary|neutral|danger)(?:|-sub|-container|-accent|-pressed|-hover)$/,
      variants: ["hover", "ui-selected", "active"],
    },
    {
      pattern:
        /^(border)-(stroke)(?:-primary|-neutral|-danger|-info|-warning|-success)$/,
      variants: ["hover", "ui-selected", "active"],
    },
  ],
};
