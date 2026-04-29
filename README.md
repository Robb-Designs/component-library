# Component Library

A lightweight React + TypeScript component library playground built with Vite and Tailwind CSS.

This project currently includes three reusable UI components:
- AlertBox
- UserProfileCard
- ProductDisplay

The app in development mode acts as a showcase page where you can preview component variants and experiment with props.

---

## Features

- Typed components with TypeScript interfaces
- Reusable card-based design language with shared CSS variables
- Tailwind CSS utility styling


## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4

## Project Structure

```text
src/
    components/
        AlertBox/
            AlertBox.tsx
            AlertBoxDisplay.tsx
        UserProfileCard/
            UserProfileCard.tsx
            UserProfileDisplay.tsx
        ProductDisplay/
            ProductDisplay.tsx
            ProductDisplay.test.tsx
    types/
        index.ts
    assets/
    App.tsx
    index.css
```

## Component Usage

### 1) AlertBox

Displays contextual feedback messages with optional dismiss action.

Props:
- `type`: `"success" | "error" | "warning" | "info"` (required)
- `message`: string (required)
- `onClose`: function (optional)
- `children`: ReactNode (optional)

Example:

```tsx
import { AlertBox } from "./components/AlertBox/AlertBox";

<AlertBox
    type="success"
    message="Your profile has been updated successfully."
    onClose={() => alert("Alert closed")}
>
    <p className="mt-2 text-sm">Changes were saved and synced.</p>
</AlertBox>;
```

### 2) UserProfileCard

Renders user identity details with optional visibility controls and edit callback.

Props:
- `user`: User object (required)
- `showEmail`: boolean (optional)
- `showRole`: boolean (optional)
- `onEdit`: function receiving `userId` (optional)
- `children`: ReactNode (optional)

Example:

```tsx
import { UserProfileCard } from "./components/UserProfileCard/UserProfileCard";

<UserProfileCard
    user={{
        id: "1",
        name: "Robb L.",
        email: "thisemail@email.com",
        role: "Software Engineer",
    }}
    showEmail={true}
    showRole={true}
    onEdit={(userId) => alert(`Edit user with ID: ${userId}`)}
/>;
```


### 3) ProductDisplay

Shows product details with configurable description/stock visibility and optional add-to-cart action.

Props:
- `product`: Product object (required)
- `showDescription`: boolean (optional)
- `showStockStatus`: boolean (optional)
- `onAddToCart`: function receiving `productId` (optional)
- `children`: ReactNode (optional)

Example:

```tsx
import ProductDisplay from "./components/ProductDisplay/ProductDisplay";
import headphonesImage from "./assets/headphones.jpg";

<ProductDisplay
    product={{
        id: "1",
        name: "Wireless Headphones",
        description: "High-quality sound with comfortable all-day wear.",
        price: 99.99,
        inStock: true,
        imageUrl: headphonesImage,
    }}
    showDescription={true}
    showStockStatus={true}
    onAddToCart={(productId) => alert(`Added product ${productId}`)}
/>;
```

## Future Ideas

- Add unit tests for all component variants
- Add Storybook for interactive documentation
- Improve accessibility checks and keyboard interactions