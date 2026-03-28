# Lab 11.2: Lists, Navigation, and Platform-Specific Code

**Student Name:** Zhantore Kabbylbek
**Date:** 2026-03-28

## Overview

This project builds a product listing app with navigation using React Navigation. It demonstrates FlatList for efficient list rendering, stack navigation between screens, pull-to-refresh functionality, and platform-specific styling.

## Project Setup

```bash
# Create Expo app with blank TypeScript template
npx create-expo-app@latest ProductApp --template blank-typescript

# Navigate to project
cd ProductApp

# Install React Navigation dependencies
npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context

# Start the development server
npx expo start
```

## Project Structure

```
ProductApp/
├── App.tsx                              # Main app with NavigationContainer
├── src/
│   ├── data/
│   │   └── products.ts                  # Product data model and sample data
│   ├── components/
│   │   └── ProductItem.tsx              # Individual product list item
│   └── screens/
│       ├── ProductListScreen.tsx         # Home screen with FlatList
│       └── ProductDetailScreen.tsx       # Product detail screen
├── app.json
├── package.json
└── tsconfig.json
```

## Navigation Setup

### React Navigation Architecture

```
App.tsx
└── SafeAreaProvider
    └── NavigationContainer
        └── Stack.Navigator
            ├── ProductListScreen (initial)
            └── ProductDetailScreen
```

### How Navigation Works
1. `NavigationContainer` wraps the entire app and manages navigation state
2. `Stack.Navigator` creates a stack-based navigation (screens stack on top of each other)
3. `Stack.Screen` defines each screen with its component and options
4. Navigation between screens uses `navigation.navigate('ScreenName', { params })`
5. Screen receives params via `route.params`

### Type Safety
Navigation is fully typed using `RootStackParamList`:
```typescript
type RootStackParamList = {
  ProductList: undefined;        // No params needed
  ProductDetail: { product: Product };  // Requires a product object
};
```

## Key Concepts

### FlatList vs ScrollView
| Feature | FlatList | ScrollView |
|---------|----------|------------|
| Rendering | Lazy (only visible items) | All items at once |
| Performance | Efficient for long lists | Slow for large datasets |
| Pull-to-refresh | Built-in `RefreshControl` | Manual implementation |
| Key extraction | `keyExtractor` prop | Manual key management |

**FlatList is required** for product lists because it only renders items that are currently visible on screen, making it much more performant.

### Platform-Specific Code
The app uses `Platform.select()` and `Platform.OS` for platform-specific behavior:

```typescript
// Conditional rendering
Platform.OS === 'ios' ? 'iOS' : 'Android'

// Platform-specific styles
...Platform.select({
  ios: { shadowColor: '#0066cc', shadowOffset: { width: 0, height: 4 } },
  android: { elevation: 4 },
})
```

### Pull-to-Refresh
Implemented using `RefreshControl` component inside FlatList:
```typescript
<FlatList
  refreshControl={
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  }
/>
```

## Components Description

### ProductItem
- Displays a single product in a horizontal card layout
- Shows product image, name, category, description (2-line truncation), and price
- `TouchableOpacity` for press interaction and navigation

### ProductListScreen
- Uses `FlatList` for efficient list rendering
- `keyExtractor` provides unique keys for each item
- `useCallback` memoizes render functions for performance
- Pull-to-refresh with simulated 1-second delay

### ProductDetailScreen
- Shows full product details with large image
- Category badge, name, price, and description
- Platform info section showing current OS and version
- "Add to Cart" button with platform-specific shadow/elevation

## References
- Ch. 12 (Ch. 11): Kick-Starting React Native Projects with Expo (pp. 245–265)
- FlatList: p. 254
- Platform-specific code: p. 256
- React Navigation: p. 252
