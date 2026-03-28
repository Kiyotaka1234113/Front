# Lab 11.1: Expo Setup and Core Components

**Student Name:** Zhantore Kabylbek
**Date:** 2026-03-28

## Overview

This project demonstrates the fundamentals of React Native development using Expo. A profile screen is built with core React Native components, styled using the StyleSheet API and Flexbox layout.

## Project Setup

```bash
# Create Expo app with blank TypeScript template
npx create-expo-app@latest ProfileApp --template blank-typescript

# Navigate to project
cd ProfileApp

# Install dependencies
npm install

# Start the development server
npx expo start
```

Scan the QR code with Expo Go app on your phone, or press `a` for Android emulator / `i` for iOS simulator.

## Project Structure

```
ProfileApp/
├── App.tsx                        # Main app entry point
├── src/
│   └── components/
│       ├── ProfileCard.tsx        # Profile card with avatar, name, bio
│       └── ContactSection.tsx     # Contact form with inputs and submit
├── app.json                       # Expo configuration
├── package.json                   # Dependencies
└── tsconfig.json                  # TypeScript configuration
```

## Core Components Used

| React Native Component | Web Equivalent | Usage in Project |
|------------------------|----------------|------------------|
| `View`                 | `<div>`        | Container for layout (card, sections) |
| `Text`                 | `<p>`, `<span>`| Displaying name, role, bio, labels |
| `Image`                | `<img>`        | Profile avatar display |
| `TextInput`            | `<input>`      | Email, phone, message inputs |
| `TouchableOpacity`     | `<button>`     | Submit button with press feedback |
| `ScrollView`           | Scrollable div | Wrapping content for scrolling |
| `SafeAreaView`         | N/A            | Handling notch/safe areas |

## React Native vs React (Web) — Key Differences

### 1. Components
- **Web:** Uses HTML elements (`div`, `span`, `p`, `input`, `button`)
- **React Native:** Uses native components (`View`, `Text`, `TextInput`, `TouchableOpacity`)

### 2. Styling
- **Web:** CSS classes, external stylesheets, CSS-in-JS
- **React Native:** `StyleSheet.create()` API — styles are JavaScript objects, no CSS files

### 3. Layout
- **Web:** Full CSS (Grid, Flexbox, positioning)
- **React Native:** Flexbox only (default `flexDirection` is `column`, not `row`)

### 4. Events
- **Web:** `onClick`, `onChange`
- **React Native:** `onPress`, `onChangeText`

### 5. No className
- In React Native, there is no `className` prop. Styles are passed via the `style` prop using `StyleSheet` objects.

## Components Description

### ProfileCard
- Displays user profile info (name, role, bio) with an avatar image
- Uses `flexDirection: 'row'` for horizontal layout
- Shadow/elevation for card appearance

### ContactSection
- Contact form with email, phone, and message fields
- Uses `useState` for form state management
- Submit button disables when fields are empty
- Shows success message for 3 seconds after submission

## References
- Ch. 12 (Ch. 11): Kick-Starting React Native Projects with Expo (pp. 245–265)
- Core Components: p. 254
- Styling in React Native: p. 260
- TextInput & TouchableOpacity: p. 258
