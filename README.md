## Folder Structure

```
high-converting-landing-page-template/
│
├── public/
│   └── images/
│       └── Static assets like images and icons
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Global layout components
│   │   │
│   │   └── sections/
│   │       └── Landing page specific sections
│   │
│   ├── styles/
│   │   └── base/
│   │       └── Global SCSS
│   │
│   ├── hooks/
│   │   └── Custom React hooks
│   │
│   └── types/
│       └── TypeScript type definitions
│
├── app/
│   └── Next.js 15+ App Router
│
├── next.config.mjs
├── package.json
├── LICENSE
└── README.md
```

## Naming Convention

### PascalCase

PascalCase for type-related and React-specific constructs.

- React Components
- TypeScript Interfaces
- Type Definitions
- Enum Types

#### React Components Examples

```
// src/components/sections/HeroSection.tsx
export default function HeroSection() {
  return <section>Hero Content</section>;
}
```

#### TypeScript Interfaces Examples

```
// src/types/Product.ts
export interface ProductDetails {
  productId: number;
  productName: string;
  price: number;
}
```

#### Enum Examples

```
// src/types/Roles.ts
export enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Viewer = 'VIEWER'
}
```

### camelCase

camelCase for most variables, functions, and file names.

- File names
- Function names
- Variable names
- Utility functions

#### File Name Examples

```
// src/utils/userAuthentication.ts
export const authenticateUser = () => { /* ... */ }

// src/hooks/useUserData.ts
export function useUserData() { /* ... */ }
```

#### Variable Name Examples

```
// Inside a component or function
const userProfile = { name: 'John Doe', age: 30 };
let isLoggedIn = false;
const productList = [];

function processData() {
  const currentUser = getUserInfo();
  const totalItems = calculateItemCount();
}
```

### kebab-case

kebab-case for CSS module and some file naming scenarios.

- CSS/SCSS module files

#### SCSS Examples

```
// src/styles/base/_global.scss
.page-container {
  max-width: 1200px;
  margin: 0 auto;
}
```
