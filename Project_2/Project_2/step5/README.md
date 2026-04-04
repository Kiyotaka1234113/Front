# Project 2 Step 5: Styling & Responsive Layouts

**Student Name:** [Впишите ваше имя]
**Student ID:** [Впишите ваш ID]
**Date:** 04.04.2026

## Overview
This project implements a responsive mobile application layout using React Native's Flexbox system, replacing static layouts with adaptive designs that scale perfectly across phones and tablets.

## Responsive Design Implementation
1. **Flexbox & Grid Systems:** Implemented a custom `GridLayout` component that calculates `itemWidth` dynamically using `useWindowDimensions()`. It utilizes `flexDirection: 'row'` and `flexWrap: 'wrap'` to create a flexible grid structure.
2. **Safe Area Handling:** Used `react-native-safe-area-context` and the `useSafeAreaInsets` hook within `ResponsiveHeader` to dynamically add padding for device notches and home indicators, avoiding content overlap.
3. **Adaptive Layouts:** Created conditional rendering in `AdaptiveLayout` and `ResponsiveContainer`. By checking `const isTablet = width >= 768`, the app displays a sidebar navigation on tablets and defaults to a standard vertical stack on phones.
4. **Platform-Specific Styling:** Leveraged `Platform.OS` inside stylesheets (e.g., handling shadows differently via `elevation` for Android and `shadowColor` for iOS).