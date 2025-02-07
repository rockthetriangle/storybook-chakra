# SAT Common Component Library

A scalable and reusable UI component library built with **Chakra UI** and **Storybook**, designed to enhance development productivity and ensure consistent UI design.

## Features

- 💅 **Theme-Driven Design**: Fully customizable Chakra UI theme.
- 📚 **Storybook Integration**: Isolated development and documentation of UI components.
- 🧪 **Component Testing**: Easily test and interact with components.
- 🔧 **Reusable Components**: Modular design for rapid development.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 16.x or higher
- **npm**: Version 7.x or higher (or `yarn` if preferred)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rockthetriangle/common-ui.git
   cd common-ui	```
   
2. Install dependencies:
   ```bash
   npm install	```
   
3. Start Storybook:
   ```bash
   npm run storybook	```
   
## Project Structure
 
## Testing
   ```bash
   npm test	```
   
# 🚀 Chakra 3 + Atomic Design + Storybook 8

This project follows **Atomic Design principles** while integrating with **Chakra 3** and **Storybook 8**. It organizes UI components in a scalable, modular structure to improve maintainability and flexibility.

---

## 📂 Project Structure

```
src/
│
├── assets/
│   ├── icons/
│   │   ├── search.svg
│   │   ├── checkmark.svg
│   ├── images/
│   │   ├── logo.png
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Icon.tsx
│   │   ├── Input.tsx
│   ├── molecules/
│   │   ├── SidebarItem.tsx
│   │   ├── NavbarItem.tsx
│   ├── organisms/
│   │   ├── Sidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│
├── layouts/
│   ├── AdminLayout.tsx
│   ├── AuthLayout.tsx
│
├── views/
│   ├── Dashboard.tsx
│   ├── Billing.tsx
│   ├── Profile.tsx
│
├── stories/
│   ├── Sidebar.stories.tsx
│   ├── Button.stories.tsx
│
├── theme/
│   ├── index.ts
│   ├── colors.ts
│   ├── typography.ts
│
├── context/
│   ├── ThemeContext.tsx
│   ├── SidebarContext.tsx
│
├── hooks/
│   ├── useSidebar.ts
│   ├── useTheme.ts
│
├── utils/
│   ├── helpers.ts
│   ├── constants.ts
│
├── config/
│   ├── routes.ts
│   ├── api.ts
│
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   ├── manager.ts
│
📜 App.tsx
📜 main.tsx
📜 tsconfig.json
📜 vite.config.ts
📜 package.json
📜 README.md
```

---

## 🔹 Key Features

✅ **Atomic Design Structure:** Organized into **Atoms, Molecules, Organisms, Templates, and Pages**.\
✅ **Storybook 8 Integration:** Separate `stories/` directory for easy UI component documentation.\
✅ **Argon Dashboard Chakra Components:** Fully integrated with the design system.\
✅ **Chakra UI Theme Support:** Custom theme files (`theme/`) for consistent styling.\
✅ **Reusable Hooks & Context API:** State management for sidebar, theme, and authentication.

