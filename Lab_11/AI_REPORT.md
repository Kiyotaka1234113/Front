# AI Usage Report — Lab 11: React Native Fundamentals

**Student Name:** Zhantore Kabylbek
**Date:** 2026-03-28

## Tool Used
- **AI Tool:** Antigravity (Google DeepMind coding assistant)

## Prompts Used

### Prompt 1
**Input:** Provided the full Lab 11 assignment specification and asked the AI to help implement both tasks.

**AI Output:** The AI helped create all required files for both Lab 11.1 and Lab 11.2 based on the assignment specifications.

## How Code Was Modified/Verified

### Task 1 (Lab 11.1 — Profile App)
1. **Expo project** was initialized using `npx create-expo-app@latest ProfileApp --template blank-typescript`
2. The AI helped create `ProfileCard.tsx` and `ContactSection.tsx` components
3. I verified the component structure matches the assignment requirements:
   - `View`, `Text`, `Image` used correctly in ProfileCard
   - `TextInput`, `TouchableOpacity` used correctly in ContactSection
   - `StyleSheet.create()` used for all styling (no CSS classes)
   - Flexbox layout properly applied

### Task 2 (Lab 11.2 — Product App)
1. A separate Expo project was created for the product listing app
2. React Navigation dependencies were installed
3. The AI helped create:
   - `products.ts` — data model with TypeScript interface
   - `ProductItem.tsx` — list item component
   - `ProductListScreen.tsx` — FlatList with pull-to-refresh
   - `ProductDetailScreen.tsx` — detail view with Platform.select()
   - `App.tsx` — NavigationContainer with Stack.Navigator
4. I verified:
   - FlatList is used instead of ScrollView for the product list
   - `keyExtractor` provides unique keys
   - Navigation between screens works correctly
   - `Platform.select()` applies platform-specific styles

### Folder Structure Verification
- Confirmed `Lab_11/task1/` and `Lab_11/task2/` structure
- Fixed folder naming issue (`companents` → `components`)

## What I Learned

### React Native Core Concepts
1. **Native Components:** React Native doesn't use DOM elements. Instead, `View` replaces `div`, `Text` replaces `p`/`span`, and `Image` replaces `img`. These map directly to native iOS/Android UI components.

2. **StyleSheet API:** Unlike web React where we use CSS files or CSS-in-JS, React Native uses `StyleSheet.create()` which takes JavaScript objects. There's no `className` prop — styles are passed via the `style` prop.

3. **Flexbox Differences:** React Native's default `flexDirection` is `column` (not `row` like web CSS). This is the primary layout mechanism and understanding it is essential.

4. **Events:** Web uses `onClick` and `onChange`, while React Native uses `onPress` and `onChangeText`. The `TouchableOpacity` component provides visual feedback on press.

### Navigation
5. **React Navigation:** Mobile apps need explicit navigation libraries. `NavigationContainer` manages nav state, `Stack.Navigator` provides stack-based navigation (like a card stack), and TypeScript generics provide type-safe navigation params.

### Performance
6. **FlatList vs ScrollView:** FlatList renders items lazily (only visible ones), making it essential for long lists. ScrollView renders everything at once and would cause performance issues with large datasets.

### Platform-Specific Code
7. **Platform.select() and Platform.OS:** These allow writing code that behaves differently on iOS vs Android, which is necessary because each platform has different UI conventions (e.g., shadows on iOS vs elevation on Android).
