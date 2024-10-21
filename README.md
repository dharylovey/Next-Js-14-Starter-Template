# Next Js Setup with eslint & prettier

### 1. Install Next JS 14 App Router

```tsx
npx create-next-app@latest

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

```

### 2. Setup eslint & prettier

```tsx
npm install --save-dev prettier eslint

```

### 3. **Create a Prettier Configuration File**

Create a **.prettierrc** file in the root of your project:

```tsx
{
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "trailingComma": "es5"
}
```

### **4. Configure VSCode to Use Prettier // optional**

If you use Visual Studio Code, you can configure it to use Prettier automatically. Add the following settings to your **settings.json**:

```tsx
// optional
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### 5. **Create an ESLint Configuration File**

Create a **.eslintrc.json** file in the root of your project:

```tsx
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "next/core-web-vitals",
    "next/typescript",
    "eslint:recommended",
    "plugin:@next/next/recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "react/react-in-jsx-scope": "off"
  }
}

```

### **6. Integrate Prettier with ESLint**

To ensure **Prettier** and **ESLint** work together seamlessly, install the following plugins:

```tsx
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
```

Update your **.eslintrc.json** to include **Prettier** configurations:

```tsx
"plugins": ["prettier"],
```

### 7. **Configure ESLint to Automatically Fix Errors**

Add the following script to your **package.json**:

```tsx
"scripts": {
  "lint": "eslint . --fix"
}
```

[**Integrating Tailwind CSS with Prettier**](https://www.notion.so/Integrating-Tailwind-CSS-with-Prettier-12625c3b05c780eca2bfec3d5d3438da?pvs=21)

[**Setting Up a Pre-commit Hook with Lint-staged**](https://www.notion.so/Setting-Up-a-Pre-commit-Hook-with-Lint-staged-12625c3b05c7800b869dcdd0e2afae34?pvs=21)


# Integrating Tailwind CSS with Prettier

To ensure your Tailwind CSS classes are sorted automatically, use the **prettier-plugin-tailwindcss**

### 1. **Install the Plugin**

```tsx
npm install --save-dev prettier-plugin-tailwindcss
```

### **2: Update the Prettier Configuration**

Add the **prettier-plugin-tailwindcss** to your **.prettierrc**:

```tsx
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

This plugin will automatically sort tailwind classes, ensuring a consistent order.


# Setting Up a Pre-commit Hook with Lint-staged

To ensure your code is linted and formatted before each commit, set up a pre-commit hook using **lint-staged** and **husky**.

### **1: Install Husky and Lint-staged**

```tsx
npm install --save-dev husky lint-staged
```

### **2: Configure Husky and Lint-staged**

Add the following configuration to your **package.json**:

```tsx
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.js": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.ts": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.jsx": [
    "eslint --fix",
    "prettier --write"
  ],
  "*.tsx": [
    "eslint --fix",
    "prettier --write"
  ]
}
```

This is how it looks in your package.json

```tsx
{
  "name": "nextjs14-setup",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --fix",
    "prettier": "prettier --write ."
  },
  "dependencies": {
    "next": "14.2.15",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8.57.1",
    "eslint-config-next": "14.2.15",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "husky": "^9.1.6",
    "lint-staged": "^15.2.10",
    "postcss": "^8",
    "prettier": "^3.3.3",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.js": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.ts": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.jsx": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.tsx": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```