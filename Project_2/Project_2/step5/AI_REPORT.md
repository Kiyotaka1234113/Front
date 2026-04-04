# AI Usage Report

**Tool Used:** Google Gemini 3.1 Pro
**Date:** 04.04.2026

**1. Prompts Used:**
* "Lab 12: Styling & Responsive Layouts... [Pasted assignment instructions]"
* "приступай делать"
* "дай подробно расписанный проект"
* "Дай просто команду чтобы структу не писать"
* "Дай везде полный код"

**2. How I modified/verified the code:**
* I reviewed the TypeScript code provided by the AI to ensure all missing JSX tags from the PDF copy-paste error were correctly restored.
* I manually installed the required dependencies (`npx expo install react-native-safe-area-context`).
* I assembled the components into `App.tsx` and tested the application on the Expo Go app/simulator.
* I rotated the device and simulated a tablet to verify that `useWindowDimensions()` correctly toggled the `isTablet` boolean and adapted the layout.

**3. What I learned:**
* I learned how to use React Native's `StyleSheet` alongside `useWindowDimensions` to create components that respond to screen size changes in real-time.
* I learned the importance of `useSafeAreaInsets()` over the standard `SafeAreaView` component for more granular control over header padding.
* I understood how to build a flexible grid mathematically by subtracting spacing from the total width and dividing by the column count.